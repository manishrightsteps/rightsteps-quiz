"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen } from "lucide-react"
import { GRADES } from "@/lib/constant"

export default function GradeSelection({ studentName, onNext, onBack }) {
  const handleGradeSelect = (grade) => {
    onNext({ grade: grade.level })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">
            Hi {studentName}! 👋
          </CardTitle>
          <p className="text-lg text-muted-foreground">
            Which class are you in? Choose your grade level to continue
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {GRADES.map((grade) => (
              <Card
                key={grade.id}
                className="group cursor-pointer border-2 hover:border-primary hover:bg-accent/50 transition-all duration-200"
                onClick={() => handleGradeSelect(grade)}
              >
                <CardContent className="p-2 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-foreground">{grade.description}</h3>
                      <Badge variant="secondary" className="text-xs">
                        Grade {grade.level}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              onClick={onBack}
              variant="outline"
              className="px-8"
            >
              ← Back to Registration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}