import { EarlyAccessForm } from "@/components/early-access-form"

export function HeroSection() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 sm:px-8">
      <div className="flex w-full max-w-2xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            Private Build Phase
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          The Next Frontier of Sports Technology
        </h1>

        {/* Positioning statement */}
        <p className="mb-12 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          We are engineering the infrastructure that will redefine how athletes
          perform, compete, and evolve.
        </p>

        {/* Email form */}
        <EarlyAccessForm />

        {/* Social proof hint */}
        <p className="mt-8 text-xs tracking-wide text-muted-foreground/60">
          Invite only. Limited spots available.
        </p>
      </div>
    </section>
  )
}
