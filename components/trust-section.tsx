import { Check } from "lucide-react"

const points = [
  {
    title: "Intervention locale",
    text: "Une équipe proche de chez vous, réactive et disponible.",
  },
  {
    title: "Diagnostic adapté à votre situation",
    text: "Nous cherchons l'origine du problème avant d'agir.",
  },
  {
    title: "Techniciens professionnels",
    text: "Des interventions réalisées avec méthode et discrétion.",
  },
  {
    title: "Suivi après intervention",
    text: "Un suivi selon le traitement mis en place.",
  },
]

export function TrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Pourquoi faire appel à NOX 3D&nbsp;?
      </h2>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
        {points.map((point) => (
          <div key={point.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-bold text-foreground">{point.title}</h3>
              <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">{point.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
