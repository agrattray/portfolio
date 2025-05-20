import { CodeAssistant } from "@/components/code-assistant"
import { Brain, Code, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CodeAssistantPage() {
  return (
    <div className="container py-12">
      <Link
        href="/ai-tools"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to AI Tools
      </Link>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Code className="h-6 w-6" />
          <h1 className="text-3xl font-bold tracking-tight">Code Assistant</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Generate, explain, debug, optimize, or convert code using Grok AI. This tool helps with programming tasks
          across multiple languages.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <CodeAssistant />

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <p className="text-muted-foreground">
            The Code Assistant uses Grok's advanced AI capabilities to help with various programming tasks. Select an
            action, specify the programming language, and provide the necessary input to get started.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Available Actions</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Generate</span>
                    <p className="text-sm text-muted-foreground">
                      Create code based on your description or requirements
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Explain</span>
                    <p className="text-sm text-muted-foreground">Get a detailed explanation of how code works</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Debug</span>
                    <p className="text-sm text-muted-foreground">Find and fix issues in problematic code</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Optimize</span>
                    <p className="text-sm text-muted-foreground">
                      Improve code performance, readability, or maintainability
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Code className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Convert</span>
                    <p className="text-sm text-muted-foreground">Translate code from one language to another</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Supported Languages</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-sm p-1.5 bg-muted/50 rounded">JavaScript</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">TypeScript</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">Python</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">Java</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">C#</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">C++</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">Go</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">Rust</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">PHP</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">Ruby</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">Swift</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">Kotlin</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">HTML</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">CSS</div>
                <div className="text-sm p-1.5 bg-muted/50 rounded">SQL</div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-medium">Powered by Grok</h3>
            </div>
            <p className="text-muted-foreground">
              This tool leverages Grok's advanced AI capabilities to understand and generate code across multiple
              programming languages. Grok excels at technical reasoning and problem-solving, making it ideal for
              programming tasks.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="font-medium">Best practices when using the Code Assistant:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Be specific in your descriptions when generating code</li>
                <li>Always review and test AI-generated code before using it in production</li>
                <li>For debugging, include any error messages you're encountering</li>
                <li>When optimizing, mention specific goals (speed, memory usage, readability)</li>
                <li>For complex tasks, break them down into smaller, more manageable requests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
