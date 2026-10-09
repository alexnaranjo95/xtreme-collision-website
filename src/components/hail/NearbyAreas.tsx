import { MapPin } from "lucide-react";
import { clearfieldGeo, nearbyAreas } from "@/lib/clearfield";

const EARTH_RADIUS_MILES = 3958.8;

function milesFromShop(lat: number, lng: number) {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat - clearfieldGeo.latitude);
  const dLng = toRad(lng - clearfieldGeo.longitude);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(clearfieldGeo.latitude)) * Math.cos(toRad(lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_MILES * Math.asin(Math.sqrt(a));
}

function distanceLabel(miles: number) {
  return miles < 1 ? "Under 1 mi away" : `About ${Math.round(miles)} mi away`;
}

export function NearbyAreas() {
  return (
    <section id="near-you" className="scroll-mt-28 bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hail Repair Near You
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Your Neighborhood Hail Shop
          </h2>
          <p className="mt-3 text-muted-foreground">
            From Kaysville to Ogden, we&apos;re a short drive from your driveway
            — and our mobile unit can come to you.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyAreas.map((area) => (
            <li
              key={area.city}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                  {area.city}, UT
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {distanceLabel(milesFromShop(area.lat, area.lng))}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="#estimate"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book a free hail inspection near you
          </a>
        </div>
      </div>
    </section>
  );
}
