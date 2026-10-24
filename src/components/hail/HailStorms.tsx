import { CloudLightning } from "lucide-react";
import type { HailLocationData } from "@/lib/hail";

export function HailStorms({ data }: { data: HailLocationData }) {
  const { storms } = data;

  return (
    <section id="storms" className="scroll-mt-40 bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {storms.eyebrow}
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            {storms.heading}
          </h2>
          <p className="mt-3 text-primary-foreground/75">{storms.intro}</p>
        </div>

        <dl className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {storms.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-6 text-center"
            >
              <dt className="order-2 mt-2 text-sm leading-snug text-primary-foreground/75">
                {stat.label}
              </dt>
              <dd className="order-1 font-heading text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {storms.events.map((storm) => (
            <li
              key={storm.date}
              className="flex flex-col rounded-2xl bg-white p-6 text-foreground shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-accent">
                  <CloudLightning className="h-5 w-5" aria-hidden="true" />
                </span>
                <time className="font-heading text-lg font-bold uppercase tracking-tight text-primary">
                  {storm.date}
                </time>
              </div>
              <h3 className="mb-2 font-semibold text-primary">{storm.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {storm.detail}
              </p>
              <a
                href="#estimate"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 py-2.5 text-center text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Book a free inspection
              </a>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-xs text-primary-foreground/50">{storms.sources}</p>
      </div>
    </section>
  );
}
