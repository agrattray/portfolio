"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { ContentType } from "@/utils/content-utils"
import { Brain, Cpu, FileText, Loader2, RefreshCw, Copy, Check } from "lucide-react"

export function ContentGenerator() {
  const [contentType, setContentType] = useState<ContentType>("blog-post")
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [tone, setTone] = useState("professional")
  const [length, setLength] = useState<"short" | "medium" | "long">("medium")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [usedModel, setUsedModel] = useState<"groq" | "xai">("groq")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setResult("")
    setCopied(false)

    try {
      const response = await fetch("/api/content-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contentType,
          topic,
          keywords,
          tone,
          length,
          additionalInfo,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate content")
      }

      setResult(data.result)

      // Set the model used based on content type
      setUsedModel(contentType === "technical-doc" || contentType === "project-description" ? "xai" : "groq")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setTopic("")
    setKeywords("")
    setAdditionalInfo("")
    setResult("")
    setError(null)
    setCopied(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contentTypes = [
    { value: "blog-post", label: "Blog Post" },
    { value: "project-description", label: "Project Description" },
    { value: "technical-doc", label: "Technical Documentation" },
    { value: "social-post", label: "Social Media Post" },
    { value: "case-study", label: "Case Study" },
  ]

  const tones = [
    { value: "professional", label: "Professional" },
    { value: "conversational", label: "Conversational" },
    { value: "enthusiastic", label: "Enthusiastic" },
    { value: "technical", label: "Technical" },
    { value: "persuasive", label: "Persuasive" },
    { value: "educational", label: "Educational" },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Content Generator
        </CardTitle>
        <CardDescription>Generate professional content for various purposes</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="contentType">Content Type</Label>
              <Select value={contentType} onValueChange={(value) => setContentType(value as ContentType)}>
                <SelectTrigger id="contentType" disabled={isLoading}>
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  {contentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                placeholder="E.g., React Server Components, CI/CD Pipelines, etc."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="keywords">Keywords (comma separated)</Label>
              <Input
                id="keywords"
                placeholder="E.g., Next.js, performance, optimization"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <Label htmlFor="tone">Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger id="tone" disabled={isLoading}>
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Content Length</Label>
              <RadioGroup
                value={length}
                onValueChange={(value) => setLength(value as "short" | "medium" | "long")}
                className="flex space-x-4 mt-2"
                disabled={isLoading}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="short" id="short" />
                  <Label htmlFor="short" className="cursor-pointer">
                    Short
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="cursor-pointer">
                    Medium
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="long" id="long" />
                  <Label htmlFor="long" className="cursor-pointer">
                    Long
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Information (optional)</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Any specific points or details you'd like to include..."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="min-h-[100px]"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={handleReset} disabled={isLoading}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button type="submit" disabled={isLoading || !topic || !keywords}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Content
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

        {result && !error && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Generated Content</h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                  {usedModel === "xai" ? (
                    <Brain className="h-3 w-3 mr-1 text-purple-500" />
                  ) : (
                    <Cpu className="h-3 w-3 mr-1 text-blue-500" />
                  )}
                  <span>{usedModel === "xai" ? "Grok" : "Groq"}</span>
                </div>
                <Button size="sm" variant="outline" onClick={copyToClipboard} className="h-8">
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="rounded-md border bg-card p-4 overflow-auto max-h-[500px]">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {result.split("\n").map((line, i) => (
                  <div key={i}>{line || <br />}</div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <p className="text-xs text-muted-foreground">
          This tool uses AI to generate content. Always review and edit the output before publishing.
        </p>
      </CardFooter>
    </Card>
  )
}
