import type { Metadata } from "next"
import { SeoServicePage, defaultFaq, defaultRelated } from "@/components/seo-service-page"

export const metadata: Metadata = {
  title: "Traitement des cafards et blattes en Île-de-France",
  description: "NOX 3D vous accompagne face aux cafards et blattes dans les cuisines, appartements, restaurants et copropriétés d'Île-de-France.",
}

export default function CafardsPage() {
  return <SeoServicePage data={{
    title: "Traitement des cafards et blattes en Île-de-France",
    intro: "Les cafards et blattes se cachent souvent dans les zones chaudes, humides et peu accessibles. NOX 3D aide à qualifier l'infestation et à organiser une réponse adaptée.",
    message: "Bonjour, je pense avoir des cafards ou des blattes. Pouvez-vous m'aider ?",
    signs: ["Cafard aperçu le soir ou la nuit", "Petites traces sombres dans les placards", "Odeur inhabituelle dans la cuisine", "Insectes ou mues près des appareils", "Présence autour des points d'eau", "Œufs ou recoins occupés"],
    audiences: ["Cuisine de maison", "Appartement", "Restaurant", "Copropriété", "Commerce alimentaire", "Locaux professionnels"],
    method: ["Observer les zones sensibles, les horaires d'apparition et les indices présents dans la cuisine ou les pièces d'eau.", "Repérer les cachettes et les circulations possibles derrière les meubles, appareils et canalisations.", "Définir les actions adaptées au lieu et les précautions utiles pour réduire les facteurs favorables."],
    prevention: ["Réduire l'humidité et réparer les fuites", "Nettoyer les zones derrière les appareils", "Stocker les aliments dans des contenants fermés", "Limiter les cartons et encombrements dans les réserves"],
    faq: [...defaultFaq, { question: "Pourquoi voit-on surtout les cafards la nuit ?", answer: "Les cafards sont généralement plus actifs lorsque le lieu est calme et peu éclairé. Une apparition en journée peut toutefois signaler une situation à examiner." }],
    related: [defaultRelated[0], { href: "/punaises-de-lit", label: "Punaises de lit", description: "Reconnaître les indices et les cachettes possibles." }, defaultRelated[1]],
  }} />
}
