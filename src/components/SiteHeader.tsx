import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-xs sm:flex-row sm:text-sm">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-medium transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Call Us Today! {site.phone}</span>
          </a>
          <span className="flex items-center gap-2 whitespace-nowrap text-primary-foreground/80">
            <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            {site.address}
          </span>
        </div>
      </div>

      <div className="border-b border-border/70 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur supports-[backdrop-filter]:bg-white/88">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a
            href="#top"
            className="rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-border/70 transition-transform hover:scale-[1.01]"
            aria-label={site.name}
          >
            <Image
              src="/images/xtreme-logo.png"
              alt={site.name}
              width={209}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-base font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
