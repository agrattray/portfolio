import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import { BookingButton } from "@/components/booking-button"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
        <BookingButton />
      </div>

      <div className="grid gap-8 md:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-lg overflow-hidden border">
          <Image
            src={project.imageUrl || "/placeholder.svg?height=600&width=1200"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground">{project.longDescription || project.description}</p>
            </div>

            {/* Add more sections as needed */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Feature 1 description</li>
                <li>Feature 2 description</li>
                <li>Feature 3 description</li>
                <li>Feature 4 description</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Challenges</h2>
              <p className="text-muted-foreground">
                Describe any interesting technical challenges you faced during development and how you solved them.
              </p>
            </div>

            <div className="pt-4">
              <BookingButton text="Discuss a similar project" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Project Type</h4>
                  <p>Website / Mobile App / etc.</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Timeline</h4>
                  <p>Jan 2023 - Mar 2023</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
                  <p>Full Stack Developer</p>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-2">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
