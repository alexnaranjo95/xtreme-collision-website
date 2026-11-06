import Script from "next/script";

/** Meta dataset owned by the Xtreme Collision Utah ad account. */
export const metaPixels = {
  utah: "1035191289531131",
} as const;

/**
 * Meta pixel with PageView plus the CONTACT custom event the hail ad sets
 * optimize for (`custom_event_type: CONTACT`). Fires on:
 *   1. any tel: link tap, and
 *   2. a LeadConnector form submit — the submit happens inside a cross-origin
 *      iframe, so it can only be detected from the parent via the
 *      `set-sticky-contacts` postMessage that form_embed.js emits when a
 *      contact is created (position 2 is the JSON lead payload).
 */
export function MetaPixel({ pixelId }: { pixelId: string }) {
  return (
    <>
      <Script id={`meta-pixel-${pixelId}`} strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');
fbq('track','PageView');

/** CONTACT is the custom event the hail ad sets optimize for. */
function reportContact(contentName){
  try {
    fbq('trackCustom','CONTACT',{content_name:contentName});
  } catch (err) {
    try { fbq('track','Contact',{content_name:contentName}); } catch (e2) {}
  }
}

document.addEventListener('click',function(e){
  var a=e.target&&e.target.closest&&e.target.closest('a[href^="tel:"]');
  if(a)reportContact('phone_call');
},true);

window.addEventListener('message',function(e){
  var d=e.data;
  if(!Array.isArray(d)||d[0]!=='set-sticky-contacts')return;
  var v=d[2];
  if(typeof v==='string'&&v.trim().charAt(0)==='{'){
    try { JSON.parse(v); } catch(_){ return; }
    reportContact('lead_form');
  }
});`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
