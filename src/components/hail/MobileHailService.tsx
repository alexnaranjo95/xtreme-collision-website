import { MapPin, Navigation, Search, Truck, Wrench, type LucideIcon } from "lucide-react";
import type { HailLocationData } from "@/lib/hail";

const icons: Record<"truck" | "search" | "wrench", LucideIcon> = {
  truck: Truck,
  search: Search,
  wrench: Wrench,
};

export function MobileHailService({ data }: { data: HailLocationData }) {
  const { location, mobile } = data;

  return (
    <section id="mobile" className="scroll-mt-40 bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Mobile Hail Service
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            We Bring the Hail Shop to You
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{mobile.intro}</p>

          <ol className="mt-8 space-y-5">
            {mobile.steps.map((step, i) => {
              const Icon = icons[step.icon];
              return (
                <li key={step.title} className="flex gap-4">
                  <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <h3 className="mt-10 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Cities we cover
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {mobile.serviceAreaCities.map((city) => (
              <li
                key={city}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-primary"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          {mobile.map ? (
            <>
              <div className="relative min-h-80 flex-1">
                <iframe
                  src={mobile.map.src}
                  title={mobile.map.title}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-primary">{mobile.map.name}</p>
                    <p className="text-sm text-muted-foreground">{mobile.map.address}</p>
                    <p className="text-sm text-muted-foreground">{mobile.map.note}</p>
                  </div>
                </div>
                {data.directionsHref ? (
                  <a
                    href={data.directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Directions
                  </a>
                ) : null}
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-10 text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Truck className="h-8 w-8" aria-hidden="true" />
              </span>
              <p className="font-heading text-xl font-bold uppercase tracking-tight text-primary">
                Mobile service, {location.label}
              </p>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                {location.areas}. We come to your home or work for the free inspection, and
                handle the repair at our nearest shop.
              </p>
              <a
                href="#estimate"
                className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Schedule my inspection
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
