import {
  Camera,
  ClipboardCheck,
  ExternalLink,
  MessageSquareText,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { instantQuoteSteps, instantQuoteUrl, site } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  message: MessageSquareText,
  camera: Camera,
  clipboard: ClipboardCheck,
};

export function InstantQuote() {
  return (
    <section id="estimate" className="scroll-mt-28 bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get Started
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Get An Instant Repair Quote
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Skip the trip. Send us photos of the damage from your phone and our
            estimators will assess it and call you back with next steps — no
            appointment needed to find out where you stand.
          </p>

          <a
            href={site.phoneHref}
            className="mt-6 inline-flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-accent"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Prefer to Talk Now?
              </span>
              <span className="block font-heading text-xl font-bold text-primary">
                {site.phone}
              </span>
            </span>
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg sm:p-10">
          <ol className="space-y-7">
            {instantQuoteSteps.map((step) => {
              const Icon = icons[step.icon];
              return (
                <li key={step.step} className="flex gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                    {Icon ? (
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    ) : null}
                  </div>
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

          <a
            href={instantQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-accent-foreground shadow-lg transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Start My Instant Quote
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Free and no obligation. Your quote is an initial estimate based on
            the photos you submit and may change once we inspect the vehicle.
          </p>
        </div>
      </div>
    </section>
  );
}
