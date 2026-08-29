import type { Metadata } from "next";
import { HailLanding } from "@/components/HailLanding";
import { hailCities, joinCityNames } from "@/lib/site";

const cityList = joinCityNames();

export const metadata: Metadata = {
  title: `Hail Damage Repair in ${cityList} | Xtreme Collision`,
  description: `Hail damage repair and paintless dent repair for ${cityList}. We handle the insurance claim, arrange your insurance-paid rental, and keep your factory paint. Free estimate.`,
  keywords: [
    "hail damage repair North Texas",
    "paintless dent repair",
    "hail damage insurance claim",
    ...hailCities.map((entry) => `hail damage repair ${entry.city} TX`),
  ],
  alternates: {
    canonical: "/hail-damage-repair",
  },
  openGraph: {
    title: `Hail Damage Repair in ${cityList} | Xtreme Collision`,
    description: `Paintless hail repair with the claim handled for you and an insurance-paid rental arranged at drop-off. Serving ${cityList}.`,
    url: "https://www.xtremecollision.com/hail-damage-repair",
    siteName: "Xtreme Collision",
    locale: "en_US",
    type: "website",
  },
};

export default function HailDamageRepairPage() {
  return <HailLanding />;
}
