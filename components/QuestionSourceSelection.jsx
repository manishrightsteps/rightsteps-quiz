"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bot, User, Target, Sparkles } from "lucide-react"
import { QUESTION_SOURCES, DIFFICULTY_LEVELS } from "@/lib/constant"
import { useState } from "react"

export default function QuestionSourceSelection({ studentName, grade, subject, onNext, onBack }) {
  const [difficulty, setDifficulty] = useState("EASY")

  const handleSourceSelect = (source) => {
    onNext({
      questionSource: source.type,
      difficulty: difficulty
    })
  }

  const getSourceIcon = (sourceType) => {
    if (sourceType === "AI_GENERATED") return Bot
    if (sourceType === "TEACHER_PREPARED") return User
    return Target
  }

  const getSourceDescription = (sourceType) => {
    if (sourceType === "AI_GENERATED") return "Professor Sarah creates fresh questions just for you"
    if (sourceType === "TEACHER_PREPARED") return "Questions carefully crafted by experienced teachers"
    return "Quality questions for your learning"
  }

  const getDifficultyEmoji = (level) => {
    if (level === "EASY") return "🟢"
    if (level === "MEDIUM") return "🟡"
    if (level === "HARD") return "🔴"
    return "⚪"
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center space-y-3 pb-4">
          <div className="flex justify-center">
            <div className="p-2 bg-primary/10 rounded-full">
              <Target className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-primary">
            Perfect, {studentName}! 🎯
          </CardTitle>
          <Badge variant="outline" className="text-sm">
            Class {grade} • {subject}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Difficulty
              </label>
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {DIFFICULTY_LEVELS.map((level) => (
                    <SelectItem key={level.id} value={level.level}>
                      <div className="flex items-center gap-2">
                        <span>{getDifficultyEmoji(level.level)}</span>
                        <span>{level.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="lg:col-span-2">
              <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                Question Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {QUESTION_SOURCES.map((source) => {
                  const IconComponent = getSourceIcon(source.type)
                  return (
                    <Card
                      key={source.id}
                      className="group cursor-pointer border-2 hover:border-primary hover:bg-accent/50 transition-all duration-200"
                      onClick={() => handleSourceSelect(source)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm text-foreground truncate">{source.label}</h4>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {getSourceDescription(source.type)}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <Button
              onClick={onBack}
              variant="outline"
              className="px-6"
            >
              ← Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}