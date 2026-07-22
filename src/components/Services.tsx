import {
  Boxes,
  Cable,
  Car,
  CloudHail,
  Cog,
  FileCheckCorner,
  Frame,
  Palette,
  Ruler,
  ShieldAlert,
  SprayCan,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  "cloud-hail": CloudHail,
  "spray-can": SprayCan,
  "file-check": FileCheckCorner,
  frame: Frame,
  boxes: Boxes,
  "shield-alert": ShieldAlert,
  ruler: Ruler,
  cable: Cable,
  cog: Cog,
  car: Car,
  palette: Palette,
};

export function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Collision Repair Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
