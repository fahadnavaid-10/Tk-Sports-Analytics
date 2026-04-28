"use client";

import { useEffect, useState } from "react";
import { trackTelegramClick } from "@/lib/pixel";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed) {
        setVisible(true);
        setDismissed(true);
      }
    };

    // Show after 10 seconds for ALL visitors
    const timer = setTimeout(() => {
      if (!dismissed) {
        setVisible(true);
        setDismissed(true);
      }
    }, 10000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div
      className="exit-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setVisible(false);
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Special offer"
    >
      <div className="exit-popup">
        <button
          className="exit-close"
          onClick={() => setVisible(false)}
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Icon */}
        <div
          style={{
            width: "56px",
            height: "56px",
            background: "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,255,136,0.05))",
            border: "1px solid rgba(0,255,136,0.25)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            margin: "0 auto 16px",
          }}
        >
          📲
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--color-gold)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Wait! Before You Go...
        </div>

        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(18px, 5vw, 22px)",
            fontWeight: 900,
            color: "var(--color-white)",
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          Get Your First FREE Pick
          <br />
          <span style={{ color: "var(--color-green)" }}>In the Next 10 Minutes</span>
        </h3>

        <p
          style={{
            fontSize: "clamp(13px, 3vw, 14px)",
            color: "var(--color-muted)",
            marginBottom: "22px",
            lineHeight: 1.6,
          }}
        >
          Join 2,000+ members already receiving daily data-driven picks.
          No credit card. No email. Instant access.
        </p>

        {/* CTA — exit_intent_popup_cta */}
        <a
          id="popup-cta"
          href="https://t.me/TKSportsAnalytics_Free"
          className="cta-button"
          onClick={() => {
            window.fbq?.('track', 'Lead'); trackTelegramClick("exit_intent_popup_cta");
            setVisible(false);
          }}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "clamp(14px, 3vw, 16px)", padding: "16px 24px" }}
        >
          🚀 JOIN FREE TELEGRAM
        </a>

        <p style={{ marginTop: "10px", fontSize: "12px", color: "var(--color-muted-2)" }}>
          No credit card required
        </p>

        <button
          onClick={() => setVisible(false)}
          style={{
            marginTop: "12px",
            fontSize: "12px",
            color: "var(--color-muted-2)",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
            fontFamily: "var(--font-body)",
          }}
        >
          No thanks, I&apos;ll keep guessing
        </button>
      </div>
    </div>
  );
}
