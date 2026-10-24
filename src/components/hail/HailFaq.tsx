import { ChevronDown } from "lucide-react";
import type { HailLocationData } from "@/lib/hail";

export function HailFaq({ data }: { data: HailLocationData }) {
  const { faq } = data;

  return (
    <section id="faq" className="scroll-mt-40 bg-background py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hail Repair FAQ
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            {faq.heading}
          </h2>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <details
              key={item.question}
              className="faq-item group rounded-xl border border-border bg-card shadow-sm open:border-accent"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-primary">
                {item.question}
                <ChevronDown
                  className="faq-chevron h-5 w-5 shrink-0 text-accent transition-transform"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
