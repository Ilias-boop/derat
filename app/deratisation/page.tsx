import type { Metadata } from "next"
import { SeoServicePage, defaultFaq, defaultRelated } from "@/components/seo-service-page"

export const metadata: Metadata = {
  title: "Dératisation en Île-de-France",
  description: "NOX 3D accompagne les particuliers et professionnels face aux rats et souris en Île-de-France, avec priorité aux 77, 93, 94 et 91.",
}

export default function DeratisationPage() {
  return <SeoServicePage data={{
    title: "Dératisation en Île-de-France",
    intro: "Rats, souris ou traces inhabituelles dans un logement, un commerce ou une copropriété ? NOX 3D vous aide à comprendre la situation et à agir avec méthode.",
    message: "Bonjour, je souhaite des informations pour une dératisation en Île-de-France.",
    signs: ["Bruits dans les murs, plafonds ou cloisons", "Excréments ou traces de passage", "Emballages, câbles ou matériaux grignotés", "Odeurs inhabituelles dans certaines pièces", "Trous ou passages autour des canalisations", "Rongeur aperçu dans le logement ou les parties communes"],
    audiences: ["Maisons et appartements", "Commerces et restaurants", "Copropriétés", "Locaux professionnels", "Caves, garages et dépendances", "Parties communes d'immeubles"],
    method: ["Échange et observation des signes : le contexte, les zones concernées et les habitudes du lieu sont pris en compte.", "Recherche des passages et des facteurs qui favorisent la présence de rongeurs, puis mise en place d'une réponse adaptée au site.", "Conseils de prévention pour limiter les accès et réduire les conditions favorables à une nouvelle présence."],
    prevention: ["Fermer les accès possibles autour des portes et canalisations", "Ranger les aliments dans des contenants fermés", "Éviter de laisser des sacs ou déchets accessibles", "Surveiller les zones calmes, sombres ou peu fréquentées"],
    faq: [...defaultFaq, { question: "Rats et souris sont-ils traités de la même façon ?", answer: "Les signes peuvent se ressembler, mais les habitudes et les accès diffèrent. L'observation du lieu permet d'adapter les conseils et l'intervention." }],
    related: defaultRelated,
  }} />
}
