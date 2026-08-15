import { Plus } from "lucide-react"
import { faqItems } from "@/lib/faq"

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
      <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Questions fréquentes
      </h2>

      <div className="mt-10 flex flex-col gap-3">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-border bg-card p-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-foreground">
              {item.question}
              <Plus
                className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
