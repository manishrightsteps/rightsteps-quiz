"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Lightbulb, CheckCircle, XCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function QuizTaking({ quizData, onComplete, onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [timeLeft, setTimeLeft] = useState(quizData.timeLimit * 60)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [currentHintIndex, setCurrentHintIndex] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizData.totalQuestions) * 100

  const handleQuizComplete = useCallback(() => {
    const score = answers.filter(a => a.isCorrect).length
    const percentage = Math.round((score / quizData.totalQuestions) * 100)

    const result = {
      ...quizData,
      answers,
      score,
      totalQuestions: quizData.totalQuestions,
      percentage,
      completedAt: new Date().toISOString(),
      timeSpent: (quizData.timeLimit * 60) - timeLeft,
      hintsUsed
    }

    onComplete(result)
  }, [answers, quizData, timeLeft, hintsUsed, onComplete])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      handleQuizComplete()
    }
  }, [timeLeft, handleQuizComplete])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (option) => {
    if (!showFeedback) {
      setSelectedAnswer(option)
    }
  }

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return

    const correct = selectedAnswer === currentQuestion.questionData.correctAnswer
    setIsCorrect(correct)
    setShowFeedback(true)

    const answerData = {
      questionId: currentQuestion.id,
      question: currentQuestion.questionData.questionText,
      selectedAnswer,
      correctAnswer: currentQuestion.questionData.correctAnswer,
      isCorrect: correct,
      timeSpent: currentQuestion.timeLimit - timeLeft,
      hintsUsed: showHint ? 1 : 0
    }

    setAnswers([...answers, answerData])
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer("")
      setShowFeedback(false)
      setShowHint(false)
      setCurrentHintIndex(0)
    } else {
      handleQuizComplete()
    }
  }


  const handleShowHint = () => {
    if (hintsUsed < quizData.maxHints && !showFeedback) {
      setShowHint(true)
      setHintsUsed(hintsUsed + 1)
    }
  }

  const handleNextHint = () => {
    if (currentHintIndex < currentQuestion.questionData.hints.length - 1) {
      setCurrentHintIndex(currentHintIndex + 1)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold text-primary">
              Question {currentQuestionIndex + 1} of {quizData.totalQuestions}
            </CardTitle>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </Badge>
              <Badge variant="secondary">
                Hints: {quizData.maxHints - hintsUsed} left
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-accent p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-accent-foreground mb-2">
              {currentQuestion.questionData.questionText}
            </h3>
            <p className="text-sm text-muted-foreground">
              Topic: {currentQuestion.topic} | Difficulty: {currentQuestion.difficulty}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.questionData.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                variant={selectedAnswer === option ? "default" : "outline"}
                className={`h-auto p-4 text-left justify-start ${
                  showFeedback
                    ? option === currentQuestion.questionData.correctAnswer
                      ? "bg-accent border-border text-accent-foreground"
                      : selectedAnswer === option && option !== currentQuestion.questionData.correctAnswer
                      ? "bg-destructive/10 border-destructive text-destructive"
                      : ""
                    : ""
                }`}
                disabled={showFeedback}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                  {showFeedback && option === currentQuestion.questionData.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-accent-foreground ml-auto" />
                  )}
                  {showFeedback && selectedAnswer === option && option !== currentQuestion.questionData.correctAnswer && (
                    <XCircle className="w-5 h-5 text-destructive ml-auto" />
                  )}
                </div>
              </Button>
            ))}
          </div>

          {showHint && (
            <Alert className="bg-accent border-border">
              <Lightbulb className="w-4 h-4" />
              <AlertDescription>
                <div className="space-y-2">
                  <p className="font-medium">
                    Hint ({currentQuestion.questionData.hints[currentHintIndex].type}):
                  </p>
                  <p>{currentQuestion.questionData.hints[currentHintIndex].text}</p>
                  {currentHintIndex < currentQuestion.questionData.hints.length - 1 && (
                    <Button
                      onClick={handleNextHint}
                      size="sm"
                      variant="outline"
                      className="mt-2"
                    >
                      Next Hint
                    </Button>
                  )}
                </div>
              </AlertDescription>
            </Alert>
          )}

          {showFeedback && (
            <Alert className={isCorrect ? "bg-accent border-border" : "bg-destructive/10 border-destructive"}>
              <AlertDescription>
                <div className="space-y-2">
                  <p className="font-medium">
                    {isCorrect ? "Correct! 🎉" : "Not quite right 😊"}
                  </p>
                  <p>{currentQuestion.questionData.explanation}</p>
                </div>
              </AlertDescription>
            </Alert>
          )}

          <div className="flex justify-between">
            <Button
              onClick={onBack}
              variant="outline"
              disabled={showFeedback}
            >
              ← Back
            </Button>

            <div className="flex gap-2">
              {!showFeedback && hintsUsed < quizData.maxHints && (
                <Button
                  onClick={handleShowHint}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <Lightbulb className="w-4 h-4" />
                  Need a hint?
                </Button>
              )}

              {!showFeedback ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="px-8"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  onClick={handleNextQuestion}
                  className="px-8"
                >
                  {currentQuestionIndex < quizData.totalQuestions - 1 ? "Next Question" : "Finish Quiz"} →
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}