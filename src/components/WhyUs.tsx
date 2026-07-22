import Image from "next/image";
import { Award, BadgeCheck, Wrench, type LucideIcon } from "lucide-react";
import { whyUs } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  "badge-check": BadgeCheck,
  wrench: Wrench,
  award: Award,
};

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why Xtreme Collision
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            More Than an Auto Body Shop
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            We&apos;re a service that gets you back on the road safe and sound.
            Our expert auto body technicians repair your vehicle to factory
            standards — backed by certifications you can trust.
          </p>

          <div className="mt-8 space-y-6">
            {whyUs.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-accent">
                    {Icon ? (
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative order-first aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:order-last">
          <Image
            src="/images/auto-body-panel-refinishing-carrollton.webp"
            alt="Xtreme Collision technician refinishing a body panel under professional reflector lighting in our modern facility"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
