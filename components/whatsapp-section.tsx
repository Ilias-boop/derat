import { waMessages } from "@/lib/site-config"
import { WhatsAppButton } from "@/components/cta-buttons"

export function WhatsappSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vous ne savez pas si vous avez réellement une infestation&nbsp;?
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Pas besoin de remplir un long formulaire. Envoyez-nous simplement une photo sur WhatsApp.
          </p>
          <WhatsAppButton
            location="whatsapp_section"
            message={waMessages.photo}
            size="lg"
            label="Envoyer ma photo"
            className="w-full sm:w-fit"
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Une photo nous aide à mieux comprendre votre situation, mais ne remplace pas toujours un diagnostic sur
            place.
          </p>
        </div>

        {/* Mock WhatsApp conversation */}
        <div className="rounded-2xl border border-border bg-secondary/60 p-4">
          <div className="mb-3 flex items-center gap-3 border-b border-border pb-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              3D
            </span>
            <div>
              <p className="text-sm font-bold text-foreground">3D Dératisation</p>
              <p className="text-xs text-whatsapp-dark">en ligne</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-whatsapp px-3.5 py-2.5 text-sm leading-relaxed text-white">
              Bonjour, j&apos;ai trouvé ça derrière mon frigo. Est-ce que ce sont des traces de souris&nbsp;?
            </div>
            <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-background px-3.5 py-2.5 text-sm leading-relaxed text-foreground shadow-sm">
              Bonjour 👋 Envoyez-nous une photo plus large de la zone et indiquez-nous votre ville. Nous allons regarder
              cela avec vous.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
