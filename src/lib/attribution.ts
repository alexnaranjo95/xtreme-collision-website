import { quoteClickEndpoint } from "@/lib/site";

/** Ad parameters we forward to Tractable and log on outbound quote clicks. */
export const FORWARDED_PARAMS = [
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
] as const;

export const ATTRIBUTION_STORAGE_KEY = "xc_ad_attribution";

export type AttributionParams = Partial<
  Record<(typeof FORWARDED_PARAMS)[number], string>
>;

export function readStoredAttribution(): AttributionParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AttributionParams) : {};
  } catch {
    return {};
  }
}

export function mergeAttributionFromUrl(
  search: string,
): AttributionParams & { landing_path: string } {
  const current = new URLSearchParams(search);
  const fresh: AttributionParams = {};
  for (const key of FORWARDED_PARAMS) {
    const value = current.get(key);
    if (value) fresh[key] = value;
  }

  const merged =
    Object.keys(fresh).length > 0 ? fresh : readStoredAttribution();

  if (typeof window !== "undefined" && Object.keys(merged).length > 0) {
    try {
      window.sessionStorage.setItem(
        ATTRIBUTION_STORAGE_KEY,
        JSON.stringify(merged),
      );
    } catch {
      // Private browsing blocks writes; forwarding still works for this click.
    }
  }

  return {
    ...merged,
    landing_path:
      typeof window !== "undefined" ? window.location.pathname : "/",
  };
}

/** Fire-and-forget click log before the visitor leaves for Tractable. */
export function logQuoteClick(payload: AttributionParams & { landing_path: string }) {
  if (typeof navigator === "undefined") return;
  const body = JSON.stringify(payload);
  const sent =
    typeof navigator.sendBeacon === "function" &&
    navigator.sendBeacon(
      quoteClickEndpoint,
      new Blob([body], { type: "text/plain" }),
    );
  if (!sent) {
    void fetch(quoteClickEndpoint, {
      method: "POST",
      body,
      headers: { "Content-Type": "text/plain" },
      keepalive: true,
    });
  }
}
