import type { Metadata } from "next";
import { HailLandingPage } from "@/components/HailLandingPage";
import {
  clearfield,
  clearfieldAddress,
  clearfieldGeo,
  clearfieldHailData,
  clearfieldPageUrl,
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
    mainEntity: clearfieldHailData.faq.items.map((faq) => ({
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
      <HailLandingPage data={clearfieldHailData} />
    </>
  );
}
