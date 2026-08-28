import {
  Car,
  FileCheckCorner,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { type HailCity, hailClaimSteps } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  search: Search,
  "file-check": FileCheckCorner,
  car: Car,
  sparkles: Sparkles,
};

export function HailClaimSteps({ city }: { city?: HailCity | null }) {
  return (
    <section id="hail-process" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Claim to Keys
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            How Your Hail Claim Works
          </h2>
          <p className="mt-3 text-muted-foreground">
            {city
              ? `From your first call in ${city.city} to picking the vehicle back up — here is exactly what we handle for you.`
              : "From your first call to picking the vehicle back up — here is exactly what we handle for you."}
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hailClaimSteps.map((step) => {
            const Icon = icons[step.icon];
            return (
              <li
                key={step.step}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 font-heading text-5xl font-bold leading-none text-secondary"
                >
                  {step.step}
                </span>
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent">
                  {Icon ? <Icon className="h-7 w-7" aria-hidden="true" /> : null}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
