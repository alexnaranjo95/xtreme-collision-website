import Image from "next/image";
import { CalendarCheck, Phone, Star, Wrench } from "lucide-react";
import { site, socialProof } from "@/lib/site";

export function MechanicalHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/collision-repair-technician-carrollton.webp"
        alt="Xtreme Collision technician performing mechanical and auto repair work in Carrollton"
        fill
        priority
        className="-z-10 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/94 via-primary/78 to-primary/30" />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/35 blur-3xl"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-20 md:py-28 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground shadow-lg shadow-accent/40">
          <Wrench className="h-3.5 w-3.5" aria-hidden="true" />
          Mechanical Repair • Carrollton, TX
        </span>

        <div className="flex flex-wrap items-center gap-3">
          <div
            className="flex items-center gap-1"
            aria-label={`Rated ${socialProof.google.rating} out of 5 on Google`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-accent text-accent"
                aria-hidden="true"
              />
            ))}
          </div>
          <a
            href={socialProof.google.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary-foreground/90 underline-offset-4 hover:text-accent hover:underline"
          >
            {socialProof.google.rating}★ · {socialProof.google.reviewCount}+ Google
            reviews
          </a>
        </div>

        <h1 className="max-w-3xl font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-balance text-primary-foreground sm:text-5xl lg:text-6xl">
          Engine, Transmission &amp; Auto Mechanical Repair
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          Trusted shop for engine repair, transmission repair, brakes, and
          maintenance — same skilled team behind our 5-star collision work.
          Serving {site.areas}.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {site.phone}
          </a>
          <a
            href="#estimate"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/40 bg-primary-foreground/10 px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
