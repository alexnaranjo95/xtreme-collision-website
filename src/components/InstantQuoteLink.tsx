"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import {
  FORWARDED_PARAMS,
  logQuoteClick,
  mergeAttributionFromUrl,
} from "@/lib/attribution";
import { instantQuoteUrl } from "@/lib/site";

function buildHref(): string {
  const { landing_path, ...params } = mergeAttributionFromUrl(
    window.location.search,
  );

  const url = new URL(instantQuoteUrl);
  for (const key of FORWARDED_PARAMS) {
    const value = params[key];
    if (value) url.searchParams.set(key, value);
  }
  url.searchParams.set("xc_lp", landing_path);
  return url.toString();
}

export function InstantQuoteLink({ className }: { className: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const payloadRef = useRef<
    ReturnType<typeof mergeAttributionFromUrl> | null
  >(null);

  useEffect(() => {
    const anchor = ref.current;
    if (!anchor) return;
    payloadRef.current = mergeAttributionFromUrl(window.location.search);
    anchor.href = buildHref();
  }, []);

  return (
    <a
      ref={ref}
      href={instantQuoteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        const payload =
          payloadRef.current ?? mergeAttributionFromUrl(window.location.search);
        logQuoteClick(payload);
      }}
    >
      Start My Instant Quote
      <ExternalLink className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
