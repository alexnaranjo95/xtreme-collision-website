import type { ReactNode } from "react";
import { MobileBar } from "@/components/MobileBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function LegalShell({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        <section className="border-b border-border bg-secondary py-12">
          <div className="mx-auto max-w-3xl px-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Legal
            </p>
            <h1 className="font-heading text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Effective Date: {effectiveDate}
            </p>
          </div>
        </section>
        <article className="mx-auto max-w-3xl px-4 py-12">
          <div className="legal-prose space-y-6 text-[15px] leading-relaxed text-foreground">
            {children}
          </div>
          <nav
            aria-label="Legal pages"
            className="mt-12 flex flex-wrap gap-4 border-t border-border pt-6 text-sm font-semibold"
          >
            <a href="/privacy" className="text-accent underline-offset-4 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="text-accent underline-offset-4 hover:underline">
              Terms of Service
            </a>
            <a href="/sms" className="text-accent underline-offset-4 hover:underline">
              SMS Program
            </a>
          </nav>
        </article>
      </main>
      <SiteFooter />
      <MobileBar />
    </>
  );
}
