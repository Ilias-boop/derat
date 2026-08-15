"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { whatsappUrl, waMessages } from "@/lib/site-config"
import { trackConversion } from "@/lib/track"

const services = [
  {
    emoji: "🐀",
    title: "Dératisation",
    text: "Traitement des rats et suivi des points d'entrée.",
    image: "/images/service-rats.png",
    alt: "Technicien inspectant un point d'entrée de rongeurs dans un sous-sol",
    message: waMessages.rats,
  },
  {
    emoji: "🐭",
    title: "Souris",
    text: "Détection et traitement des souris dans le logement.",
    image: "/images/service-mice.png",
    alt: "Pose d'un poste de contrôle discret derrière des meubles de cuisine",
    message: waMessages.mice,
  },
  {
    emoji: "🪳",
    title: "Cafards",
    text: "Traitement ciblé des cafards et blattes.",
    image: "/images/service-cockroaches.png",
    alt: "Application d'un traitement ciblé dans une cuisine propre",
    message: waMessages.cockroaches,
  },
  {
    emoji: "🐜",
    title: "Autres nuisibles",
    text: "Autres nuisibles courants du logement.",
    image: "/images/service-other.png",
    alt: "Inspection des encadrements de fenêtres et portes d'une maison",
    message: waMessages.general,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Nos interventions
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <a
              key={service.title}
              href={whatsappUrl(service.message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp", `service_${service.title.toLowerCase()}`)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                  <span aria-hidden="true">{service.emoji}</span>
                  {service.title}
                </h3>
                <p className="mt-1.5 flex-1 text-pretty leading-relaxed text-muted-foreground">{service.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  En parler sur WhatsApp
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
