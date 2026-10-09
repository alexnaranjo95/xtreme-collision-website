import Image from "next/image";
import {
  CalendarCheck,
  Check,
  CloudHail,
  MapPin,
  Phone,
  TriangleAlert,
  Truck,
} from "lucide-react";
import { clearfield, clearfieldAddress, recentStorms } from "@/lib/clearfield";

const hailstones = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i * 0.53) % 4,
  duration: 2.4 + ((i * 7) % 10) / 10,
  size: 3 + (i % 3) * 2,
}));

const inspectionPerks = [
  "At your home, work, or our Clearfield location",
  "Every dent mapped & photographed",
  "Estimate sent straight to your insurer",
  "Free, no obligation",
] as const;

const latestStorm = recentStorms[0];

export function HailHero() {
  return (
    <>
      <div className="bg-accent text-accent-foreground">
        <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-sm font-semibold sm:text-base">
          <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          {latestStorm.date}: {latestStorm.title} in Davis County.
        </p>
      </div>

      <section id="top" className="relative isolate overflow-hidden bg-primary">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src="/images/hail-paintless-dent-repair-clearfield-ut.webp"
            alt=""
            fill
            className="object-cover object-[center_30%]"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary from-0% via-primary/80 to-primary/25" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          {hailstones.map((stone, i) => (
            <span
              key={i}
              className="hailstone"
              style={{
                left: `${stone.left}%`,
                width: stone.size,
                height: stone.size,
                animationDelay: `${stone.delay}s`,
                animationDuration: `${stone.duration}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="flex flex-col items-start gap-4 sm:gap-6">
            <span className="order-1 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground shadow-lg shadow-accent/40">
              <CloudHail className="h-3.5 w-3.5" aria-hidden="true" />
              Hail Damage Repair • {clearfield.label}
            </span>

            <p className="order-2 flex items-center gap-2 text-sm font-semibold text-primary-foreground/90">
              <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              Locally based in Clearfield · Serving Davis &amp; Weber counties
            </p>

            <h1 className="order-3 max-w-3xl font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-balance text-primary-foreground sm:text-5xl lg:text-6xl">
              Hail Damage Repair in Clearfield, UT
            </h1>

            <p className="order-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:order-4 sm:text-lg">
              Free hail inspections at {clearfieldAddress.streetAddress} — or
              our mobile unit comes to you. Paintless dent repair that keeps your
              factory paint, and we handle the insurance claim from start to
              finish.
            </p>

            <div className="order-4 flex w-full flex-col gap-3 sm:order-5 sm:w-auto sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 font-heading text-base font-semibold uppercase tracking-wide text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-[1.03] sm:w-auto"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Free Hail Inspection
              </a>
              <a
                href={clearfield.phoneHref}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 font-heading text-base font-semibold uppercase tracking-wide text-primary shadow-lg transition-transform hover:scale-[1.03] sm:w-auto"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {clearfield.phone}
              </a>
            </div>

            <p className="order-6 text-sm text-primary-foreground/70">
              Lifetime limited warranty · All major insurance · Serving Hill AFB
              families
            </p>
          </div>

          <div className="rounded-2xl border border-primary-foreground/15 bg-primary/70 p-7 shadow-2xl backdrop-blur-md">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Truck className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold uppercase tracking-tight text-primary-foreground">
                  Free Mobile Hail Inspection
                </p>
                <p className="text-sm text-primary-foreground/70">
                  Davis &amp; Weber counties
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {inspectionPerks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-primary-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
            <a
              href="#estimate"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 font-heading text-base font-semibold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Schedule My Inspection
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
