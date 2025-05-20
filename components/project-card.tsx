import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  liveUrl: string
  codeUrl: string
  featured?: boolean
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  technologies,
  liveUrl,
  codeUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card className={`overflow-hidden ${featured ? "border-primary/50" : ""}`}>
      <div className="aspect-video relative">
        <Image src={imageUrl || "/placeholder.svg?height=400&width=600"} alt={title} fill className="object-cover" />
        {featured && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Link href={`/projects/${id}`} className="inline-flex items-center text-sm font-medium text-primary">
            <Info className="mr-1 h-4 w-4" />
            Details
          </Link>
          <Link
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary"
          >
            <Github className="mr-1 h-4 w-4" />
            Code
          </Link>
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Demo
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
