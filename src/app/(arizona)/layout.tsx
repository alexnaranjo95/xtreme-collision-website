import { ChatWidget } from "@/components/ChatWidget";
import { GoogleTag } from "@/components/GoogleTag";
import { LeadConnectorTracking, numberPools } from "@/components/LeadConnectorTracking";
import { MetaPixel, metaPixels } from "@/components/MetaPixel";

export default function ArizonaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeadConnectorTracking poolId={numberPools.phoenix} />
      <MetaPixel pixelId={metaPixels.phoenix} />
      <GoogleTag />
      {children}
      <ChatWidget />
    </>
  );
}
