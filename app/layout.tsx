import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Dératisation ${siteConfig.mainCity} — Rats, souris, cafards | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Dératiseur local pour particuliers : intervention rapide contre rats, souris et cafards. Envoyez une photo sur WhatsApp ou appelez-nous pour un diagnostic adapté à votre logement.",
  keywords: [
    "dératisation",
    "dératiseur",
    "dératisation rats",
    "dératisation souris",
    "traitement cafards",
    "exterminateur rats",
    "nuisibles",
  ],
  applicationName: siteConfig.name,
  generator: "v0.app",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Dératisation rapide pour particuliers`,
    description:
      "Rats, souris ou cafards chez vous ? Intervention locale et professionnelle. Contactez-nous par téléphone ou WhatsApp.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f766e",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`light bg-background ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
