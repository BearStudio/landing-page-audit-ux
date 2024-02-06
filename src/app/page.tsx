"use client";
import CTASection1 from "@/components/CTASection1";
import CTASection2 from "@/components/CTASection2";
import DeliverableSection from "@/components/Deliverable";
import FAQSection from "@/components/Faq";
import UXMatterSection from "@/components/UXMatter";
import FeatureSection from "@/components/feature";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <UXMatterSection />
      <FeatureSection />
      <CTASection1 />
      <DeliverableSection />
      <CTASection2 />
      <FAQSection />
      <FooterSection />
    </>
  );
}
