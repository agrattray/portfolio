import { ContentGenerator } from "@/components/content-generator"
import { FileText, ArrowLeft, Brain, Cpu } from "lucide-react"
import Link from "next/link"

export default function ContentGeneratorPage() {
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
          <FileText className="h-6 w-6" />
          <h1 className="text-3xl font-bold tracking-tight">Content Generator</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Generate professional content like blog posts, project descriptions, and technical documentation using AI.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ContentGenerator />

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <p className="text-muted-foreground">
            The Content Generator uses AI to create professional content for various purposes. Select a content type,
            provide a topic and keywords, and customize the tone and length to get started.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Content Types</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Blog Post</span>
                    <p className="text-sm text-muted-foreground">
                      Engaging articles with introduction, main sections, and conclusion
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Project Description</span>
                    <p className="text-sm text-muted-foreground">
                      Detailed overviews of projects with features, challenges, and results
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Technical Documentation</span>
                    <p className="text-sm text-muted-foreground">
                      Clear instructions and explanations for technical concepts
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Social Media Post</span>
                    <p className="text-sm text-muted-foreground">
                      Concise, engaging posts optimized for social platforms
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Case Study</span>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive analysis of projects with challenges, solutions, and results
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Smart Model Selection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The Content Generator automatically selects the most appropriate AI model based on the content type:
              </p>
              <div className="space-y-4">
                <div className="bg-muted/50 p-3 rounded-md">
                  <div className="flex items-center gap-2 mb-1">
                    <Brain className="h-4 w-4 text-purple-500" />
                    <span className="font-medium">Grok</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Used for technical content like documentation and project descriptions, where technical accuracy and
                    detailed explanations are important.
                  </p>
                </div>
                <div className="bg-muted/50 p-3 rounded-md">
                  <div className="flex items-center gap-2 mb-1">
                    <Cpu className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">Groq</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Used for creative content like blog posts and social media, where engaging writing and natural flow
                    are priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg border mt-8">
            <h3 className="text-lg font-medium mb-4">Tips for Better Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">1</div>
                    <p className="text-sm">
                      <span className="font-medium">Be specific with your topic</span> - "React Server Components best
                      practices" is better than just "React"
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">2</div>
                    <p className="text-sm">
                      <span className="font-medium">Include relevant keywords</span> - 3-5 keywords help guide the
                      content focus
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">3</div>
                    <p className="text-sm">
                      <span className="font-medium">Choose the right tone</span> - Match the tone to your audience and
                      purpose
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">4</div>
                    <p className="text-sm">
                      <span className="font-medium">Use additional information</span> - Add context or specific points
                      you want covered
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">5</div>
                    <p className="text-sm">
                      <span className="font-medium">Always review and edit</span> - AI-generated content should be a
                      starting point, not the final version
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">6</div>
                    <p className="text-sm">
                      <span className="font-medium">Try different settings</span> - Experiment with different tones and
                      lengths for variety
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
