import type { Metadata } from "next";
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
import {
  clearfield,
  clearfieldAddress,
  clearfieldEstimateForm,
  clearfieldGeo,
  clearfieldPageUrl,
  hailFaqs,
  serviceAreaCities,
} from "@/lib/clearfield";
import { site } from "@/lib/site";

const pageUrl = clearfieldPageUrl;
const description =
  "Hail damage repair in Clearfield, UT. Free mobile hail inspections across Davis & Weber counties, paintless dent repair, and full insurance claim help at 665 N Main St.";

export const metadata: Metadata = {
  title: "Hail Damage Repair Clearfield, UT | Paintless Dent Repair | Xtreme Collision",
  description,
  keywords: [
    "hail damage repair Clearfield UT",
    "paintless dent repair Clearfield",
    "hail repair Layton UT",
    "mobile hail repair Davis County",
    "car hail damage Ogden",
    "hail dent repair Syracuse UT",
    "Hill AFB hail repair",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Hail Damage Repair in Clearfield, UT | Xtreme Collision",
    description,
    url: pageUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hail-paintless-dent-repair-clearfield-ut.webp",
        width: 758,
        height: 500,
        alt: "Xtreme Collision technician performing paintless dent repair on hail damage",
      },
    ],
  },
};

const dayNames: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

function to24Hour(time: string) {
  const match = /^(\d{1,2}):(\d{2})(am|pm)$/.exec(time.trim());
  if (!match) throw new Error(`Unrecognized time "${time}"`);
  const [, hour, minute, meridiem] = match;
  const hour24 = (Number(hour) % 12) + (meridiem === "pm" ? 12 : 0);
  return `${String(hour24).padStart(2, "0")}:${minute}`;
}

const openingHoursSpecification = clearfield.hours
  .filter((row) => row.hours !== "Closed")
  .map((row) => {
    const [opens, closes] = row.hours.split(" - ").map(to24Hour);
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNames[row.day]}`,
      opens,
      closes,
    };
  });

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["AutoBodyShop", "LocalBusiness"],
    "@id": `${pageUrl}#business`,
    name: `${site.name} — Clearfield Hail Repair`,
    url: pageUrl,
    image: [
      `${site.url}/images/hail-paintless-dent-repair-clearfield-ut.webp`,
      `${site.url}/images/hail-damage-panel-repair-clearfield-ut.webp`,
    ],
    logo: `${site.url}/images/xtreme-logo.png`,
    description,
    telephone: clearfield.phone,
    priceRange: "$$",
    address: { "@type": "PostalAddress", ...clearfieldAddress },
    geo: { "@type": "GeoCoordinates", ...clearfieldGeo },
    hasMap: clearfield.mapEmbedSrc,
    openingHoursSpecification,
    areaServed: serviceAreaCities.map((city) => ({
      "@type": "City",
      name: `${city}, UT`,
    })),
    makesOffer: [
      "Hail damage repair",
      "Paintless dent repair",
      "Mobile hail damage inspection",
      "Hail insurance claim assistance",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hailFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function ClearfieldHailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader location={clearfield} />
      <main className="pb-16 md:pb-0">
        <HailHero />
        <HailStorms />
        <MobileHailService />
        <HailDamageGuide />
        <PdrSection />
        <HailClaims />
        <HailTrust />
        <NearbyAreas />

        <section className="bg-accent py-16 text-accent-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
                Caught in the Last Storm?
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-accent-foreground/85">
                Book a free hail inspection before shops and adjusters fill up.
                We&apos;ll come to you anywhere from Bountiful to Ogden.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={clearfield.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {clearfield.phone}
              </a>
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary bg-white/10 px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Free Inspection
              </a>
            </div>
          </div>
        </section>

        <HailFaq />
        <EstimateForm
          location={clearfield}
          form={clearfieldEstimateForm}
          eyebrow="Free Hail Inspection"
          heading="Book Your Free Hail Inspection"
          description="Tell us about your vehicle and where you'd like us to meet you. We'll confirm a time for an inspection at your home, work, or our Clearfield location at 665 N Main St."
        />
      </main>
      <SiteFooter location={clearfield} />
      <MobileBar location={clearfield} bookLabel="Inspection" />
    </>
  );
}
