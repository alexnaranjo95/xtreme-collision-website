import Script from "next/script";

/**
 * Google Ads tag for the Xtreme Collision Repair account (164-612-3309).
 * Without this tag the account reports "Tag stopped sending data" and the
 * `ML Website Lead Form` / `ML Google Lead Form` conversion actions never fire.
 */
export const googleAdsTagId = "AW-16557676630";

/**
 * Conversion labels, taken from each conversion action's event snippet.
 * `send_to` is `<tag id>/<label>`.
 */
export const googleAdsConversionLabels = {
  /** Conversion action: ML Website Lead Form (id 7694823965) — phone taps. */
  websiteLeadForm: "5EtTCJ3kltUcENawqNc9",
  /** Conversion action: ML Google Lead Form (id 7695168630) — form / quote leads. */
  googleLeadForm: "UcxsCPboq9UcENawqNc9",
} as const;

/**
 * Google tag loader plus lead tracking.
 *
 * - Loads the sitewide gtag.js for the Google Ads account.
 * - Fires `websiteLeadForm` when a `tel:` link is tapped.
 * - Fires `googleLeadForm` when a lead is captured through one of the three
 *   real lead paths:
 *   1. a same-origin form submit (fallback), and
 *   2. the LeadConnector estimate form — the submit happens inside a
 *      cross-origin iframe, so it can only be detected from the parent via the
 *      `set-sticky-contacts` postMessage that `form_embed.js` emits when a
 *      contact is created, and
 *   3. the Tractable instant-quote link (outbound to tractable.io).
 */
export function GoogleTag() {
  return (
    <>
      <Script
        id="google-ads-tag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsTagId}`}
      />
      <Script id="google-ads-tag-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAdsTagId}');

/** Fire a Google Ads conversion without blocking the action being tracked. */
function gtagReportConversion(sendTo) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: '${googleAdsTagId}/' + sendTo });
}
window.gtagReportConversion = gtagReportConversion;

/** True when a value looks like a JSON object (LeadConnector lead payload). */
function isJsonObject(value) {
  if (typeof value !== 'string') return false;
  var text = value.trim();
  if (text.charAt(0) !== '{') return false;
  try { JSON.parse(text); return true; } catch (_) { return false; }
}

document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest && e.target.closest('a[href]');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  if (href.indexOf('tel:') === 0) {
    gtagReportConversion('${googleAdsConversionLabels.websiteLeadForm}');
  } else if (href.indexOf('tractable.io') !== -1) {
    gtagReportConversion('${googleAdsConversionLabels.googleLeadForm}');
  }
}, true);

/** Same-origin form submits (covers any non-iframe form). */
document.addEventListener('submit', function () {
  gtagReportConversion('${googleAdsConversionLabels.googleLeadForm}');
}, true);

/**
 * LeadConnector forms submit inside a cross-origin iframe, so the parent page
 * never sees their submit event. The form_embed.js script (loaded with the
 * estimate form) posts a "set-sticky-contacts" message to window.parent when
 * a contact is created; position 2 is the lead payload (JSON) for real leads,
 * or a plain iframe id during init. Count only the former.
 */
window.addEventListener('message', function (e) {
  var d = e.data;
  if (!Array.isArray(d) || d[0] !== 'set-sticky-contacts') return;
  if (isJsonObject(d[2])) {
    gtagReportConversion('${googleAdsConversionLabels.googleLeadForm}');
  }
});`}
      </Script>
    </>
  );
}
