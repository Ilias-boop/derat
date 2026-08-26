"use client"

import { ArrowRight } from "lucide-react"
import { whatsappUrl, waMessages } from "@/lib/site-config"
import { trackConversion } from "@/lib/track"

const problems = [
  {
    emoji: "🐀",
    title: "Rat",
    text: "Rat aperçu, bruits dans les murs, excréments, traces ou dégâts.",
    message: waMessages.rats,
  },
  {
    emoji: "🐭",
    title: "Souris",
    text: "Crottes, bruits nocturnes, emballages grignotés ou souris dans la cuisine.",
    message: waMessages.mice,
  },
  {
    emoji: "🪳",
    title: "Cafards",
    text: "Cafards, blattes ou traces dans la cuisine et les pièces humides.",
    message: waMessages.cockroaches,
  },
  {
    emoji: "🛏️",
    title: "Punaises de lit",
    text: "Piqûres au réveil, petits points noirs, traces sur le matelas ou le linge.",
    message: waMessages.punaises,
  },
  {
    emoji: "🐝",
    title: "Nids de guêpes / frelons",
    text: "Nid visible, nombreuses guêpes autour de la maison, terrasse ou toiture.",
    message: waMessages.guepes,
  },
  {
    emoji: "🐜",
    title: "Désinsectisation",
    text: "Fourmis, puces, mites ou autres insectes présents dans votre logement.",
    message: waMessages.desinsectisation,
  },
]

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Vous avez constaté l&apos;un de ces signes&nbsp;?
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {problems.map((problem) => (
          <a
            key={problem.title}
            href={whatsappUrl(problem.message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion("whatsapp", `problem_${problem.title.toLowerCase()}`)}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="text-4xl" aria-hidden="true">
              {problem.emoji}
            </span>
            <h3 className="mt-4 text-xl font-bold text-foreground">{problem.title}</h3>
            <p className="mt-2 flex-1 text-pretty leading-relaxed text-muted-foreground">{problem.text}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary">
              J&apos;ai ce problème
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
