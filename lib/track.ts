import { track } from "@vercel/analytics"

type ConversionType = "call" | "whatsapp"

// Lightweight conversion tracking wrapper around Vercel Analytics custom events.
export function trackConversion(type: ConversionType, location: string) {
  try {
    track(type === "call" ? "phone_click" : "whatsapp_click", { location })
  } catch {
    // Analytics is best-effort; never block the user action.
  }
}
