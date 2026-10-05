import type { Metadata } from "next"
import { SeoServicePage, defaultFaq, defaultRelated } from "@/components/seo-service-page"

export const metadata: Metadata = {
  title: "Traitement des punaises de lit en Île-de-France",
  description: "Reconnaître les punaises de lit, leurs piqûres et leurs cachettes. NOX 3D accompagne maisons, appartements, hôtels et Airbnb en Île-de-France.",
}

export default function PunaisesPage() {
  return <SeoServicePage data={{
    title: "Traitement des punaises de lit en Île-de-France",
    intro: "Piqûres, petits points sombres ou insectes dans la literie ? NOX 3D vous aide à vérifier les indices et à préparer une intervention adaptée à votre logement ou votre activité.",
    message: "Bonjour, je suspecte des punaises de lit et j'aimerais être conseillé.",
    signs: ["Piqûres regroupées ou répétées", "Petits points sombres sur les draps", "Insectes ou mues près du matelas", "Traces dans les coutures et sommiers", "Présence derrière la tête de lit", "Valise ou meuble récemment introduit"],
    audiences: ["Appartement", "Maison", "Hôtel ou Airbnb", "Copropriété", "Chambre d'étudiant", "Logement après déménagement"],
    method: ["Examiner les indices sans déplacer inutilement les meubles et noter les pièces concernées.", "Identifier les cachettes possibles autour du couchage, des plinthes et du mobilier proche.", "Échanger sur la préparation du lieu et les mesures utiles avant, pendant et après l'intervention."],
    prevention: ["Éviter de déplacer literie et meubles vers une autre pièce", "Inspecter les bagages après un déplacement", "Laver les textiles selon les indications de leur étiquette", "Signaler rapidement les indices dans une copropriété ou un hébergement"],
    faq: [...defaultFaq, { question: "Dois-je jeter mon matelas ?", answer: "Pas nécessairement. Une décision dépend de l'état du matelas et de la situation globale. Demandez conseil avant de déplacer ou jeter du mobilier." }, { question: "Les piqûres suffisent-elles pour confirmer la présence ?", answer: "Non. Les piqûres peuvent avoir plusieurs causes. Il faut les croiser avec des indices matériels et l'observation des cachettes possibles." }],
    related: [{ href: "/cafards", label: "Cafards et blattes", description: "Une autre infestation fréquente en habitat collectif." }, { href: "/desinsectisation", label: "Désinsectisation", description: "Les autres insectes nuisibles pris en compte par NOX 3D." }, defaultRelated[0]],
  }} />
}
