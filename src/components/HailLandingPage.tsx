import { CalendarCheck, Phone } from "lucide-react";
import { EstimateForm } from "@/components/EstimateForm";
import { HailClaims } from "@/components/hail/HailClaims";
import { HailDamageGuide } from "@/components/hail/HailDamageGuide";
import { HailFaq } from "@/components/hail/HailFaq";
import { HailHero } from "@/components/hail/HailHero";
import { HailStorms } from "@/components/hail/HailStorms";
import { HailTrust } from "@/components/hail/HailTrust";
import { MobileHailService } from "@/components/hail/MobileHailService";
import { NearbyAreas } from "@/components/hail/NearbyAreas";
import { PdrSection } from "@/components/hail/PdrSection";
import { MobileBar } from "@/components/MobileBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { HailLocationData } from "@/lib/hail";

export function HailLandingPage({ data }: { data: HailLocationData }) {
  const { location, estimateForm, cta, estimate } = data;

  return (
    <>
      <SiteHeader location={location} condenseOnMobile />
      <main className="pb-24 md:pb-0">
        <HailHero data={data} />
        <HailStorms data={data} />
        <MobileHailService data={data} />
        <HailDamageGuide data={data} />
        <PdrSection data={data} />
        <HailClaims data={data} />
        <HailTrust data={data} />
        <NearbyAreas data={data} />

        <section className="bg-accent py-16 text-accent-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
                {cta.heading}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-accent-foreground/85">
                {cta.subheading}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="#estimate"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Free Inspection
              </a>
              <a
                href={location.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary shadow-lg transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {location.phone}
              </a>
            </div>
          </div>
        </section>

        <HailFaq data={data} />
        <EstimateForm
          location={location}
          form={estimateForm}
          eyebrow={estimate.eyebrow}
          heading={estimate.heading}
          description={estimate.description}
        />
      </main>
      <SiteFooter location={location} />
      <MobileBar location={location} bookLabel="Inspection" />
    </>
  );
}
