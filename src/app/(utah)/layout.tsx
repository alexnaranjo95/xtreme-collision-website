import { ChatWidget } from "@/components/ChatWidget";
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
      {children}
      <ChatWidget />
    </>
  );
}
