import { siteConfig } from "@/lib/site-config"
import { faqItems } from "@/lib/faq"

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "PestControl",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/hero-technician.png`,
    url: siteConfig.url,
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    priceRange: "€€",
    areaServed: [siteConfig.mainCity, ...siteConfig.nearbyCities].map((name) => ({
      "@type": "City",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.mainCity,
      addressRegion: siteConfig.department,
      addressCountry: "FR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.replace(",", "."),
      bestRating: "5",
    },
    makesOffer: ["Dératisation", "Traitement des souris", "Traitement des cafards", "Traitement des nuisibles"].map(
      (name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      }),
    ),
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  )
}
