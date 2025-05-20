import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Cpu, MessageSquare, Code, FileText, Lightbulb, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingButton } from "@/components/booking-button"

export default function AIToolsPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <BookingButton />
      </div>

      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">AI-Powered Portfolio Tools</h1>
        <p className="text-muted-foreground max-w-2xl">
          Explore the AI capabilities integrated into my portfolio. These tools showcase my expertise in implementing AI
          solutions using Groq and Grok models.
        </p>
      </div>

      <Tabs defaultValue="chatbot" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="chatbot">Smart Chatbot</TabsTrigger>
          <TabsTrigger value="tools">AI Tools</TabsTrigger>
          <TabsTrigger value="models">AI Models</TabsTrigger>
        </TabsList>

        <TabsContent value="chatbot">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Multi-Model Portfolio Assistant
              </CardTitle>
              <CardDescription>
                An intelligent chatbot that switches between AI models based on your question type
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                My portfolio chatbot uses both Groq and Grok AI models to provide the best possible responses. It
                automatically detects the nature of your question and routes it to the most appropriate model:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Cpu className="h-5 w-5 text-blue-500" />
                    <h3 className="font-medium">Groq (Llama 3.1)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Handles general questions about my background, experience, and portfolio. Excellent for
                    conversational interactions and non-technical inquiries.
                  </p>
                  <div className="mt-3 text-sm">
                    <p className="font-medium">Example questions:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Tell me about Arthur's experience</li>
                      <li>What projects has Arthur worked on?</li>
                      <li>How can I contact Arthur?</li>
                    </ul>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    <h3 className="font-medium">Grok</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Specializes in technical questions about programming, development, and software engineering.
                    Provides detailed, accurate responses to complex technical inquiries.
                  </p>
                  <div className="mt-3 text-sm">
                    <p className="font-medium">Example questions:</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>How would you implement authentication in Next.js?</li>
                      <li>Explain the difference between REST and GraphQL</li>
                      <li>What's the best way to optimize React performance?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg mt-6">
                <p className="text-sm font-medium mb-2">How it works:</p>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                  <li>Your question is analyzed for technical keywords and context</li>
                  <li>The system automatically selects the most appropriate AI model</li>
                  <li>Your question is processed by the selected model</li>
                  <li>The response is streamed back in real-time</li>
                </ol>
              </div>

              <div className="flex justify-center mt-6">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Try the Chatbot
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Code Assistant
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                    Available
                  </span>
                </div>
                <CardDescription>Generate, explain, debug, optimize, and convert code</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  An interactive code assistant that can generate, explain, debug, optimize, and convert code snippets.
                  Powered by Grok's advanced technical capabilities, this tool helps with programming tasks across
                  multiple languages.
                </p>
                <div className="flex justify-end">
                  <Button asChild>
                    <Link href="/ai-tools/code-assistant">
                      <Code className="mr-2 h-4 w-4" />
                      Open Code Assistant
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Content Generator
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                    Available
                  </span>
                </div>
                <CardDescription>Create professional content for various purposes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A tool to generate professional content like blog posts, project descriptions, and technical
                  documentation. Uses smart model selection to choose between Groq and Grok based on content type.
                </p>
                <div className="flex justify-end">
                  <Button asChild>
                    <Link href="/ai-tools/content-generator">
                      <FileText className="mr-2 h-4 w-4" />
                      Open Content Generator
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Project Idea Generator
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 text-green-700 border-green-200">
                    Available
                  </span>
                </div>
                <CardDescription>Get personalized project ideas based on your interests</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  An interactive tool that generates project ideas based on specified technologies, difficulty levels,
                  and interests. Perfect for developers looking for inspiration or clients seeking project concepts.
                </p>
                <div className="flex justify-end">
                  <Button asChild>
                    <Link href="/ai-tools/project-idea-generator">
                      <Lightbulb className="mr-2 h-4 w-4" />
                      Open Project Idea Generator
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="models">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-500" />
                  Groq
                </CardTitle>
                <CardDescription>
                  High-performance AI inference service with ultra-fast Language Processing Unit architecture
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Groq provides exceptional speed and efficiency for AI inference. The Llama 3.1 model used in this
                  portfolio delivers fast, high-quality responses for general questions and conversational interactions.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium mb-1">Strengths</h4>
                    <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                      <li>Ultra-fast response times</li>
                      <li>Excellent for conversational AI</li>
                      <li>Good understanding of context</li>
                      <li>Efficient resource utilization</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium mb-1">Use Cases</h4>
                    <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                      <li>General Q&A</li>
                      <li>Content summarization</li>
                      <li>Conversational assistants</li>
                      <li>Text generation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  Grok (XAI)
                </CardTitle>
                <CardDescription>
                  Advanced AI model with strong technical knowledge and reasoning capabilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grok is designed to excel at technical reasoning and problem-solving. It has a deep understanding of
                  programming, software engineering, and technical concepts, making it ideal for complex technical
                  questions.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium mb-1">Strengths</h4>
                    <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                      <li>Strong technical knowledge</li>
                      <li>Excellent reasoning capabilities</li>
                      <li>Detailed explanations</li>
                      <li>Code understanding and generation</li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium mb-1">Use Cases</h4>
                    <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                      <li>Technical problem-solving</li>
                      <li>Code explanation and generation</li>
                      <li>Complex reasoning tasks</li>
                      <li>Technical documentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-12">
        <BookingButton size="lg" text="Schedule a Consultation" />
      </div>
    </div>
  )
}
