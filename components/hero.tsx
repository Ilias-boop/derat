import Image from "next/image"
import { Star } from "lucide-react"
import { siteConfig, waMessages } from "@/lib/site-config"
import { CallButton, WhatsAppButton } from "@/components/cta-buttons"

export function Hero() {
  return (
    <section id="accueil" className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-whatsapp" aria-hidden="true" />
            Intervention locale en Île-de-France
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            Votre expert en lutte anti-parasitaire&nbsp;
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Une intervention rapide et professionnelle pour retrouver un logement sain et tranquille.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-star text-star" />
              ))}
            </div>
            <p className="text-sm font-medium text-foreground">
              <span className="font-bold">{siteConfig.rating}/5</span> sur Google
              <span className="text-muted-foreground">
                {" "}
                · Plus de {siteConfig.reviewCount} clients accompagnés
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CallButton location="hero" size="lg" label="Appeler maintenant" className="w-full sm:w-auto" />
            <WhatsAppButton
              location="hero"
              message={waMessages.photo}
              size="lg"
              label="Envoyer une photo"
              className="w-full sm:w-auto"
            />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Vous avez un doute ? Envoyez-nous simplement une photo de ce que vous avez trouvé.
          </p>

          <p className="text-center text-sm leading-relaxed text-muted-foreground">
          Spécialistes agréés Certibiocide
          </p>
          </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/images/hero-technician.png"
              alt="Technicien professionnel de NOX 3D inspectant une cuisine résidentielle"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
