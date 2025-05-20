"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ProjectImageUpload } from "@/components/project-image-upload"
import { BookingButton } from "@/components/booking-button"

export default function ProjectsAdminPage() {
  const router = useRouter()
  const [projectTitle, setProjectTitle] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectLongDescription, setProjectLongDescription] = useState("")
  const [projectTechnologies, setProjectTechnologies] = useState("")
  const [projectLiveUrl, setProjectLiveUrl] = useState("")
  const [projectCodeUrl, setProjectCodeUrl] = useState("")
  const [projectImageUrl, setProjectImageUrl] = useState("")
  const [isFeatured, setIsFeatured] = useState(false)

  const handleImageUploaded = (url: string) => {
    setProjectImageUrl(url)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real app, you would save this to a database
    // For now, we'll just create a project object and log it
    const project = {
      id: `project-${Date.now()}`,
      title: projectTitle,
      description: projectDescription,
      longDescription: projectLongDescription,
      imageUrl: projectImageUrl,
      technologies: projectTechnologies.split(",").map((tech) => tech.trim()),
      liveUrl: projectLiveUrl,
      codeUrl: projectCodeUrl,
      featured: isFeatured,
    }

    console.log("New project:", project)

    // In a real app, you would save this to a database and redirect
    alert("Project saved! In a real app, this would be saved to a database.")

    // Reset the form
    setProjectTitle("")
    setProjectDescription("")
    setProjectLongDescription("")
    setProjectTechnologies("")
    setProjectLiveUrl("")
    setProjectCodeUrl("")
    setProjectImageUrl("")
    setIsFeatured(false)
  }

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/admin" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Admin
        </Link>
        <BookingButton />
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Project
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Add New Project</CardTitle>
            <CardDescription>Add a new website or application to your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="E.g., E-commerce Website"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Input
                  id="description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  placeholder="Brief description for cards and previews"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="longDescription">Detailed Description</Label>
                <Textarea
                  id="longDescription"
                  value={projectLongDescription}
                  onChange={(e) => setProjectLongDescription(e.target.value)}
                  placeholder="Detailed description for the project page"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="technologies">Technologies (comma separated)</Label>
                <Input
                  id="technologies"
                  value={projectTechnologies}
                  onChange={(e) => setProjectTechnologies(e.target.value)}
                  placeholder="E.g., React, Node.js, MongoDB"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="liveUrl">Live Demo URL</Label>
                  <Input
                    id="liveUrl"
                    value={projectLiveUrl}
                    onChange={(e) => setProjectLiveUrl(e.target.value)}
                    placeholder="https://your-website.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="codeUrl">Code Repository URL</Label>
                  <Input
                    id="codeUrl"
                    value={projectCodeUrl}
                    onChange={(e) => setProjectCodeUrl(e.target.value)}
                    placeholder="https://github.com/yourusername/repo"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl">Project Image URL</Label>
                <Input
                  id="imageUrl"
                  value={projectImageUrl}
                  onChange={(e) => setProjectImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                <p className="text-xs text-muted-foreground">
                  Enter an image URL or use the upload tool below to upload a new image
                </p>
              </div>

              <div className="space-y-2">
                <ProjectImageUpload onImageUploaded={handleImageUploaded} />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Switch id="featured" checked={isFeatured} onCheckedChange={setIsFeatured} />
                <Label htmlFor="featured">Feature this project on the homepage</Label>
              </div>

              <Button type="submit" className="w-full">
                Save Project
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Existing Projects</CardTitle>
              <CardDescription>Manage your portfolio projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                In a complete implementation, this section would display a list of your existing projects with options
                to edit or delete them.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <span className="font-medium">E-commerce Platform</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <span className="font-medium">Task Management App</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <span className="font-medium">AI Content Generator</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Tips</CardTitle>
              <CardDescription>Best practices for showcasing your work</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Use high-quality screenshots that clearly show your project's interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Write concise but descriptive project summaries that highlight key features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>List all relevant technologies to showcase your technical expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Include both live demos and code repositories when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>Feature your best and most recent work prominently on the homepage</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
