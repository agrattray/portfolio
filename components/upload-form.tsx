"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadFile } from "@/app/actions/upload"
import { Upload, Loader2, Check, AlertCircle } from "lucide-react"
import Image from "next/image"

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<{
    success?: boolean
    url?: string
    error?: string
  } | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setResult(null)

    // Create preview for images
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await uploadFile(formData)

      if ("error" in response) {
        setResult({ error: response.error })
      } else {
        setResult({
          success: true,
          url: response.url,
        })
        // Reset form
        setFile(null)
        setPreview(null)
        const fileInput = document.getElementById("file") as HTMLInputElement
        if (fileInput) fileInput.value = ""
      }
    } catch (error) {
      setResult({ error: "An unexpected error occurred" })
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="file">Select File</Label>
        <Input
          id="file"
          type="file"
          onChange={handleFileChange}
          accept="image/*,application/pdf"
          disabled={uploading}
        />
      </div>

      {preview && (
        <div className="mt-4 relative aspect-video w-full max-w-sm mx-auto border rounded-md overflow-hidden">
          <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-contain" />
        </div>
      )}

      {result && (
        <div
          className={`p-3 rounded-md ${result.success ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
        >
          <div className="flex items-center gap-2">
            {result.success ? <Check className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            <p className="text-sm font-medium">
              {result.success ? "File uploaded successfully!" : `Error: ${result.error}`}
            </p>
          </div>
          {result.success && result.url && (
            <div className="mt-2">
              <p className="text-xs font-mono break-all">{result.url}</p>
              <Button
                variant="link"
                className="p-0 h-auto text-xs mt-1"
                onClick={() => navigator.clipboard.writeText(result.url!)}
              >
                Copy URL
              </Button>
            </div>
          )}
        </div>
      )}

      <Button type="submit" disabled={!file || uploading} className="w-full">
        {uploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Upload File
          </>
        )}
      </Button>
    </form>
  )
}
