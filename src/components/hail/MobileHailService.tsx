import { MapPin, Navigation, Search, Truck, Wrench, type LucideIcon } from "lucide-react";
import {
  clearfield,
  clearfieldDirectionsHref,
  mobileSteps,
  serviceAreaCities,
} from "@/lib/clearfield";

const icons: Record<(typeof mobileSteps)[number]["icon"], LucideIcon> = {
  truck: Truck,
  search: Search,
  wrench: Wrench,
};

export function MobileHailService() {
  return (
    <section id="mobile" className="scroll-mt-28 bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Mobile Hail Service
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            We Bring the Hail Shop to You
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            After a big storm, nobody wants to wait in line at a body shop. Our
            mobile unit is based at our Clearfield location and covers the
            whole north Wasatch Front.
          </p>

          <ol className="mt-8 space-y-5">
            {mobileSteps.map((step, i) => {
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
            {serviceAreaCities.map((city) => (
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
          <div className="relative min-h-80 flex-1">
            <iframe
              src={clearfield.mapEmbedSrc}
              title="Map of Xtreme Collision hail repair at 665 N Main St, Clearfield, UT"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="font-semibold text-primary">Xtreme Collision — Clearfield</p>
                <p className="text-sm text-muted-foreground">{clearfield.address}</p>
                <p className="text-sm text-muted-foreground">
                  On Main St, minutes from Hill AFB and I-15
                </p>
              </div>
            </div>
            <a
              href={clearfieldDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
