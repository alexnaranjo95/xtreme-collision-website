import { BadgeCheck, Building2, CloudHail, type LucideIcon } from "lucide-react";
import type { HailLocationData } from "@/lib/hail";

const icons: Record<"building" | "cloud-hail" | "badge-check", LucideIcon> = {
  building: Building2,
  "cloud-hail": CloudHail,
  "badge-check": BadgeCheck,
};

export function HailTrust({ data }: { data: HailLocationData }) {
  const { trust } = data;

  return (
    <section id="why-local" className="scroll-mt-28 bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Skip the Storm Chasers
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            A Hail Shop That&apos;s Still Here Next Season
          </h2>
          <p className="mt-3 text-muted-foreground">{trust.intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trust.points.map((point) => {
            const Icon = icons[point.icon];
            return (
              <article
                key={point.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-semibold uppercase tracking-tight text-primary">
                  {point.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{point.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
