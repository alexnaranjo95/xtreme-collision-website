import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { type HailCity, hailCities, hailRepairPath, site } from "@/lib/site";

export function HailServiceArea({ city }: { city?: HailCity | null }) {
  return (
    <section id="hail-service-area" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hail Service Area
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance text-primary sm:text-4xl">
            Towns We Repair Hail Damage For
          </h2>
          <p className="mt-3 text-muted-foreground">
            All repairs are completed at our Carrollton facility, and your
            insurance-paid rental is arranged at drop-off.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hailCities.map((entry) => {
            const isCurrent = entry.slug === city?.slug;
            const label = `${entry.city}, TX ${entry.zip}`;

            return (
              <li key={entry.slug}>
                {isCurrent ? (
                  <div
                    aria-current="page"
                    className="flex h-full items-start gap-4 rounded-xl border-2 border-accent bg-card p-6 shadow-sm"
                  >
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {entry.county} · You are here
                      </p>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={`${hailRepairPath}/${entry.slug}`}
                    className="group flex h-full items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                  >
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {entry.county}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                        Hail repair in {entry.city}
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                )}
              </li>
            );
          })}

          <li>
            <div className="flex h-full items-start gap-4 rounded-xl border border-dashed border-border bg-card/60 p-6">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
              <div>
                <p className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                  Not on the list?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We also serve {site.areas}. Call {site.phone} and we will tell
                  you straight whether we can help.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
