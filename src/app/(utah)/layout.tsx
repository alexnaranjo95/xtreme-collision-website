import { ChatWidget } from "@/components/ChatWidget";
import { GoogleTag } from "@/components/GoogleTag";
import { LeadConnectorTracking, numberPools } from "@/components/LeadConnectorTracking";
import { MetaPixel, metaPixels } from "@/components/MetaPixel";

export default function UtahLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeadConnectorTracking poolId={numberPools.clearfield} />
      <MetaPixel pixelId={metaPixels.utah} />
      <GoogleTag />
      {children}
      <ChatWidget />
    </>
  );
}
