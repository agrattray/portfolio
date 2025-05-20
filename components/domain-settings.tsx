"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, Globe, AlertCircle, ArrowRight, ExternalLink } from "lucide-react"

export function DomainSettings() {
  const [domainStatus, setDomainStatus] = useState<"unchecked" | "checking" | "connected" | "error">("unchecked")
  const [domain, setDomain] = useState("vilowebdev.com")
  const [errorMessage, setErrorMessage] = useState("")

  const checkDomainStatus = async () => {
    // In a real implementation, this would make an API call to check domain status
    // For demo purposes, we'll simulate the check
    setDomainStatus("checking")

    setTimeout(() => {
      if (domain === "vilowebdev.com") {
        setDomainStatus("error")
        setErrorMessage(
          "Domain exists but is not connected to this project. Follow the instructions below to connect it.",
        )
      } else {
        setDomainStatus("error")
        setErrorMessage("Domain not found in your Vercel account.")
      }
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          Domain Settings
        </CardTitle>
        <CardDescription>Connect your custom domain to your portfolio website</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="domain">Your Domain</Label>
          <div className="flex gap-2">
            <Input
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="yourdomain.com"
              disabled={domainStatus === "checking"}
            />
            <Button onClick={checkDomainStatus} disabled={domainStatus === "checking" || !domain}>
              {domainStatus === "checking" ? "Checking..." : "Check Status"}
            </Button>
          </div>
        </div>

        {domainStatus === "connected" && (
          <Alert className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Domain Connected</AlertTitle>
            <AlertDescription>Your domain {domain} is properly connected to your portfolio.</AlertDescription>
          </Alert>
        )}

        {domainStatus === "error" && (
          <Alert className="bg-amber-50 text-amber-700 border-amber-200">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Connection Issue</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-medium">Connect Your Domain</h3>
          <p className="text-sm text-muted-foreground">Follow these steps to connect your domain to your portfolio:</p>

          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-medium">
                1
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Deploy your portfolio to Vercel</p>
                <p className="text-xs text-muted-foreground">
                  If you haven't already, deploy your portfolio project to Vercel.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-medium">
                2
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Go to your Vercel project settings</p>
                <p className="text-xs text-muted-foreground">
                  In your Vercel dashboard, select your portfolio project and go to "Settings" → "Domains".
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-medium">
                3
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Add your domain</p>
                <p className="text-xs text-muted-foreground">Enter "{domain}" and click "Add".</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-medium">
                4
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Verify domain ownership</p>
                <p className="text-xs text-muted-foreground">
                  Follow Vercel's instructions to verify domain ownership (if required).
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-muted text-xs font-medium">
                5
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Wait for DNS propagation</p>
                <p className="text-xs text-muted-foreground">
                  DNS changes can take up to 48 hours to propagate, but often happen much faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <Button variant="outline" asChild>
          <a href="https://vercel.com/docs/projects/domains" target="_blank" rel="noopener noreferrer">
            Vercel Domain Docs
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild>
          <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer">
            Go to Vercel Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
