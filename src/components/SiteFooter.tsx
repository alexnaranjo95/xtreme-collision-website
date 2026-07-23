import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.174 2.097 16.023 2 14.809 2 12.02 2 10 3.657 10 6.7V9.5H7.5v4H10V22h4z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

function YelpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.16 12.574l-4.92.907a.89.89 0 0 1-1.06-.98l.91-5.1a.89.89 0 0 1 1.49-.51l3.62 3.23a.89.89 0 0 1-.04 1.453zm-6.29 1.74l2.14 4.53a.89.89 0 0 1-1.25 1.16l-4.32-2.53a.89.89 0 0 1-.05-1.52l3.08-1.95a.89.89 0 0 1 .4-.12zM9.05 12.03L5.48 9.93a.89.89 0 0 1 .18-1.63l4.98-1.36a.89.89 0 0 1 1.08.84l.2 5.18a.89.89 0 0 1-1.37.77zm-.77 2.53l-3.7 2.02a.89.89 0 0 0 .1 1.6l4.7 1.95a.89.89 0 0 0 1.2-1.05l-1.17-4.12a.89.89 0 0 0-1.13-.4zM13.06 2.2l-.86 4.94a.89.89 0 0 1-1.37.62L6.6 5.05a.89.89 0 0 1 .2-1.58l4.95-1.72a.89.89 0 0 1 1.31.45z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Image
            src="/images/xtreme-logo.png"
            alt={site.name}
            width={203}
            height={68}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            5-star auto body &amp; collision repair serving {site.areas} and
            surrounding areas.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Xtreme Collision on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Xtreme Collision on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.yelp}
              target="_blank"
              rel="noreferrer"
              aria-label="Xtreme Collision on Yelp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <YelpIcon className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-6 space-y-2 text-sm text-primary-foreground/80">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {site.phone}
            </a>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {site.address}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">
            Business Hours
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {site.hours.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between gap-4 border-b border-primary-foreground/10 pb-2 last:border-0"
              >
                <span className="font-medium text-primary-foreground/90">
                  {row.day}
                </span>
                <span className="text-primary-foreground/70">{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src="/images/shop-location-carrollton.png"
              alt="Xtreme Collision auto body and collision repair shop location in Carrollton"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
          <h3 className="font-heading text-lg font-semibold uppercase tracking-wide">
            Ready to get started?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
            Get your free estimate today and let our certified team get you back
            on the road.
          </p>
          <a
            href="/#estimate"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Schedule An Appointment
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl px-4 py-5 text-xs text-primary-foreground/55">
          © {new Date().getFullYear()} {site.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
