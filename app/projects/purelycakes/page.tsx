import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"

export default function PurelyCakesPage() {
  const project = projects.find((p) => p.id === "purelycakes")

  if (!project) {
    notFound()
  }

  return (
    <div className="container py-12">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

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
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Elegant and attractive design with a blue color scheme</li>
                <li>Showcase of various cakes and cupcakes with high-quality images</li>
                <li>Sections for baking experiences and resources</li>
                <li>Contact information and inquiry options</li>
                <li>Mobile-responsive layout for all devices</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Development Approach</h2>
              <p className="text-muted-foreground">
                The Purely Cakes website was designed with a focus on visual appeal and user experience. The blue
                background creates a pleasant contrast with the colorful cake images, making them stand out. The layout
                is clean and intuitive, allowing visitors to easily navigate through the different sections.
                High-quality images were used to showcase the bakery products in the best possible way, enticing
                potential customers.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Project Type</h4>
                  <p>Bakery Website</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Client</h4>
                  <p>Purely Cakes</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
                  <p>Web Designer & Developer</p>
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

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Project Status</h3>
              <p className="text-sm text-muted-foreground">
                This site is currently for sale. Interested parties can contact via the email provided on the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
