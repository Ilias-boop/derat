import type { Metadata } from "next"
import { SeoServicePage, defaultFaq, defaultRelated } from "@/components/seo-service-page"

export const metadata: Metadata = {
  title: "Élimination des souris en Île-de-France",
  description: "Signes, causes et traitement des souris dans les maisons, appartements et commerces d'Île-de-France avec NOX 3D.",
}

export default function SourisPage() {
  return <SeoServicePage data={{
    title: "Élimination des souris en Île-de-France",
    intro: "Une souris aperçue ou des traces dans la cuisine ne sont pas à ignorer. NOX 3D vous accompagne dans les maisons, appartements, commerces et restaurants.",
    message: "Bonjour, je pense avoir des souris et j'aimerais être accompagné.",
    signs: ["Petits excréments près des placards ou aliments", "Bruits légers la nuit", "Sachets ou emballages percés", "Matériaux isolants ou papiers déplacés", "Traces le long des murs", "Odeur persistante dans un espace fermé"],
    audiences: ["Maison individuelle", "Appartement", "Commerce de proximité", "Restaurant", "Cave et cellier", "Bureaux et réserves"],
    method: ["Identifier les signes et les endroits fréquentés en observant les zones de stockage, les plinthes et les passages.", "Rechercher les causes possibles : accès, nourriture disponible, rangement ou défauts autour des ouvertures.", "Mettre en place les actions adaptées au lieu et rappeler les gestes utiles pour limiter le retour des souris."],
    prevention: ["Conserver les denrées dans des boîtes hermétiques", "Nettoyer rapidement les miettes et résidus", "Contrôler les passages autour des tuyaux", "Maintenir les réserves dégagées et accessibles à l'observation"],
    faq: [...defaultFaq, { question: "Une seule souris signifie-t-elle une infestation ?", answer: "Un seul aperçu ne permet pas de conclure. Les traces, les bruits et les zones fréquentées donnent davantage d'éléments pour évaluer la situation." }],
    related: [defaultRelated[0], { href: "/cafards", label: "Cafards et blattes", description: "Comprendre les signes d'une infestation d'insectes." }, defaultRelated[1]],
  }} />
}
