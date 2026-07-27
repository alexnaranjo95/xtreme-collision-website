import { ChatWidget } from "@/components/ChatWidget";
import { LeadConnectorTracking } from "@/components/LeadConnectorTracking";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeadConnectorTracking />
      {children}
      <ChatWidget />
    </>
  );
}
