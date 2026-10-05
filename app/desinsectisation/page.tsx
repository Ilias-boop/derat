import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SeoServicePage, defaultFaq, defaultRelated } from "@/components/seo-service-page"

export const metadata: Metadata = {
  title: "Désinsectisation en Île-de-France",
  description: "Désinsectisation contre cafards, punaises, fourmis, puces, mites, araignées, guêpes et frelons avec NOX 3D en Île-de-France.",
}

const services = [
  ["/cafards", "Cafards et blattes", "Indices, cachettes et accompagnement pour les cuisines, logements et locaux."],
  ["/punaises-de-lit", "Punaises de lit", "Piqûres, literie, mobilier et préparation du logement."],
  ["/guepes-frelons", "Guêpes et frelons", "Nids, risques et intervention autour des habitations et locaux."],
  ["/desinsectisation", "Fourmis, puces, mites et araignées", "Une situation à préciser selon l'insecte, le lieu et les signes observés."],
] as const

export default function DesinsectisationPage() {
  return <>
    <SeoServicePage data={{
      title: "Désinsectisation en Île-de-France",
      intro: "Cafards, punaises, fourmis, puces, mites, araignées, guêpes ou frelons : NOX 3D vous aide à identifier la situation et à choisir la bonne page de conseil.",
      message: "Bonjour, j'aimerais des informations sur une désinsectisation.",
      signs: ["Insectes vus régulièrement dans une pièce", "Piqûres ou démangeaisons inexpliquées", "Traces, mues ou petits regroupements", "Nid visible près d'une fenêtre ou toiture", "Insectes autour des denrées ou points d'eau", "Présence dans une chambre, cave ou réserve"],
      audiences: ["Maisons et appartements", "Restaurants et commerces", "Hôtels et locations", "Copropriétés", "Bureaux et locaux", "Écoles et espaces collectifs"],
      method: ["Qualifier l'insecte ou le nid à partir de vos observations, de la pièce concernée et d'une éventuelle photo.", "Comprendre le contexte : accès, humidité, denrées, mobilier, voisinage ou saison peuvent orienter l'analyse.", "Partager les précautions et la suite adaptée au lieu, sans appliquer un traitement au hasard."],
      prevention: ["Maintenir les aliments et déchets fermés", "Réduire les sources d'humidité", "Surveiller les ouvertures et zones de stockage", "Éviter de déplacer les objets d'une pièce à l'autre"],
      faq: [...defaultFaq, { question: "Quels insectes peuvent nécessiter une désinsectisation ?", answer: "Cela peut concerner notamment les cafards, punaises de lit, fourmis, puces, mites, araignées, guêpes et frelons. La situation doit être précisée avant toute action." }],
      related: defaultRelated,
    }} />
    <section className="border-t border-border px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold tracking-tight">Choisir la page correspondant à votre situation</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{services.map(([href, label, text]) => <Link key={href} href={href} className="group rounded-2xl border border-border p-6 hover:border-primary/40 hover:bg-accent/30"><span className="text-xl font-bold">{label}</span><p className="mt-2 leading-7 text-muted-foreground">{text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">En savoir plus <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></Link>)}</div></div>
    </section>
  </>
}
