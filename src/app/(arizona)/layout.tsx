import { ChatWidget } from "@/components/ChatWidget";
import { LeadConnectorTracking, numberPools } from "@/components/LeadConnectorTracking";

export default function ArizonaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeadConnectorTracking poolId={numberPools.phoenix} />
      {children}
      <ChatWidget />
    </>
  );
}
