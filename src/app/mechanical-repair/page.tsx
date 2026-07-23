import type { Metadata } from "next";
import { CalendarCheck, Phone } from "lucide-react";
import { EstimateForm } from "@/components/EstimateForm";
import { MechanicalHero } from "@/components/MechanicalHero";
import { MechanicalServicesGrid } from "@/components/MechanicalServicesGrid";
import { MobileBar } from "@/components/MobileBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { mechanicalServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mechanical Repair | Engine, Transmission & Auto Service | Xtreme Collision",
  description:
    "Engine repair, transmission repair, brakes, oil changes, cooling system, and AC service in Carrollton, TX. Factory-trained technicians at Xtreme Collision.",
  keywords: [
    "engine repair Carrollton TX",
    "transmission repair Carrollton",
    "brake repair North Texas",
    "auto mechanical repair Carrollton",
    "oil change Carrollton TX",
    "AC repair Carrollton",
  ],
  alternates: {
    canonical: "/mechanical-repair",
  },
  openGraph: {
    title: "Mechanical Repair | Xtreme Collision",
    description:
      "Engine, transmission, brakes, and mechanical auto repair in Carrollton, TX.",
    url: "https://www.xtremecollision.com/mechanical-repair",
    siteName: "Xtreme Collision",
    locale: "en_US",
    type: "website",
  },
};

export default function MechanicalRepairPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        <MechanicalHero />
        <MechanicalServicesGrid />

        <section className="bg-accent py-16 text-accent-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
                Need Engine or Transmission Work?
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-accent-foreground/80">
                Free estimate. Honest diagnosis. Same shop that handles
                collision and mechanical — call or book online today.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-accent-foreground/85">
                {mechanicalServices.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {site.phone}
              </a>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Schedule Online
              </a>
            </div>
          </div>
        </section>

        <EstimateForm />
      </main>
      <SiteFooter />
      <MobileBar />
    </>
  );
}
