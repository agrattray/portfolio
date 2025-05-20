"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink, FileIcon } from "lucide-react"

// In a real app, you would fetch this from your database
// For demo purposes, we'll use localStorage to persist uploads during the session
type UploadedFile = {
  url: string
  filename: string
  uploadedAt: string
  type: "image" | "document"
}

export function FileGallery() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [copied, setCopied] = useState<string | null>(null)

  // Load files from localStorage on component mount
  useEffect(() => {
    const storedFiles = localStorage.getItem("uploadedFiles")
    if (storedFiles) {
      try {
        setFiles(JSON.parse(storedFiles))
      } catch (e) {
        console.error("Failed to parse stored files", e)
      }
    }

    // Check URL for newly uploaded file
    const url = new URL(window.location.href)
    const newFileUrl = url.searchParams.get("url")
    const success = url.searchParams.get("success")

    if (success === "true" && newFileUrl) {
      const isImage = newFileUrl.match(/\.(jpeg|jpg|gif|png)$/i) !== null
      const newFile: UploadedFile = {
        url: newFileUrl,
        filename: newFileUrl.split("/").pop() || "file",
        uploadedAt: new Date().toISOString(),
        type: isImage ? "image" : "document",
      }

      // Add to state and localStorage if not already present
      setFiles((prev) => {
        if (prev.some((f) => f.url === newFileUrl)) return prev
        const updated = [newFile, ...prev]
        localStorage.setItem("uploadedFiles", JSON.stringify(updated))
        return updated
      })

      // Clean up URL
      window.history.replaceState({}, document.title, "/admin")
    }
  }, [])

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    setCopied(url)
    setTimeout(() => setCopied(null), 2000)
  }

  if (files.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <FileIcon className="mx-auto h-12 w-12 opacity-20 mb-2" />
        <p>No files uploaded yet</p>
        <p className="text-sm">Upload files using the form on the left</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {files.map((file) => (
        <div key={file.url} className="border rounded-md overflow-hidden flex flex-col">
          <div className="aspect-video relative bg-muted">
            {file.type === "image" ? (
              <Image src={file.url || "/placeholder.svg"} alt={file.filename} fill className="object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full">
                <FileIcon className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
          </div>
          <div className="p-3 text-xs">
            <p className="font-medium truncate" title={file.filename}>
              {file.filename}
            </p>
            <p className="text-muted-foreground text-xs mt-1">{new Date(file.uploadedAt).toLocaleDateString()}</p>
            <div className="flex gap-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs flex-1"
                onClick={() => copyToClipboard(file.url)}
              >
                <Copy className="h-3 w-3 mr-1" />
                {copied === file.url ? "Copied!" : "Copy URL"}
              </Button>
              <Button variant="outline" size="sm" className="h-7 w-7 p-0" asChild>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3" />
                  <span className="sr-only">Open</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
