import { CalendarCheck, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href="#estimate"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-bold uppercase tracking-wide text-accent-foreground"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Book
        </a>
      </div>
    </div>
  );
}
