import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import CredibilitySection from "@/components/CredibilitySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <StickyNav />

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Divider */}
        <div className="divider" />

        {/* Section 2: Social Proof & Verified Results */}
        <div id="results">
          <SocialProofSection />
        </div>

        <div className="divider" />

        {/* Section 4: The Numbers / Credibility */}
        <div id="stats">
          <CredibilitySection />
        </div>

        <div className="divider" />

        {/* Section 3: What You Get */}
        <div id="benefits">
          <WhatYouGetSection />
        </div>



        <div className="divider" />

        {/* Section 5: How It Works */}
        <HowItWorksSection />

        <div className="divider" />

        {/* Section 6: FAQ */}
        <div id="faq">
          <FAQSection />
        </div>

        <div className="divider" />

        {/* Section 7: Final CTA */}
        <FinalCTASection />
      </main>

      {/* Section 8: Footer */}
      <Footer />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
    </>
  );
}
