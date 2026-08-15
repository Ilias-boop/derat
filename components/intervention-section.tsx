import Image from "next/image"
import { CallButton } from "@/components/cta-buttons"

export function InterventionSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="order-2 overflow-hidden rounded-2xl border border-border shadow-sm md:order-1">
          <Image
            src="/images/intervention-diagnostic.png"
            alt="Technicien expliquant un diagnostic à un particulier dans son logement"
            width={720}
            height={540}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 flex flex-col gap-5 md:order-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Chaque intervention commence par un diagnostic.
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Nous cherchons à comprendre l&apos;origine du problème afin de mettre en place une solution adaptée à votre
            logement.
          </p>
          <CallButton
            location="intervention"
            size="lg"
            label="Prendre rendez-vous"
            className="w-full sm:w-fit"
          />
        </div>
      </div>
    </section>
  )
}
