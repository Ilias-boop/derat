"use client"

import { Phone, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig, whatsappUrl } from "@/lib/site-config"
import { trackConversion } from "@/lib/track"

type Size = "md" | "lg"

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-base gap-2",
  lg: "px-6 py-4 text-lg gap-2.5",
}

export function CallButton({
  location,
  size = "md",
  className,
  label = "Appeler",
}: {
  location: string
  size?: Size
  className?: string
  label?: string
}) {
  return (
    <a
      href={`tel:${siteConfig.phoneHref}`}
      onClick={() => trackConversion("call", location)}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors",
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        sizeClasses[size],
        className,
      )}
      aria-label={`Appeler ${siteConfig.name} au ${siteConfig.phoneDisplay}`}
    >
      <Phone className="size-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  )
}

export function WhatsAppButton({
  location,
  message,
  size = "md",
  className,
  label = "WhatsApp",
}: {
  location: string
  message: string
  size?: Size
  className?: string
  label?: string
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion("whatsapp", location)}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors",
        "bg-whatsapp text-white hover:bg-whatsapp-dark",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
        sizeClasses[size],
        className,
      )}
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  )
}
