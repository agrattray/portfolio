"use server"

import { put } from "@vercel/blob"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File

  if (!file) {
    return { error: "No file selected" }
  }

  try {
    // Generate a unique filename with original extension
    const originalName = file.name
    const extension = originalName.split(".").pop()
    const uniqueFilename = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${extension}`

    // Upload to Vercel Blob
    const blob = await put(uniqueFilename, file, {
      access: "public",
    })

    // Return the URL and other metadata
    return {
      success: true,
      url: blob.url,
      filename: blob.pathname,
      size: blob.size,
      uploadedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Upload error:", error)
    return { error: "Failed to upload file" }
  }
}

export async function uploadProjectImage(formData: FormData) {
  const result = await uploadFile(formData)

  if (result.success) {
    // Store the project image URL in your database or state management
    // For now, we'll just redirect back to the admin page
    revalidatePath("/admin")
    redirect("/admin?success=true&url=" + encodeURIComponent(result.url))
  }

  return result
}
