import Image from "next/image";
import { claimSteps, hailInsurancePoints } from "@/lib/clearfield";
import { insurers } from "@/lib/site";

export function HailClaims() {
  return (
    <section id="claims" className="scroll-mt-28 bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hail Insurance Claims
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            From Hailstorm to Handled in 5 Steps
          </h2>
          <p className="mt-3 text-primary-foreground/75">
            You make one call. We deal with the estimate, the adjuster, and the
            supplements.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-5">
          {claimSteps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <span className="font-heading text-4xl font-bold leading-none text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {hailInsurancePoints.map((point) => (
            <div key={point.title} className="rounded-2xl bg-white p-6 text-foreground shadow-lg">
              <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mb-6 mt-14 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
          We work with every major insurance company
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {insurers.map((insurer) => (
            <li
              key={insurer.src}
              className="flex h-20 items-center justify-center rounded-lg bg-white px-4 shadow-sm"
            >
              <Image
                src={insurer.src}
                alt={insurer.alt}
                width={160}
                height={64}
                className="max-h-12 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
