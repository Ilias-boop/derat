import Link from "next/link"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { siteConfig, whatsappUrl, waMessages } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                NOX
              </span>
              <span className="text-lg font-bold text-foreground">3D</span>
            </div>
            <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              Dératisation, traitement des souris et des cafards pour les particuliers de votre secteur.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Contact</h3>
            <ul className="mt-4 flex flex-col gap-3 text-foreground">
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary"
                >
                  <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {siteConfig.mainCity} · {siteConfig.department}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">Informations</h3>
            <ul className="mt-4 flex flex-col gap-3 text-muted-foreground">
              <li>
                <Link href="/mentions-legales" className="hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <a href="#zone" className="hover:text-primary">
                  Zone d&apos;intervention
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
