"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Clock, Lightbulb, CheckCircle, XCircle, RotateCcw, Home, Target, Timer, Brain } from "lucide-react"
import { QUIZ_CONFIG } from "@/lib/constant"

export default function QuizResults({ result, onRestart, onHome }) {
  const passed = result.percentage >= QUIZ_CONFIG.PASSING_SCORE_PERCENTAGE
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getGradeEmoji = (percentage) => {
    if (percentage >= 90) return "🌟"
    if (percentage >= 80) return "🎉"
    if (percentage >= 70) return "👏"
    if (percentage >= 60) return "👍"
    return "💪"
  }

  const getEncouragementMessage = (percentage, passed) => {
    if (percentage >= 90) return "Outstanding work! You're a superstar! 🌟"
    if (percentage >= 80) return "Excellent job! You did amazing! 🎉"
    if (percentage >= 70) return "Great work! You're doing really well! 👏"
    if (passed) return "Good job! You passed the quiz! 👍"
    return "Keep practicing! You're getting better! 💪"
  }


  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8" />
            Quiz Complete!
          </CardTitle>
          <p className="text-xl text-muted-foreground mt-2">
            {getEncouragementMessage(result.percentage, passed)}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-accent">
              <CardContent className="p-4 text-center">
                <Target className="w-6 h-6 mx-auto mb-2 text-accent-foreground" />
                <div className="text-3xl font-bold text-accent-foreground">{result.score}</div>
                <div className="text-sm text-accent-foreground">out of {result.totalQuestions}</div>
                <div className="text-xs text-muted-foreground">Correct Answers</div>
              </CardContent>
            </Card>

            <Card className="bg-accent">
              <CardContent className="p-4 text-center">
                <Trophy className="w-6 h-6 mx-auto mb-2 text-accent-foreground" />
                <div className="text-3xl font-bold text-accent-foreground">{result.percentage}%</div>
                <div className="text-sm text-accent-foreground">
                  {passed ? "PASSED" : "NEEDS PRACTICE"}
                </div>
                <div className="text-xs text-muted-foreground">Score</div>
              </CardContent>
            </Card>

            <Card className="bg-accent">
              <CardContent className="p-4 text-center">
                <Timer className="w-6 h-6 mx-auto mb-2 text-accent-foreground" />
                <div className="text-2xl font-bold text-accent-foreground">
                  {formatTime(result.timeSpent)}
                </div>
                <div className="text-xs text-muted-foreground">Time Spent</div>
              </CardContent>
            </Card>

            <Card className="bg-accent">
              <CardContent className="p-4 text-center">
                <Brain className="w-6 h-6 mx-auto mb-2 text-accent-foreground" />
                <div className="text-2xl font-bold text-accent-foreground">
                  {result.hintsUsed}
                </div>
                <div className="text-xs text-muted-foreground">Hints Used</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-foreground">Overall Performance</span>
              <span className="text-2xl">{getGradeEmoji(result.percentage)}</span>
            </div>
            <Progress value={result.percentage} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0%</span>
              <span className="font-medium">Passing: {QUIZ_CONFIG.PASSING_SCORE_PERCENTAGE}%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Answer Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Correct Answers</span>
                    </div>
                    <Badge variant="secondary">{result.score}</Badge>
                  </div>
                  <Progress value={(result.score / result.totalQuestions) * 100} className="h-2" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Incorrect Answers</span>
                    </div>
                    <Badge variant="outline">{result.totalQuestions - result.score}</Badge>
                  </div>
                  <Progress value={((result.totalQuestions - result.score) / result.totalQuestions) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Performance Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{result.percentage}%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-foreground">{formatTime(result.timeSpent)}</div>
                    <div className="text-xs text-muted-foreground">Total Time</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Speed</span>
                    <span>{Math.round(result.timeSpent / result.totalQuestions)}s per question</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Status</span>
                    <Badge variant={passed ? "default" : "secondary"}>
                      {passed ? "PASSED" : "NEEDS PRACTICE"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted">
            <CardHeader>
              <CardTitle className="text-lg">Quiz Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium">Student:</span>
                  <p>{result.studentName}</p>
                </div>
                <div>
                  <span className="font-medium">Grade:</span>
                  <p>Class {result.grade}</p>
                </div>
                <div>
                  <span className="font-medium">Subject:</span>
                  <p>{result.subject}</p>
                </div>
                <div>
                  <span className="font-medium">Difficulty:</span>
                  <p>{result.difficulty}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Question Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {result.answers.map((answer, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-l-4 ${
                      answer.isCorrect
                        ? "bg-accent border-border"
                        : "bg-destructive/10 border-destructive"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">
                          Q{index + 1}: {answer.question}
                        </p>
                        <div className="mt-1 space-y-1">
                          <p className="text-xs">
                            <span className="font-medium">Your answer:</span> {answer.selectedAnswer}
                          </p>
                          {!answer.isCorrect && (
                            <p className="text-xs">
                              <span className="font-medium">Correct answer:</span> {answer.correctAnswer}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="ml-2">
                        {answer.isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-accent-foreground" />
                        ) : (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onRestart}
              className="flex items-center gap-2 px-6 py-3"
              size="lg"
            >
              <RotateCcw className="w-5 h-5" />
              Take Another Quiz
            </Button>
            <Button
              onClick={onHome}
              variant="outline"
              className="flex items-center gap-2 px-6 py-3"
              size="lg"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}