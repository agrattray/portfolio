"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import type { CodeLanguage, CodeAction } from "@/utils/code-utils"
import { Brain, Code, Loader2, RefreshCw, Wand2 } from "lucide-react"

export function CodeAssistant() {
  const [action, setAction] = useState<CodeAction>("generate")
  const [language, setLanguage] = useState<CodeLanguage>("javascript")
  const [targetLanguage, setTargetLanguage] = useState<CodeLanguage>("python")
  const [prompt, setPrompt] = useState("")
  const [code, setCode] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/code-assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          language,
          prompt,
          code,
          targetLanguage: action === "convert" ? targetLanguage : undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to process request")
      }

      setResult(data.result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setPrompt("")
    setCode("")
    setResult("")
    setError(null)
  }

  const languages: { value: CodeLanguage; label: string }[] = [
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "php", label: "PHP" },
    { value: "ruby", label: "Ruby" },
    { value: "swift", label: "Swift" },
    { value: "kotlin", label: "Kotlin" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "sql", label: "SQL" },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          Code Assistant
        </CardTitle>
        <CardDescription>Generate, explain, debug, optimize, or convert code using AI</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="generate" onValueChange={(value) => setAction(value as CodeAction)} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="generate">Generate</TabsTrigger>
            <TabsTrigger value="explain">Explain</TabsTrigger>
            <TabsTrigger value="debug">Debug</TabsTrigger>
            <TabsTrigger value="optimize">Optimize</TabsTrigger>
            <TabsTrigger value="convert">Convert</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="w-full md:w-1/2">
                <Label htmlFor="language">Language</Label>
                <Select
                  value={language}
                  onValueChange={(value) => setLanguage(value as CodeLanguage)}
                  disabled={isLoading}
                >
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {action === "convert" && (
                <div className="w-full md:w-1/2">
                  <Label htmlFor="targetLanguage">Target Language</Label>
                  <Select
                    value={targetLanguage}
                    onValueChange={(value) => setTargetLanguage(value as CodeLanguage)}
                    disabled={isLoading}
                  >
                    <SelectTrigger id="targetLanguage">
                      <SelectValue placeholder="Select Target Language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <TabsContent value="generate" className="mt-0 space-y-4">
              <div>
                <Label htmlFor="prompt">What would you like to generate?</Label>
                <Textarea
                  id="prompt"
                  placeholder="Describe the code you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px]"
                  disabled={isLoading}
                />
              </div>
            </TabsContent>

            <TabsContent value="explain" className="mt-0 space-y-4">
              <div>
                <Label htmlFor="code">Code to explain</Label>
                <Textarea
                  id="code"
                  placeholder="Paste the code you want explained..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono min-h-[200px]"
                  disabled={isLoading}
                />
              </div>
            </TabsContent>

            <TabsContent value="debug" className="mt-0 space-y-4">
              <div>
                <Label htmlFor="code">Code to debug</Label>
                <Textarea
                  id="code"
                  placeholder="Paste the code with issues..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono min-h-[200px]"
                  disabled={isLoading}
                />
              </div>
            </TabsContent>

            <TabsContent value="optimize" className="mt-0 space-y-4">
              <div>
                <Label htmlFor="code">Code to optimize</Label>
                <Textarea
                  id="code"
                  placeholder="Paste the code you want to optimize..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono min-h-[200px]"
                  disabled={isLoading}
                />
              </div>
            </TabsContent>

            <TabsContent value="convert" className="mt-0 space-y-4">
              <div>
                <Label htmlFor="code">Code to convert</Label>
                <Textarea
                  id="code"
                  placeholder={`Paste the ${language} code you want to convert to ${targetLanguage}...`}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="font-mono min-h-[200px]"
                  disabled={isLoading}
                />
              </div>
            </TabsContent>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleReset} disabled={isLoading}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset
              </Button>
              <Button type="submit" disabled={isLoading || (!prompt && !code)}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Process with AI
                  </>
                )}
              </Button>
            </div>
          </form>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 p-4 text-red-600 border border-red-200">
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {result && !error && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">Result</h3>
                <div className="flex items-center text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  <Brain className="h-3 w-3 mr-1" />
                  <span>Powered by Grok</span>
                </div>
              </div>
              <div className="rounded-md border bg-muted/50 p-4 overflow-auto">
                <pre className="whitespace-pre-wrap break-words text-sm">{result}</pre>
              </div>
            </div>
          )}
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <p className="text-xs text-muted-foreground">
          This tool uses Grok AI to process code. Results may vary and should be reviewed before use.
        </p>
      </CardFooter>
    </Card>
  )
}
