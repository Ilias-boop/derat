import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { ProcessSection } from "@/components/process-section"
import { WhatsappSection } from "@/components/whatsapp-section"
import { TrustSection } from "@/components/trust-section"
import { ReviewsSection } from "@/components/reviews-section"
import { InterventionSection } from "@/components/intervention-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { StructuredData } from "@/components/structured-data"

export default function Page() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <WhatsappSection />
        <TrustSection />
        <ReviewsSection />
        <InterventionSection />
        <ServiceAreaSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
