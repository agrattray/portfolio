"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { TechCategory, DifficultyLevel, ProjectScope, ProjectIdea } from "@/utils/project-utils"
import { Brain, Lightbulb, Loader2, RefreshCw, Clock, BookOpen, Zap, Download } from "lucide-react"

export function ProjectIdeaGenerator() {
  const [techCategory, setTechCategory] = useState<TechCategory>("fullstack")
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>("intermediate")
  const [projectScope, setProjectScope] = useState<ProjectScope>("medium")
  const [specificTechnologies, setSpecificTechnologies] = useState("")
  const [interests, setInterests] = useState("")
  const [purpose, setPurpose] = useState("")
  const [projectIdea, setProjectIdea] = useState<ProjectIdea | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setProjectIdea(null)

    try {
      const response = await fetch("/api/project-idea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          techCategory,
          difficultyLevel,
          projectScope,
          specificTechnologies,
          interests,
          purpose,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate project idea")
      }

      setProjectIdea(data.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setSpecificTechnologies("")
    setInterests("")
    setPurpose("")
    setProjectIdea(null)
    setError(null)
  }

  const downloadProjectIdea = () => {
    if (!projectIdea) return

    const fileName = `${projectIdea.title.replace(/\s+/g, "-").toLowerCase()}-project-idea.json`
    const fileContent = JSON.stringify(projectIdea, null, 2)
    const blob = new Blob([fileContent], { type: "application/json" })
    const href = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = href
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(href)
  }

  const techCategories = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "mobile", label: "Mobile Development" },
    { value: "ai-ml", label: "AI & Machine Learning" },
    { value: "data", label: "Data Science & Analytics" },
    { value: "devops", label: "DevOps & Cloud" },
    { value: "blockchain", label: "Blockchain" },
    { value: "iot", label: "IoT" },
    { value: "game-dev", label: "Game Development" },
  ]

  const difficultyLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ]

  const projectScopes = [
    { value: "small", label: "Small (1-2 weeks)" },
    { value: "medium", label: "Medium (3-4 weeks)" },
    { value: "large", label: "Large (1-3 months)" },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Project Idea Generator
        </CardTitle>
        <CardDescription>Generate personalized project ideas based on your interests and skill level</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="techCategory">Technology Category</Label>
                <Select value={techCategory} onValueChange={(value) => setTechCategory(value as TechCategory)}>
                  <SelectTrigger id="techCategory" disabled={isLoading}>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {techCategories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="difficultyLevel">Difficulty Level</Label>
                <Select value={difficultyLevel} onValueChange={(value) => setDifficultyLevel(value as DifficultyLevel)}>
                  <SelectTrigger id="difficultyLevel" disabled={isLoading}>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficultyLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="projectScope">Project Scope</Label>
                <Select value={projectScope} onValueChange={(value) => setProjectScope(value as ProjectScope)}>
                  <SelectTrigger id="projectScope" disabled={isLoading}>
                    <SelectValue placeholder="Select scope" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectScopes.map((scope) => (
                      <SelectItem key={scope.value} value={scope.value}>
                        {scope.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="specificTechnologies">Specific Technologies (optional)</Label>
              <Input
                id="specificTechnologies"
                placeholder="E.g., React, Node.js, MongoDB"
                value={specificTechnologies}
                onChange={(e) => setSpecificTechnologies(e.target.value)}
                disabled={isLoading}
              />
              <p className="text-xs text-muted-foreground mt-1">Comma-separated list of technologies you want to use</p>
            </div>

            <div>
              <Label htmlFor="interests">Personal Interests (optional)</Label>
              <Input
                id="interests"
                placeholder="E.g., music, fitness, education, finance"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                disabled={isLoading}
              />
              <p className="text-xs text-muted-foreground mt-1">Topics or domains you're interested in exploring</p>
            </div>

            <div>
              <Label htmlFor="purpose">Project Purpose (optional)</Label>
              <Textarea
                id="purpose"
                placeholder="E.g., portfolio piece, learning specific skills, solving a problem"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="min-h-[80px]"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={handleReset} disabled={isLoading}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Generate Project Idea
                </>
              )}
            </Button>
          </div>
        </form>

        {error && (
          <div className="mt-6 rounded-md bg-red-50 p-4 text-red-600 border border-red-200">
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {projectIdea && !error && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{projectIdea.title}</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  <Brain className="h-3 w-3 mr-1" />
                  <span>Powered by Grok</span>
                </div>
                <Button size="sm" variant="outline" onClick={downloadProjectIdea} className="h-8">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground">{projectIdea.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                      <Zap className="h-4 w-4 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {projectIdea.features.map((feature, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-1">
                      {projectIdea.learningOutcomes.map((outcome, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {projectIdea.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Time Estimate
                    </h4>
                    <p className="text-sm">{projectIdea.timeEstimate}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Challenge Areas</h4>
                    <ul className="space-y-1">
                      {projectIdea.challengeAreas.map((challenge, index) => (
                        <li key={index} className="text-sm flex items-start gap-2">
                          <span className="text-primary font-medium">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Helpful Resources</h4>
                <ul className="space-y-1">
                  {projectIdea.resources.map((resource, index) => (
                    <li key={index} className="text-sm">
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <span>{resource.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <p className="text-xs text-muted-foreground">
          This tool uses Grok AI to generate project ideas. Results are meant to inspire and can be customized to your
          needs.
        </p>
      </CardFooter>
    </Card>
  )
}
