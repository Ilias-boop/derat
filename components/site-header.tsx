import Link from "next/link"
import { siteConfig, waMessages } from "@/lib/site-config"
import { CallButton, WhatsAppButton } from "@/components/cta-buttons"

const serviceLinks = [
  { label: "Dératisation", href: "/deratisation" },
  { label: "Souris", href: "/souris" },
  { label: "Cafards", href: "/cafards" },
  { label: "Punaises de lit", href: "/punaises-de-lit" },
  { label: "Désinsectisation", href: "/desinsectisation" },
  { label: "Guêpes & frelons", href: "/guepes-frelons" },
]

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Avis", href: "#avis" },
  { label: "Zone d'intervention", href: "#zone" },
]

function ServicesMenu({ mobile = false }: { mobile?: boolean }) {
  return (
    <details className={mobile ? "relative md:hidden" : "relative"}>
      <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
        Services
        <span aria-hidden="true" className="text-xs">⌄</span>
      </summary>
      <div className="absolute right-0 top-full z-50 mt-3 w-52 rounded-xl border border-border bg-background p-2 shadow-lg">
        {serviceLinks.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground focus-visible:outline-none"
          >
            {service.label}
          </Link>
        ))}
      </div>
    </details>
  )
}

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

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 md:flex">
          <ServicesMenu />
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <ServicesMenu mobile />

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
