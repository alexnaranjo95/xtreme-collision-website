import Script from "next/script";

/** Call-tracking / session scripts — marketing pages only (not A2P chat). */
export function LeadConnectorTracking() {
  return (
    <>
      <Script
        src="https://backend.leadconnectorhq.com/appengine/loc/7265He95WmGfBaKz95x6/pool/n9sMqLoOEpR6FQWJu9U5/number_pool.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://backend.leadconnectorhq.com/appengine/js/user_session.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
