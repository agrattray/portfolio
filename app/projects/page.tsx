import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BookingButton } from "@/components/booking-button"

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <BookingButton />
      </div>

      <h1 className="text-3xl font-bold mb-8">My Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
            featured={project.featured}
          />
        ))}
      </div>
    </div>
  )
}
