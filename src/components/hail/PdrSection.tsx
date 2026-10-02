import Image from "next/image";
import { Check } from "lucide-react";
import { pdrBenefits } from "@/lib/clearfield";

export function PdrSection() {
  return (
    <section id="pdr" className="scroll-mt-28 bg-background py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="grid grid-cols-5 gap-4">
          <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/paintless-dent-repair-carrollton.webp"
              alt="Xtreme Collision technician using a PDR rod to push out hail dents from inside a vehicle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 60vw, 30vw"
            />
          </div>
          <div className="relative col-span-2 mt-12 aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/auto-body-panel-refinishing-carrollton.webp"
              alt="Technician reading hail dents on a hood under paintless dent repair lights"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 40vw, 20vw"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Paintless Dent Repair
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Dents Out. Factory Paint Stays.
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Paintless dent repair (PDR) is the go-to fix for hail. Our
            technicians read each dent under specialized lights, then use
            precision rods to massage the metal back into shape from behind the
            panel — no sanding, filler, or repaint.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {pdrBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl border border-border bg-secondary p-5">
            <p className="font-semibold text-primary">When PDR isn&apos;t enough</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Cracked paint, torn metal, or very sharp dents need conventional
              repair. We handle that too — with Sherwin-Williams certified color
              matching and OEM parts — all under the same claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
