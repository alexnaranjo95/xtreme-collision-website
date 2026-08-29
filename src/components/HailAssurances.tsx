import {
  BadgeCheck,
  Car,
  Handshake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { hailAssurances } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  car: Car,
  handshake: Handshake,
  "badge-check": BadgeCheck,
};

export function HailAssurances() {
  return (
    <section id="hail-assurances" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why Drivers Pick Us After a Storm
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            No Repaint. No Runaround.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hailAssurances.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : null}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
