"use client";

import { trackTelegramClick } from "@/lib/pixel";

export default function MobileStickyCTA() {
  return (
    <>
      <div className="mobile-sticky-cta">
        <a
          href="https://t.me/TKSportsAnalytics_Free"
          onClick={() => { window.fbq?.('track', 'Lead'); trackTelegramClick("mobile_sticky_cta"); }}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            background: "linear-gradient(135deg, #00ff88, #00e57a)",
            color: "#000",
            fontFamily: "var(--font-heading)",
            fontSize: "16px",
            fontWeight: 800,
            padding: "16px",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.5)",
            textDecoration: "none",
            letterSpacing: "0.02em",
            borderTop: "1px solid rgba(0,255,136,0.3)",
          }}
        >
          🚀 JOIN FREE TELEGRAM
        </a>
      </div>
      <style>{`
        .mobile-sticky-cta {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;
        }
        @media (max-width: 768px) {
          .mobile-sticky-cta {
            display: block;
          }
          /* Add padding to footer to prevent content from hiding behind the sticky CTA */
          footer {
            padding-bottom: 80px !important;
          }
        }
      `}</style>
    </>
  );
}
