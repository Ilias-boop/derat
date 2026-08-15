import { Phone, Search, Wrench } from "lucide-react"
import { waMessages } from "@/lib/site-config"
import { WhatsAppButton } from "@/components/cta-buttons"

const steps = [
  {
    icon: Phone,
    title: "Vous nous contactez",
    text: "Appelez-nous ou envoyez-nous une photo sur WhatsApp.",
  },
  {
    icon: Search,
    title: "Nous identifions le problème",
    text: "Nous vous aidons à déterminer le type de nuisible et la solution adaptée.",
  },
  {
    icon: Wrench,
    title: "Nous intervenons",
    text: "Notre technicien intervient à votre domicile selon la situation.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Une solution simple en 3 étapes
        </h2>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-bold text-muted-foreground">Étape {index + 1}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton location="process" message={waMessages.technician} size="lg" label="Parler à un technicien" />
        </div>
      </div>
    </section>
  )
}
