import Script from "next/script";

/** LeadConnector chat — load only on pages with no competing phone/SMS forms. */
export function ChatWidget() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      strategy="afterInteractive"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a5e8137c40835bdcd3e77b9"
      data-source="WEB_USER"
    />
  );
}
