import Image from "next/image";
import { Check } from "lucide-react";
import { insuranceBenefits, insurers } from "@/lib/site";

function InsurerItems() {
  return (
    <>
      {insurers.map((insurer) => (
        <div
          key={insurer.src}
          className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg bg-white px-4 shadow-sm sm:h-24 sm:w-48"
        >
          <Image
            src={insurer.src}
            alt={insurer.alt}
            width={160}
            height={64}
            className="max-h-12 w-auto object-contain sm:max-h-14"
          />
        </div>
      ))}
    </>
  );
}

export function Insurance() {
  return (
    <section id="insurance" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/collision-repair-technician-carrollton.webp"
            alt="Xtreme Collision technician removing a vehicle door for a certified collision repair in Carrollton"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Insurance Made Easy
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            We Work With ALL Major Insurance Companies
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
            Dealing with an insurance claim is stressful. Our team handles the
            paperwork and negotiates directly with your provider so your vehicle
            is returned to its pre-accident condition — the right way.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {insuranceBenefits.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-primary-foreground/70">
            Don&apos;t see yours? We work with all major carriers — just ask.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
          Approved by the providers you already trust
        </p>
        <div className="brand-carousel insurer-carousel relative">
          <div className="brand-carousel-track flex w-max gap-4">
            <InsurerItems />
            <InsurerItems />
          </div>
        </div>
      </div>
    </section>
  );
}
