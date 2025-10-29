
"use client"

import { useState, useEffect } from "react"
import StudentRegistration from "@/components/StudentRegistration"
import GradeSelection from "@/components/GradeSelection"
import SubjectSelection from "@/components/SubjectSelection"
import QuestionSourceSelection from "@/components/QuestionSourceSelection"
import QuizTaking from "@/components/QuizTaking"
import QuizResults from "@/components/QuizResults"
import { saveQuizSession, getQuizSession, saveQuizResult, saveStudentData } from "@/lib/storage"
import { QUIZ_STATES } from "@/lib/constant"

export default function Home() {
  const [currentState, setCurrentState] = useState(QUIZ_STATES.STUDENT_REGISTRATION)
  const [quizData, setQuizData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const savedSession = getQuizSession()
      if (savedSession) {
        setQuizData(savedSession)
        setCurrentState(QUIZ_STATES.QUIZ_IN_PROGRESS)
      }
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  const handleRegistration = (data) => {
    setQuizData({ ...quizData, ...data })
    saveStudentData(data)
    setCurrentState(QUIZ_STATES.GRADE_SELECTION)
  }

  const handleGradeSelection = (data) => {
    setQuizData({ ...quizData, ...data })
    setCurrentState(QUIZ_STATES.SUBJECT_SELECTION)
  }

  const handleSubjectSelection = (data) => {
    setQuizData({ ...quizData, ...data })
    setCurrentState(QUIZ_STATES.QUESTION_SOURCE_SELECTION)
  }

  const handleQuestionSourceSelection = async (data) => {
    setLoading(true)
    setError("")

    const finalQuizData = { ...quizData, ...data }

    try {
      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalQuizData),
      })

      const result = await response.json()

      if (result.success) {
        setQuizData(result.quiz)
        saveQuizSession(result.quiz)
        setCurrentState(QUIZ_STATES.QUIZ_IN_PROGRESS)
      } else {
        setError(result.error || 'Failed to generate quiz')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleQuizComplete = (result) => {
    saveQuizResult(result)
    setQuizData(result)
    setCurrentState(QUIZ_STATES.RESULTS_DISPLAY)
  }

  const handleRestart = () => {
    setQuizData({})
    setCurrentState(QUIZ_STATES.STUDENT_REGISTRATION)
  }

  const handleHome = () => {
    setQuizData({})
    setCurrentState(QUIZ_STATES.STUDENT_REGISTRATION)
  }

  const handleBack = () => {
    switch (currentState) {
      case QUIZ_STATES.GRADE_SELECTION:
        setCurrentState(QUIZ_STATES.STUDENT_REGISTRATION)
        break
      case QUIZ_STATES.SUBJECT_SELECTION:
        setCurrentState(QUIZ_STATES.GRADE_SELECTION)
        break
      case QUIZ_STATES.QUESTION_SOURCE_SELECTION:
        setCurrentState(QUIZ_STATES.SUBJECT_SELECTION)
        break
      case QUIZ_STATES.QUIZ_IN_PROGRESS:
        setCurrentState(QUIZ_STATES.QUESTION_SOURCE_SELECTION)
        break
      default:
        break
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-foreground">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto mb-4"></div>
          <p className="text-xl">Professor Sarah is preparing your quiz...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center text-foreground bg-destructive p-6 rounded-lg">
          <p className="text-xl mb-4 text-destructive-foreground">Oops! {error}</p>
          <button
            onClick={() => setError("")}
            className="bg-background text-foreground px-4 py-2 rounded hover:bg-accent"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  switch (currentState) {
    case QUIZ_STATES.STUDENT_REGISTRATION:
      return <StudentRegistration onNext={handleRegistration} />

    case QUIZ_STATES.GRADE_SELECTION:
      return (
        <GradeSelection
          studentName={quizData.studentName}
          onNext={handleGradeSelection}
          onBack={handleBack}
        />
      )

    case QUIZ_STATES.SUBJECT_SELECTION:
      return (
        <SubjectSelection
          studentName={quizData.studentName}
          grade={quizData.grade}
          onNext={handleSubjectSelection}
          onBack={handleBack}
        />
      )

    case QUIZ_STATES.QUESTION_SOURCE_SELECTION:
      return (
        <QuestionSourceSelection
          studentName={quizData.studentName}
          grade={quizData.grade}
          subject={quizData.subject}
          onNext={handleQuestionSourceSelection}
          onBack={handleBack}
        />
      )

    case QUIZ_STATES.QUIZ_IN_PROGRESS:
      return (
        <QuizTaking
          quizData={quizData}
          onComplete={handleQuizComplete}
          onBack={handleBack}
        />
      )

    case QUIZ_STATES.RESULTS_DISPLAY:
      return (
        <QuizResults
          result={quizData}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      )

    default:
      return <StudentRegistration onNext={handleRegistration} />
  }
}
