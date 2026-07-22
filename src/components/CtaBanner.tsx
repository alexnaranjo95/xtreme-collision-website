import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="bg-accent py-16 text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            Damaged Vehicle? Let&apos;s Get You Back on the Road.
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-accent-foreground/80">
            Free estimate. No obligation. We work with all major insurance
            companies and most customers get the fastest answers by phone.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {site.phone}
          </a>
          <a
            href="#estimate"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Schedule Online
          </a>
        </div>
      </div>
    </section>
  );
}
