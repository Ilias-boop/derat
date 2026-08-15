import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Retour à l&apos;accueil
      </Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Politique de confidentialité</h1>
      <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
        <p>
          {siteConfig.name} s&apos;engage à protéger les données personnelles des visiteurs. Les informations que vous
          nous transmettez (par téléphone, WhatsApp ou email) sont utilisées uniquement pour répondre à votre demande
          d&apos;intervention.
        </p>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos
          données. Pour toute demande, contactez-nous à {siteConfig.email}.
        </p>
        <p className="text-sm">[Contenu à compléter avec la politique réelle de l&apos;entreprise.]</p>
      </div>
    </main>
  )
}
