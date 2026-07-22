import Image from "next/image";
import { certLogos } from "@/lib/site";

function CertItems() {
  return (
    <>
      <div className="flex h-32 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-lg bg-white px-6 shadow-sm ring-1 ring-border sm:h-36 sm:w-64">
        <span className="font-heading text-4xl font-bold uppercase text-red-600">
          I-CAR
        </span>
        <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Gold Class
        </span>
      </div>
      <div className="flex h-32 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-lg bg-white px-6 shadow-sm ring-1 ring-border sm:h-36 sm:w-64">
        <span className="font-heading text-4xl font-bold uppercase text-blue-700">
          ASE
        </span>
        <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Certified Techs
        </span>
      </div>
      {certLogos.map((logo) => (
        <div
          key={logo.src}
          className="flex h-32 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-lg bg-white px-6 shadow-sm ring-1 ring-border sm:h-36 sm:w-64"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={220}
            height={92}
            className="max-h-24 w-auto object-contain"
          />
        </div>
      ))}
    </>
  );
}

export function CertCarousel() {
  return (
    <section
      aria-label="Manufacturer certifications"
      className="overflow-hidden border-b border-border bg-secondary py-9"
    >
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Manufacturer Certified &amp; Industry Trained
        </p>
      </div>
      <div className="brand-carousel relative">
        <div className="brand-carousel-track flex w-max gap-4">
          <CertItems />
          <CertItems />
        </div>
      </div>
    </section>
  );
}
