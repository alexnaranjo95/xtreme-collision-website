import { CertCarousel } from "@/components/CertCarousel";
import { CtaBanner } from "@/components/CtaBanner";
import { EstimateForm } from "@/components/EstimateForm";
import { Hero } from "@/components/Hero";
import { Insurance } from "@/components/Insurance";
import { MobileBar } from "@/components/MobileBar";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialProofBar } from "@/components/SocialProofBar";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        <Hero />
        <SocialProofBar />
        <CertCarousel />
        <Stats />
        <Services />
        <Process />
        <Insurance />
        <WhyUs />
        <Reviews />
        <CtaBanner />
        <EstimateForm />
      </main>
      <SiteFooter />
      <MobileBar />
    </>
  );
}
