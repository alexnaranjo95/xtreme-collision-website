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
  /** Conversion action: ML Website Lead Form (id 7694823965). */
  websiteLeadForm: "5EtTCJ3kltUcENawqNc9",
  /** Conversion action: ML Google Lead Form (id 7695168630). */
  googleLeadForm: "UcxsCPboq9UcENawqNc9",
} as const;

/**
 * Google tag loader plus click tracking.
 *
 * - Loads the sitewide gtag.js for the Google Ads account.
 * - Fires a `conversion` when a `tel:` link is tapped.
 * - Fires a `conversion` when a form is submitted (covers the embedded
 *   LeadConnector / Tractable estimate forms via event delegation).
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

document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest && e.target.closest('a[href^="tel:"]');
  if (a) gtagReportConversion('${googleAdsConversionLabels.websiteLeadForm}');
}, true);

document.addEventListener('submit', function () {
  gtagReportConversion('${googleAdsConversionLabels.googleLeadForm}');
}, true);`}
      </Script>
    </>
  );
}
