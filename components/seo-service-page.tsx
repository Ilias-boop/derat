import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronDown, MapPin } from "lucide-react"
import { CallButton, WhatsAppButton } from "@/components/cta-buttons"
import { siteConfig, waMessages } from "@/lib/site-config"

export type SeoPageData = {
  title: string
  intro: string
  message: string
  signs: string[]
  audiences: string[]
  method: string[]
  prevention: string[]
  faq: { question: string; answer: string }[]
  related: { href: string; label: string; description: string }[]
}

export function SeoServicePage({ data }: { data: SeoPageData }) {
  return (
    <>
      <header className="border-b border-border/70 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Retour à l'accueil NOX 3D">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">NOX</span>
            <span className="text-lg font-bold tracking-tight">3D</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex" aria-label="Navigation principale">
            <Link href="/" className="transition-colors hover:text-foreground">Accueil</Link>
            <Link href="/desinsectisation" className="transition-colors hover:text-foreground">Désinsectisation</Link>
            <Link href="/deratisation" className="transition-colors hover:text-foreground">Dératisation</Link>
          </nav>
          <div className="hidden gap-2 sm:flex">
            <CallButton location="seo-header" size="md" label="Appeler" />
            <WhatsAppButton location="seo-header" size="md" message={data.message} label="WhatsApp" />
          </div>
          <Link href={`tel:${siteConfig.phoneHref}`} className="text-sm font-semibold text-primary sm:hidden">Appeler</Link>
        </div>
      </header>

      <main>
        <section className="bg-accent/40 px-5 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <MapPin className="size-3.5" aria-hidden="true" /> Île-de-France · 77 · 93 · 94 · 91
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{data.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">{data.intro}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton location="seo-hero" size="lg" message={data.message} label="Décrire ma situation sur WhatsApp" />
              <CallButton location="seo-hero" size="lg" label="Appeler NOX 3D" />
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Reconnaître le problème</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Les signes à ne pas laisser s&apos;installer</h2>
              <p className="mt-4 leading-7 text-muted-foreground">Une présence ponctuelle peut rapidement devenir plus difficile à maîtriser. Un échange avec NOX 3D permet de préciser la situation avant de choisir une intervention adaptée.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {data.signs.map((sign) => (
                <li key={sign} className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-6 shadow-sm">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-primary px-5 py-16 text-primary-foreground sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground/70">Une intervention adaptée</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Pour les particuliers comme les professionnels</h2>
              <p className="mt-4 max-w-xl leading-7 text-primary-foreground/80">NOX 3D intervient dans différents environnements en Île-de-France, avec une approche attentive au lieu, à son usage et aux contraintes rencontrées.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.audiences.map((audience) => (
                <div key={audience} className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-4 font-semibold">{audience}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Méthode NOX 3D</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Comprendre, traiter, prévenir</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {data.method.map((step, index) => (
                <div key={step} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent font-bold text-primary">0{index + 1}</span>
                  <p className="mt-5 leading-7 text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl bg-muted/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold">Prévention au quotidien</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {data.prevention.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-accent/35 px-5 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Questions fréquentes</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Avant de contacter NOX 3D</h2>
            <div className="mt-8 space-y-3">
              {data.faq.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-border bg-background px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden"><span>{item.question}</span><ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl bg-foreground px-6 py-10 text-background sm:p-12">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">Vous avez un doute ou une infestation en cours&nbsp;?</h2>
              <p className="mt-4 max-w-xl leading-7 text-background/70">Envoyez quelques détails ou une photo sur WhatsApp. NOX 3D vous aidera à mieux qualifier votre situation.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row"><WhatsAppButton location="seo-final-cta" size="lg" message={data.message} label="Écrire sur WhatsApp" /><CallButton location="seo-final-cta" size="lg" label="Appeler" className="bg-background text-foreground hover:bg-background/90" /></div>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-5 py-12 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold tracking-tight">En savoir plus sur les nuisibles</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {data.related.map((item) => <Link key={item.href} href={item.href} className="group rounded-2xl border border-border p-5 transition-colors hover:border-primary/40 hover:bg-accent/40"><span className="font-bold">{item.label}</span><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Voir la page <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></Link>)}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export const defaultRelated = [
  { href: "/deratisation", label: "Dératisation", description: "Rats, souris et prévention des rongeurs." },
  { href: "/desinsectisation", label: "Désinsectisation", description: "Une vue d'ensemble des insectes nuisibles." },
  { href: "/guepes-frelons", label: "Guêpes et frelons", description: "Sécuriser un nid et ses abords." },
]

export const defaultFaq = [
  { question: "Que dois-je faire avant de contacter NOX 3D ?", answer: "Notez les signes observés, le lieu concerné et, si possible, prenez une photo sans vous exposer. Ces éléments aideront à mieux comprendre la situation." },
  { question: "Intervenez-vous en Île-de-France ?", answer: "NOX 3D intervient en Île-de-France, avec une priorité pour les départements 77, 93, 94 et 91. Contactez-nous pour préciser votre secteur." },
  { question: "Comment demander un échange ?", answer: "Vous pouvez appeler NOX 3D ou envoyer un message WhatsApp depuis les boutons de cette page." },
]

export const commonMessages = waMessages
