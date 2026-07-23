import {
  Disc3,
  Droplets,
  Gauge,
  Settings2,
  Snowflake,
  Thermometer,
  type LucideIcon,
} from "lucide-react";
import { mechanicalServices } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  gauge: Gauge,
  settings: Settings2,
  disc: Disc3,
  droplets: Droplets,
  thermometer: Thermometer,
  snowflake: Snowflake,
};

export function MechanicalServicesGrid() {
  return (
    <section id="mechanical-services" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Mechanical Services
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Under-the-Hood Auto Repair
          </h2>
          <p className="mt-3 text-muted-foreground">
            Book the service you need — each section below has its own link for
            ads and direct landing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mechanicalServices.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : null}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#estimate"
                  className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Get a free estimate
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
