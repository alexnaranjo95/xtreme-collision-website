import Script from "next/script";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

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
            Request your free estimate and we&apos;ll get back to you within
            24–48 hours. Prefer to talk now? Call us — most of our customers get
            the fastest answers by phone.
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
                Call Us Today
              </span>
              <span className="block font-heading text-xl font-bold text-primary">
                {site.phone}
              </span>
            </span>
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="h-[875px] w-full">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/g5IXqjb7vYVHGLdUcI5t"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
              }}
              id="inline-g5IXqjb7vYVHGLdUcI5t"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Xtreme Collision — Free Estimate"
              data-height="875"
              data-layout-iframe-id="inline-g5IXqjb7vYVHGLdUcI5t"
              data-form-id="g5IXqjb7vYVHGLdUcI5t"
              title="Xtreme Collision — Free Estimate"
            />
          </div>
        </div>
      </div>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </section>
  );
}
