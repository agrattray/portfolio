import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"

export default function ArtesianStepsPage() {
  const project = projects.find((p) => p.id === "artesiansteps")

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
                <li>Modern, responsive e-commerce platform</li>
                <li>Elegant product showcases with high-quality imagery</li>
                <li>Intuitive navigation and user-friendly interface</li>
                <li>Secure payment processing and checkout system</li>
                <li>Product filtering and search functionality</li>
                <li>Customer account management</li>
                <li>Order tracking and history</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Development Approach</h2>
              <p className="text-muted-foreground">
                The Artesian Steps e-commerce site was developed with a focus on creating a seamless shopping
                experience. The design emphasizes the products while maintaining a clean, uncluttered interface that
                guides customers through the shopping journey. The color palette of beige and light blue creates a
                calming atmosphere that complements the products.
              </p>
              <p className="text-muted-foreground mt-4">
                Special attention was paid to the mobile experience, ensuring that customers can easily browse and
                purchase products on any device. The checkout process was streamlined to minimize friction and reduce
                cart abandonment. Backend systems were integrated to manage inventory, process orders, and handle
                customer data securely.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Project Type</h4>
                  <p>E-commerce Website</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Client</h4>
                  <p>Artesian Steps</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
                  <p>Full Stack Developer</p>
                </div>
                <div className="pt-4 flex flex-col gap-3">
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Visit Store
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
              <h3 className="text-lg font-bold mb-4">E-commerce Features</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <ShoppingBag className="h-3 w-3 text-primary" />
                  </div>
                  <span>Product catalog with categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <ShoppingBag className="h-3 w-3 text-primary" />
                  </div>
                  <span>Shopping cart functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <ShoppingBag className="h-3 w-3 text-primary" />
                  </div>
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <ShoppingBag className="h-3 w-3 text-primary" />
                  </div>
                  <span>Customer accounts & profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <ShoppingBag className="h-3 w-3 text-primary" />
                  </div>
                  <span>Order management system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
