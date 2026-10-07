import { ChatWidget } from "@/components/ChatWidget";
import { LeadConnectorTracking, numberPools } from "@/components/LeadConnectorTracking";
import { hailCities } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "@id": "https://www.xtremecollision.com/#business",
  name: "Xtreme Collision",
  url: "https://www.xtremecollision.com",
  image: [
    "https://www.xtremecollision.com/images/paintless-dent-repair-carrollton.webp",
    "https://www.xtremecollision.com/images/auto-body-panel-refinishing-carrollton.webp",
    "https://www.xtremecollision.com/images/collision-repair-technician-carrollton.webp",
  ],
  logo: "https://www.xtremecollision.com/images/xtreme-logo.png",
  description:
    "Expert collision repair in Carrollton, TX. Xtreme Collision works with all major insurance companies, offers a lifetime limited warranty, and repairs vehicles to factory standards.",
  telephone: "(972) 233-0207",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2025 Midway Road, Suite E",
    addressLocality: "Carrollton",
    addressRegion: "TX",
    postalCode: "75006",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9539,
    longitude: -96.8394,
  },
  areaServed: [
    { "@type": "City", name: "Carrollton" },
    { "@type": "City", name: "Addison" },
    { "@type": "City", name: "Dallas" },
    { "@type": "City", name: "Plano" },
    { "@type": "City", name: "Frisco" },
    { "@type": "City", name: "Richardson" },
    ...hailCities.map((entry) => ({
      "@type": "City" as const,
      name: entry.city,
    })),
  ],
  sameAs: [
    "https://www.facebook.com/XtremeCollisionRepair",
    "https://www.instagram.com/xtreme_collision/",
    "https://www.yelp.com/biz/xtreme-collision-repair-carrollton",
    "https://share.google/m0UgtxT4sFpzhDMIs",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1168",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <LeadConnectorTracking poolId={numberPools.carrollton} />
      {children}
      <ChatWidget />
    </>
  );
}
