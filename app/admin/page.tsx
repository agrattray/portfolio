import { UploadForm } from "@/components/upload-form"
import { FileGallery } from "@/components/file-gallery"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FolderKanban, ArrowLeft, Globe } from "lucide-react"
import { BookingButton } from "@/components/booking-button"

export default function AdminPage() {
  // In a real app, you would check authentication here
  // For demo purposes, we're skipping authentication

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <BookingButton />
      </div>

      <h1 className="text-3xl font-bold mb-6">Portfolio Admin</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Upload Files</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Upload images and files to use in your portfolio. Supported formats: JPG, PNG, GIF, PDF.
            </p>
            <UploadForm />
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Portfolio Settings</h2>
            <p className="text-sm text-muted-foreground">Configure your portfolio settings and personal information.</p>
            {/* Add settings form here in the future */}
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Manage Projects</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Add, edit, or remove projects from your portfolio. Upload screenshots and manage project details.
            </p>
            <Button asChild>
              <Link href="/admin/projects">
                <FolderKanban className="mr-2 h-4 w-4" />
                Manage Projects
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-bold mb-4">Domain Settings</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Configure your custom domain and check connection status.
            </p>
            <Button asChild>
              <Link href="/admin/domain">
                <Globe className="mr-2 h-4 w-4" />
                Manage Domain
              </Link>
            </Button>
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-bold mb-4">Your Files</h2>
          <FileGallery />
        </div>
      </div>
    </div>
  )
}
