import { MapPin } from "lucide-react"
import { siteConfig, waMessages } from "@/lib/site-config"
import { WhatsAppButton } from "@/components/cta-buttons"

export function ServiceAreaSection() {
  // Liste des départements d'intervention
  const departments = [
    "Seine-et-Marne (77)",
    "Seine-Saint-Denis (93)",
    "Val-de-Marne (94)",
    "Essonne (91)"
  ]

  return (
    <section id="zone" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Nous sommes basés à
        </h2>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 text-lg font-bold text-primary">
          <MapPin className="size-5" aria-hidden="true" />
          {siteConfig.mainCity} · {siteConfig.department}
        </div>

        {/* Titre introduit pour la clarté */}
        <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Zone d'intervention
        </p>

        {/* Liste des badges d'intervention */}
        <ul className="mt-4 flex flex-wrap justify-center gap-3">
          {departments.map((dept) => (
            <li
              key={dept}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              {dept}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton location="service_area" message={waMessages.general} size="lg" label="Nous contacter" />
        </div>
      </div>
    </section>
  )
}
