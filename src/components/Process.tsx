import { Car, ClipboardList, PhoneCall, type LucideIcon } from "lucide-react";
import { processSteps } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  "phone-call": PhoneCall,
  "clipboard-list": ClipboardList,
  car: Car,
};

export function Process() {
  return (
    <section id="process" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Simple &amp; Stress-Free
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Getting Back on the Road in 3 Steps
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => {
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
                <h3 className="mb-2 font-heading text-xl font-semibold uppercase tracking-tight text-primary">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
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
