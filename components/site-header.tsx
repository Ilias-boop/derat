import Link from "next/link"
import { siteConfig, waMessages } from "@/lib/site-config"
import { CallButton, WhatsAppButton } from "@/components/cta-buttons"

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Nos services", href: "#services" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Avis", href: "#avis" },
  { label: "Zone d'intervention", href: "#zone" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="#accueil" className="flex items-center gap-2" aria-label={`${siteConfig.name} — accueil`}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            NOX
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">3D</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CallButton location="header" size="md" label="Appeler" className="hidden sm:inline-flex" />
          <WhatsAppButton
            location="header"
            message={waMessages.general}
            size="md"
            label="WhatsApp"
            className="hidden sm:inline-flex"
          />
        </div>
      </div>
    </header>
  )
}
