import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HailLanding } from "@/components/HailLanding";
import { findHailCity, hailCities, hailRepairPath } from "@/lib/site";

/** Only the towns our hail campaigns target get a page; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams() {
  return hailCities.map((entry) => ({ city: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = findHailCity(slug);

  if (!city) {
    return {};
  }

  const where = `${city.city}, TX`;
  const title = `Hail Damage Repair in ${where} ${city.zip} | Xtreme Collision`;
  const description = `Hail damage and paintless dent repair for ${where} drivers. We handle the insurance claim, arrange your insurance-paid rental at drop-off, and keep your factory paint. Free estimate.`;

  return {
    title,
    description,
    keywords: [
      `hail damage repair ${city.city} TX`,
      `paintless dent repair ${city.city}`,
      `hail repair ${city.zip}`,
      `auto hail damage ${city.county}`,
      `hail damage insurance claim ${city.city}`,
    ],
    alternates: {
      canonical: `${hailRepairPath}/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.xtremecollision.com${hailRepairPath}/${city.slug}`,
      siteName: "Xtreme Collision",
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function HailCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = findHailCity(slug);

  if (!city) {
    notFound();
  }

  return <HailLanding city={city} />;
}
