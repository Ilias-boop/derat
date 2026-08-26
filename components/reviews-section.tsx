import { Star, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

// Placeholder reviews — replace with real Google reviews before launch.
const reviews = [
  {
    name: "Angelique T.",
    text: "Très satisfaite de l’intervention. Prise de rendez-vous rapide, diagnostic sérieux et traitement plus qu’efficace. Mr compétent, et très professionnelle. Service de qualité, je recommande !!!",
  },
  {
    name: "Mel G.",
    text: "Intervention très rapide et efficace aujourd’hui à mon domicile. Travail soigné, sérieux et rassurant. Je recommande vivement cette entreprise de dératisation pour sa réactivité et la qualité de son service. Merci encore !",
  },
  {
    name: "Jalal Z.",
    text: "Intervention rapide, efficace avec un prix très raisonnable.",
  },
  {
    name: "Yanis ",
    text: "Super",
  },
  {
    name: "Armand P.",
    text: "Parfait. Merci.",
  },
  {
    name: "Gitane S.",
    text: "Intervention rapide et efficace avec le sourire. Je recommande.",
  },
]

export function ReviewsSection() {
  return (
    <section id="avis" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <div className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6 fill-star text-star" />
              ))}
            </div>
            <span className="text-lg font-bold text-foreground">{siteConfig.rating}/5</span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nos clients parlent de nous
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <div className="flex" aria-label="Note de 5 étoiles sur 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-star text-star" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-pretty leading-relaxed text-foreground">
                {review.text}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">{review.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJ0Xo8QVXFvgcRbLp3EH7bCQ4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Voir tous nos avis Google
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
