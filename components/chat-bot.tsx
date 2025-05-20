"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Bot, Send, User, X, MessageSquare, Loader2, Cpu, Brain } from "lucide-react"
import { useChat } from "@ai-sdk/react"
import { determineModelType } from "@/utils/ai-utils"

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentModel, setCurrentModel] = useState<"groq" | "xai">("groq")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    onFinish: () => {
      // Reset to default after response is complete
      setCurrentModel("groq")
    },
  })

  // Update the model type when the input changes
  useEffect(() => {
    if (input) {
      setCurrentModel(determineModelType(input))
    }
  }, [input])

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const getModelIcon = () => {
    return currentModel === "xai" ? (
      <Brain className="h-4 w-4 mr-1 text-purple-500" />
    ) : (
      <Cpu className="h-4 w-4 mr-1 text-blue-500" />
    )
  }

  const getModelName = () => {
    return currentModel === "xai" ? "Grok" : "Groq"
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 p-0 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-[350px] md:w-[400px] h-[500px] shadow-lg flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground py-3 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <h3 className="font-medium">Portfolio Assistant</h3>
              </div>
              {messages.length > 0 && (
                <div className="flex items-center text-xs bg-primary-foreground/20 px-2 py-1 rounded-full">
                  {getModelIcon()}
                  <span>{getModelName()}</span>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="flex h-full items-center justify-center text-center text-muted-foreground">
                <div>
                  <Bot className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Hi! I'm Arthur's portfolio assistant.</p>
                  <p className="text-sm">Ask me about Arthur's skills, projects, or experience!</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="text-center p-2 border rounded-md">
                      <Cpu className="h-8 w-8 mx-auto mb-1 text-blue-500" />
                      <p className="text-xs font-medium">Groq</p>
                      <p className="text-xs text-muted-foreground">General questions</p>
                    </div>
                    <div className="text-center p-2 border rounded-md">
                      <Brain className="h-8 w-8 mx-auto mb-1 text-purple-500" />
                      <p className="text-xs font-medium">Grok</p>
                      <p className="text-xs text-muted-foreground">Technical questions</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-2 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-8 w-8">
                      {message.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                    </Avatar>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[80%]">
                  <Avatar className="h-8 w-8">
                    <Bot className="h-5 w-5" />
                  </Avatar>
                  <div className="rounded-lg px-3 py-2 text-sm bg-muted flex items-center">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="border-t p-3">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Type your message..."
                  value={input}
                  onChange={handleInputChange}
                  className="pr-8"
                  disabled={isLoading}
                />
                {input && <div className="absolute right-2 top-1/2 transform -translate-y-1/2">{getModelIcon()}</div>}
              </div>
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
