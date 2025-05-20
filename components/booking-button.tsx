"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

interface BookingButtonProps extends ButtonProps {
  showIcon?: boolean
  text?: string
  className?: string
}

export function BookingButton({
  showIcon = true,
  text = "Schedule a Meeting",
  className = "",
  ...props
}: BookingButtonProps) {
  return (
    <Button asChild className={className} {...props}>
      <Link href="https://calendly.com/arthursenergyonline/30min-1" target="_blank" rel="noopener noreferrer">
        {showIcon && <Calendar className="mr-2 h-4 w-4" />}
        {text}
      </Link>
    </Button>
  )
}
