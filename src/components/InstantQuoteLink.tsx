"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { instantQuoteUrl } from "@/lib/site";

/**
 * Ad parameters worth carrying into Tractable. Its landing page keeps the query
 * string in the form's POST action, so anything appended here reaches Tractable
 * at the moment the customer submits their details.
 *
 * gclid/gbraid/wbraid matter most: the account books offline conversions via
 * UPLOAD_CLICKS actions, which can only attribute a won job back to the click
 * that produced it if the gclid survives the handoff.
 */
const FORWARDED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "gad_campaignid",
  "gad_source",
  "msclkid",
  "fbclid",
];

/**
 * Visitors often land on a city page from an ad and then click through to the
 * quote from somewhere else on the site, so the first-touch parameters are kept
 * for the session rather than read only from the current URL.
 */
const STORAGE_KEY = "xc_ad_attribution";

function readStored(): Record<string, string> {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function buildHref(): string {
  const current = new URLSearchParams(window.location.search);
  const fresh: Record<string, string> = {};
  for (const key of FORWARDED_PARAMS) {
    const value = current.get(key);
    if (value) fresh[key] = value;
  }

  // A newer ad click supersedes whatever the session was carrying.
  const merged =
    Object.keys(fresh).length > 0 ? fresh : readStored();

  if (Object.keys(merged).length > 0) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      // Private browsing blocks writes; forwarding still works for this click.
    }
  }

  const url = new URL(instantQuoteUrl);
  for (const [key, value] of Object.entries(merged)) {
    url.searchParams.set(key, value);
  }
  // Which page sent them, so per-city performance stays attributable.
  url.searchParams.set("xc_lp", window.location.pathname);
  return url.toString();
}

export function InstantQuoteLink({ className }: { className: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  // Rewriting the node directly keeps the server and client markup identical,
  // so the link still works untouched if JS never runs.
  useEffect(() => {
    const anchor = ref.current;
    if (anchor) anchor.href = buildHref();
  }, []);

  return (
    <a
      ref={ref}
      href={instantQuoteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Start My Instant Quote
      <ExternalLink className="h-5 w-5" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
