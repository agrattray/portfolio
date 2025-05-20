import { ProjectIdeaGenerator } from "@/components/project-idea-generator"
import { Lightbulb, ArrowLeft, Brain, Code, Blocks } from "lucide-react"
import Link from "next/link"

export default function ProjectIdeaGeneratorPage() {
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
          <Lightbulb className="h-6 w-6" />
          <h1 className="text-3xl font-bold tracking-tight">Project Idea Generator</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          Generate personalized project ideas based on your interests, skill level, and preferred technologies.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ProjectIdeaGenerator />

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <p className="text-muted-foreground">
            The Project Idea Generator uses Grok AI to create personalized project ideas tailored to your preferences.
            Select your technology interests, skill level, and project scope to get started.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="border rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-3">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Technology Categories</h3>
              <p className="text-sm text-muted-foreground">
                Choose from 10 different technology categories including frontend, backend, full stack, mobile, AI/ML,
                and more.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-3">
                <Blocks className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Customization Options</h3>
              <p className="text-sm text-muted-foreground">
                Specify difficulty level, project scope, specific technologies, personal interests, and project purpose
                to get tailored results.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-3">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium mb-2">AI-Powered Suggestions</h3>
              <p className="text-sm text-muted-foreground">
                Grok AI analyzes your preferences to generate detailed project ideas with features, technologies,
                learning outcomes, and resources.
              </p>
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
                      <span className="font-medium">Be specific with technologies</span> - List the exact technologies
                      you want to work with
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">2</div>
                    <p className="text-sm">
                      <span className="font-medium">Include personal interests</span> - This helps generate projects
                      you'll be motivated to complete
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">3</div>
                    <p className="text-sm">
                      <span className="font-medium">Choose the right difficulty</span> - Be realistic about your skill
                      level for the best results
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">4</div>
                    <p className="text-sm">
                      <span className="font-medium">Consider your time constraints</span> - Match project scope to your
                      available time
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">5</div>
                    <p className="text-sm">
                      <span className="font-medium">Specify your purpose</span> - Whether for learning, portfolio, or
                      solving a problem
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5 text-primary">6</div>
                    <p className="text-sm">
                      <span className="font-medium">Try multiple combinations</span> - Generate several ideas and
                      combine elements you like
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
