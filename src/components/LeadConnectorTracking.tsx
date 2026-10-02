import Script from "next/script";

const LEADCONNECTOR_LOCATION_ID = "7265He95WmGfBaKz95x6";

/** Number pools for phone swapping, one per physical location. */
export const numberPools = {
  carrollton: "n9sMqLoOEpR6FQWJu9U5",
  clearfield: "DeLzDnijkE1c9Pce02cS",
} as const;

/** Call-tracking / session scripts — marketing pages only (not A2P chat). */
export function LeadConnectorTracking({ poolId }: { poolId: string }) {
  return (
    <>
      <Script
        src={`https://backend.leadconnectorhq.com/appengine/loc/${LEADCONNECTOR_LOCATION_ID}/pool/${poolId}/number_pool.js`}
        strategy="beforeInteractive"
      />
      <Script
        src="https://backend.leadconnectorhq.com/appengine/js/user_session.js"
        strategy="beforeInteractive"
      />
    </>
  );
}
