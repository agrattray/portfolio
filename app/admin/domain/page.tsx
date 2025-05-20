import { DomainSettings } from "@/components/domain-settings"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BookingButton } from "@/components/booking-button"

export default function DomainSettingsPage() {
  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-6">
        <Link href="/admin" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Admin
        </Link>
        <BookingButton />
      </div>

      <h1 className="text-3xl font-bold mb-8">Domain Configuration</h1>

      <div className="max-w-3xl mx-auto">
        <DomainSettings />
      </div>
    </div>
  )
}
