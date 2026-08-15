import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
}

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Retour à l&apos;accueil
      </Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Mentions légales</h1>
      <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
        <p>
          Les informations légales de {siteConfig.name} seront précisées ici (raison sociale, forme juridique, numéro
          SIRET, adresse du siège, responsable de la publication, hébergeur).
        </p>
        <p>
          Contact : {siteConfig.phoneDisplay} — {siteConfig.email}.
        </p>
        <p className="text-sm">[Contenu à compléter avec les informations réelles de l&apos;entreprise.]</p>
      </div>
    </main>
  )
}
