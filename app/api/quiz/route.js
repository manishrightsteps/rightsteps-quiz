import { NextResponse } from "next/server";
import OpenAI from "openai";
import {
  QUESTION_BANK,
  QUIZ_CONFIG,
  AI_PROMPTS
} from "../../../lib/constant.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const {
      studentName,
      grade,
      subject,
      questionSource,
      difficulty = "EASY",
      numberOfQuestions = QUIZ_CONFIG.MAX_QUESTIONS_PER_QUIZ
    } = body;

    if (!studentName || !grade || !subject || !questionSource) {
      return NextResponse.json(
        { error: "Missing required fields: studentName, grade, subject, questionSource" },
        { status: 400 }
      );
    }

    let questions = [];

    const systemPrompt = await import("../../../lib/system.prompt.js");
    let prompt;
    let aiInput;

    if (questionSource === "TEACHER_PREPARED") {
      const availableQuestions = QUESTION_BANK.filter(q =>
        q.grade === grade &&
        q.subject === subject &&
        q.difficulty === difficulty
      );

      if (availableQuestions.length < numberOfQuestions) {
        return NextResponse.json(
          { error: `Not enough ${difficulty} ${subject} questions available for grade ${grade}` },
          { status: 400 }
        );
      }

      const selectedQuestions = availableQuestions
        .sort(() => 0.5 - Math.random())
        .slice(0, numberOfQuestions);

      prompt = `You are the Rightsteps AI Quiz Master. Present these teacher-prepared questions to the student in a friendly, encouraging way. Ask each question exactly as written, but add your personality to make it engaging for a grade ${grade} student.`;
      aiInput = `Present these ${numberOfQuestions} questions to the student: ${JSON.stringify(selectedQuestions)}. Keep the original question content but make your presentation warm and encouraging.`;

    } else if (questionSource === "AI_GENERATED") {
      prompt = AI_PROMPTS[subject.toUpperCase()][difficulty]
        .replace('{grade}', grade)
        .replace('{topic}', `${subject} concepts for grade ${grade}`);
      aiInput = `${prompt}. Generate ${numberOfQuestions} questions in the exact JSON format specified.`;
    } else {
      return NextResponse.json(
        { error: "Invalid question source. Must be TEACHER_PREPARED or AI_GENERATED" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt.default || systemPrompt.QUIZ_GENERATOR_PROMPT
        },
        {
          role: "user",
          content: aiInput
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    try {
      const aiResponse = JSON.parse(completion.choices[0].message.content);
      questions = aiResponse.questions || aiResponse;
    } catch (parseError) {
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      );
    }

    const quizSession = {
      id: `quiz_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      studentName,
      grade,
      subject,
      questionSource,
      difficulty,
      questions,
      startTime: new Date().toISOString(),
      timeLimit: QUIZ_CONFIG.TIME_LIMIT_MINUTES,
      totalQuestions: questions.length,
      currentQuestionIndex: 0,
      answers: [],
      hintsUsed: 0,
      maxHints: QUIZ_CONFIG.HINTS_ALLOWED
    };

    return NextResponse.json({
      success: true,
      quiz: quizSession
    });

  } catch (error) {
    console.error("Quiz generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate quiz" },
      { status: 500 }
    );
  }
}
