import { waMessages } from "@/lib/site-config"
import { CallButton, WhatsAppButton } from "@/components/cta-buttons"

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center md:py-24">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Vous avez un problème de nuisibles&nbsp;?
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-primary-foreground/85">
          Contactez NOX 3D et expliquez-nous votre situation.
        </p>
        <div className="flex w-full flex-col justify-center gap-3 sm:flex-row">
          <CallButton
            location="final_cta"
            size="lg"
            label="Appeler"
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto"
          />
          <WhatsAppButton location="final_cta" message={waMessages.general} size="lg" label="WhatsApp" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
