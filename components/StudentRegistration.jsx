"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { STUDENT_CONFIG } from "@/lib/constant"

export default function StudentRegistration({ onNext }) {
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim()) {
      setError("Please enter your name")
      return
    }

    if (name.length < STUDENT_CONFIG.MIN_NAME_LENGTH) {
      setError(`Name must be at least ${STUDENT_CONFIG.MIN_NAME_LENGTH} characters`)
      return
    }

    if (name.length > STUDENT_CONFIG.MAX_NAME_LENGTH) {
      setError(`Name must not exceed ${STUDENT_CONFIG.MAX_NAME_LENGTH} characters`)
      return
    }

    setError("")
    onNext({ studentName: name.trim() })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Welcome to Rightsteps Quiz! 🎓
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-medium text-foreground">
                What&apos;s your name?
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name here..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg p-3"
                autoFocus
              />
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full text-lg py-3"
            >
              Let&apos;s Start! 🚀
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}