import { CalendarCheck, Phone } from "lucide-react";
import { CertCarousel } from "@/components/CertCarousel";
import { HailAssurances } from "@/components/HailAssurances";
import { HailClaimSteps } from "@/components/HailClaimSteps";
import { HailFaq } from "@/components/HailFaq";
import { HailHero } from "@/components/HailHero";
import { HailServiceArea } from "@/components/HailServiceArea";
import { Insurance } from "@/components/Insurance";
import { InstantQuote } from "@/components/InstantQuote";
import { MobileBar } from "@/components/MobileBar";
import { Reviews } from "@/components/Reviews";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialProofBar } from "@/components/SocialProofBar";
import { Stats } from "@/components/Stats";
import {
  type HailCity,
  buildHailFaqs,
  hailCities,
  hailRepairPath,
  joinCityNames,
  site,
} from "@/lib/site";

function hailJsonLd(city: HailCity | null) {
  const served = city ? [city] : hailCities;
  const url = city
    ? `${site.url}${hailRepairPath}/${city.slug}`
    : `${site.url}${hailRepairPath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: city
          ? `Hail Damage Repair in ${city.city}, TX`
          : "Hail Damage Repair in North Texas",
        serviceType: "Hail damage repair and paintless dent repair",
        url,
        provider: { "@id": `${site.url}/#business` },
        areaServed: served.map((entry) => ({
          "@type": "City" as const,
          name: entry.city,
          address: {
            "@type": "PostalAddress" as const,
            addressLocality: entry.city,
            addressRegion: "TX",
            postalCode: entry.zip,
            addressCountry: "US",
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: buildHailFaqs(city).map((faq) => ({
          "@type": "Question" as const,
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function HailLanding({ city = null }: { city?: HailCity | null }) {
  const ctaHeading = city
    ? `Hail Damage in ${city.city}? Get a Free Estimate.`
    : "Hail Damage? Get a Free Estimate.";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hailJsonLd(city)) }}
      />
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        <HailHero city={city} />
        <SocialProofBar />
        <HailAssurances />
        <HailClaimSteps city={city} />
        <Insurance />
        <CertCarousel />
        <Stats />
        <Reviews />
        <HailServiceArea city={city} />
        <HailFaq city={city} />

        <section className="bg-accent py-16 text-accent-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
                {ctaHeading}
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-accent-foreground/80">
                {city
                  ? `We inspect the damage, handle the claim with your adjuster, and arrange your insurance-paid rental at drop-off. Free and no obligation for ${city.city} drivers.`
                  : `We inspect the damage, handle the claim with your adjuster, and arrange your insurance-paid rental at drop-off. Free and no obligation across ${joinCityNames()}.`}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {site.phone}
              </a>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Schedule Online
              </a>
            </div>
          </div>
        </section>

        <InstantQuote />
      </main>
      <SiteFooter />
      <MobileBar />
    </>
  );
}
