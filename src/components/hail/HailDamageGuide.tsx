import { Check } from "lucide-react";
import { damageChecks, hailSizes } from "@/lib/clearfield";

export function HailDamageGuide() {
  return (
    <section id="damage-check" className="scroll-mt-28 bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Self-Check Guide
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Is Your Car Hail Damaged?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Hail dents are easy to miss in bright Utah sun. Here&apos;s what to
            look for — and what different hail sizes usually do to a vehicle.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="mb-6 font-heading text-xl font-semibold uppercase tracking-tight text-primary">
              Hail size vs. vehicle damage
            </h3>
            <ul className="space-y-4">
              {hailSizes.map((hail) => (
                <li key={hail.name} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="rounded-full bg-gradient-to-br from-white to-slate-300 shadow-[inset_-2px_-3px_6px_rgba(15,23,42,0.25),0_2px_4px_rgba(15,23,42,0.2)] ring-1 ring-slate-300"
                      style={{ width: hail.px, height: hail.px }}
                    />
                  </span>
                  <div className="flex-1 border-b border-border pb-4">
                    <p className="font-semibold text-primary">
                      {hail.name}{" "}
                      <span className="font-normal text-muted-foreground">({hail.size})</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{hail.impact}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {damageChecks.map((check) => (
              <article
                key={check.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                  {check.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {check.description}
                </p>
              </article>
            ))}
            <div className="flex flex-col justify-center rounded-2xl bg-primary p-6 text-primary-foreground sm:col-span-2">
              <p className="font-heading text-lg font-semibold uppercase tracking-tight">
                Not sure what you&apos;re looking at?
              </p>
              <p className="mt-1 text-sm text-primary-foreground/75">
                Our technicians check every panel under PDR lights — free and
                with no obligation.
              </p>
              <a
                href="#estimate"
                className="mt-4 inline-flex w-fit items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.03]"
              >
                Get a free hail inspection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
