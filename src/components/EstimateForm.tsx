import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * A2P widget-first: no LeadConnector form / SMS consent on the website.
 * Chat widget is the only SMS opt-in path.
 */
export function EstimateForm() {
  return (
    <section id="estimate" className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get Started
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Schedule An Appointment
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            Call us for a free estimate, or use the chat bubble to message our
            team. Fastest answers are usually by phone during business hours.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Call Us Today
              </span>
              <span className="block font-heading text-xl font-bold text-primary">
                {site.phone}
              </span>
            </span>
          </a>

          <a
            href="/chat"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Message Us
              </span>
              <span className="block font-heading text-xl font-bold text-primary">
                Open chat
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
