import { MapPin } from "lucide-react"
import { siteConfig, waMessages } from "@/lib/site-config"
import { WhatsAppButton } from "@/components/cta-buttons"

export function ServiceAreaSection() {
  return (
    <section id="zone" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Nous intervenons dans votre secteur
        </h2>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2.5 text-lg font-bold text-primary">
          <MapPin className="size-5" aria-hidden="true" />
          {siteConfig.mainCity} · {siteConfig.department}
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {siteConfig.nearbyCities.map((city) => (
            <li
              key={city}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              {city}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Intervention prioritaire en Seine-et-Marne (77), ainsi qu’en Seine-Saint-Denis (93), Val-de-Marne (94) et Essonne (91).
        </p>

        <div className="mt-6 flex justify-center">
          <WhatsAppButton location="service_area" message={waMessages.general} size="lg" label="Nous contacter" />
        </div>
      </div>
    </section>
  )
}
