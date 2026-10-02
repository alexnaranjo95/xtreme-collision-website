import { ChatWidget } from "@/components/ChatWidget";
import { LeadConnectorTracking, numberPools } from "@/components/LeadConnectorTracking";

export default function UtahLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeadConnectorTracking poolId={numberPools.clearfield} />
      {children}
      <ChatWidget />
    </>
  );
}
