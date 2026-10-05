import type { Metadata } from "next"
import { SeoServicePage, defaultFaq, defaultRelated } from "@/components/seo-service-page"

export const metadata: Metadata = {
  title: "Guêpes et frelons : intervention sur les nids",
  description: "Nid de guêpes, frelon européen ou frelon asiatique : NOX 3D vous accompagne en Île-de-France, en priorité dans les 77, 93, 94 et 91.",
}

export default function GuepesFrelonsPage() {
  return <SeoServicePage data={{
    title: "Guêpes et frelons : intervention sur les nids",
    intro: "Un nid près d'une entrée, d'une terrasse ou d'une toiture peut présenter un risque. NOX 3D vous aide à identifier la situation et à sécuriser la demande d'intervention.",
    message: "Bonjour, j'ai repéré un nid de guêpes ou de frelons. Pouvez-vous m'aider ?",
    signs: ["Allées et venues d'insectes autour d'un point précis", "Nid visible sous une toiture ou dans un arbre", "Nid fermé dans un mur, volet ou coffrage", "Insectes autour d'une terrasse ou entrée", "Bourdonnement dans une cloison ou un grenier", "Présence proche d'une zone fréquentée"],
    audiences: ["Maison et jardin", "Balcon et terrasse", "Toiture et grenier", "Copropriété", "Commerce et restaurant", "École ou lieu collectif"],
    method: ["Ne pas s'approcher du nid et transmettre sa localisation, sa hauteur et son accessibilité si vous pouvez le faire sans risque.", "Distinguer autant que possible guêpes, frelon européen et frelon asiatique, sans tenter de manipuler le nid.", "Organiser les précautions autour de la zone et les conditions d'une intervention adaptée au type de nid et à son emplacement."],
    prevention: ["Éloigner les enfants et animaux de la zone", "Ne pas boucher une entrée située dans un mur", "Éviter les gestes brusques près du nid", "Prévenir les occupants et baliser la zone si besoin"],
    faq: [...defaultFaq, { question: "Quelle est la différence entre un nid de guêpes et de frelons ?", answer: "La taille, l'emplacement et l'apparence peuvent varier. Une identification à distance ou par photo peut aider, mais il ne faut pas s'approcher pour vérifier." }, { question: "Que faire si le nid est dans une cloison ?", answer: "Ne tentez pas de l'ouvrir ou de boucher le passage. Éloignez-vous de la zone et contactez NOX 3D pour décrire l'accès et l'emplacement." }],
    related: [defaultRelated[2], { href: "/desinsectisation", label: "Désinsectisation", description: "Découvrir les autres insectes pris en compte par NOX 3D." }, defaultRelated[0]],
  }} />
}
