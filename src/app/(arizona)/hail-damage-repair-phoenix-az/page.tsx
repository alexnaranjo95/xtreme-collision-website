import type { Metadata } from "next";
import { HailLandingPage } from "@/components/HailLandingPage";
import { phoenix, phoenixGeo, phoenixHailData, phoenixPageUrl, phoenixServiceAreaCities } from "@/lib/phoenix";
import { site } from "@/lib/site";

const description =
  "Hail damage repair in Phoenix, AZ after the October 21 hailstorm. Free mobile inspections across the Valley, paintless dent repair, and full insurance claim help.";

export const metadata: Metadata = {
  title: "Hail Damage Repair Phoenix, AZ | Paintless Dent Repair | Xtreme Collision",
  description,
  keywords: [
    "hail damage repair Phoenix AZ",
    "paintless dent repair Phoenix",
    "Phoenix hailstorm repair October 2026",
    "hail repair Glendale AZ",
    "mobile hail repair Peoria",
    "car hail damage Scottsdale",
    "hail dent repair Tempe Mesa",
  ],
  alternates: {
    canonical: phoenixPageUrl,
  },
  openGraph: {
    title: "Hail Damage Repair in Phoenix, AZ | Xtreme Collision",
    description,
    url: phoenixPageUrl,
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

function jsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["AutoBodyShop", "LocalBusiness"],
      "@id": `${phoenixPageUrl}#business`,
      name: `${site.name} — Phoenix Hail Repair`,
      url: phoenixPageUrl,
      image: [
        `${site.url}/images/hail-paintless-dent-repair-clearfield-ut.webp`,
        `${site.url}/images/hail-damage-panel-repair-clearfield-ut.webp`,
      ],
      logo: `${site.url}/images/xtreme-logo.png`,
      description,
      telephone: phoenix.phone,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Phoenix",
        addressRegion: "AZ",
        postalCode: "85021",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", ...phoenixGeo },
      areaServed: phoenixServiceAreaCities.map((city) => ({
        "@type": "City",
        name: `${city}, AZ`,
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
      mainEntity: phoenixHailData.faq.items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}

export default function PhoenixHailPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()).replace(/</g, "\\u003c") }}
      />
      <HailLandingPage data={phoenixHailData} />
    </>
  );
}
