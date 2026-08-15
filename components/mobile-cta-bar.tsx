"use client"

import { Phone, MessageCircle } from "lucide-react"
import { siteConfig, whatsappUrl, waMessages } from "@/lib/site-config"
import { trackConversion } from "@/lib/track"

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-2 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${siteConfig.phoneHref}`}
          onClick={() => trackConversion("call", "mobile_bar")}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-primary-foreground"
          aria-label={`Appeler ${siteConfig.name}`}
        >
          <Phone className="size-5" aria-hidden="true" />
          Appeler
        </a>
        <a
          href={whatsappUrl(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("whatsapp", "mobile_bar")}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-white"
          aria-label="Nous contacter sur WhatsApp"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
