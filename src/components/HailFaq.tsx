import { ChevronRight } from "lucide-react";
import { type HailCity, buildHailFaqs } from "@/lib/site";

export function HailFaq({ city }: { city?: HailCity | null }) {
  const faqs = buildHailFaqs(city ?? null);

  return (
    <section id="hail-faq" className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Straight Answers
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Hail Claim Questions
          </h2>
        </div>

        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold uppercase tracking-tight text-primary marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronRight
                  className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-90"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
