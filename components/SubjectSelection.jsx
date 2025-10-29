"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Beaker, Star } from "lucide-react"
import { SUBJECTS } from "@/lib/constant"

export default function SubjectSelection({ studentName, grade, onNext, onBack }) {
  const handleSubjectSelect = (subject) => {
    onNext({ subject: subject.name })
  }

  const getSubjectIcon = (subjectName) => {
    if (subjectName === "Mathematics") return Calculator
    if (subjectName === "Science") return Beaker
    return Star
  }

  const getSubjectDescription = (subjectName) => {
    if (subjectName === "Mathematics") return "Numbers, calculations, and problem solving"
    if (subjectName === "Science") return "Experiments, discoveries, and natural world"
    return "Learning and knowledge"
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-primary/10 rounded-full">
              <Star className="w-8 h-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold text-primary">
            Great choice, {studentName}! 🌟
          </CardTitle>
          <div className="space-y-2">
            <Badge variant="outline" className="text-sm">
              Class {grade} Student
            </Badge>
            <p className="text-lg text-muted-foreground">
              Which subject would you like to practice today?
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {SUBJECTS.map((subject) => {
              const IconComponent = getSubjectIcon(subject.name)
              return (
                <Card
                  key={subject.id}
                  className="group cursor-pointer border-2 hover:border-primary hover:bg-accent/50 transition-all duration-200"
                  onClick={() => handleSubjectSelect(subject)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">{subject.name}</h3>
                        <p className="text-sm text-muted-foreground">{getSubjectDescription(subject.name)}</p>
                        <div className="flex justify-center">
                          <Badge variant="secondary" className="text-xs">
                            {subject.icon} Ready to learn
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="flex justify-center">
            <Button
              onClick={onBack}
              variant="outline"
              className="px-8"
            >
              ← Back to Grade Selection
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}