"use client";

import { trackTelegramClick, trackViewContent } from "@/lib/pixel";

const trustBadges = [
  { icon: "🔞", label: "21+ Only" },
  { icon: "✅", label: "Verified Results" },
  { icon: "👥", label: "Growing Community" },
  { icon: "🏆", label: "Action Network" },
];

const risks = [
  "Free forever option available",
  "No credit card required",
  "Unsubscribe anytime, no penalties",
  "Growing community of data-driven bettors",
  "Verified track record — publicly auditable",
];

export default function FinalCTASection() {
  return (
    <section
      className="section"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 50% 50%, rgba(0,255,136,0.07) 0%, rgba(255,215,0,0.03) 40%, transparent 70%), var(--color-bg-2)",
        textAlign: "center",
      }}
      onMouseEnter={() => trackViewContent("Final CTA — Stop Losing Money on Guesswork")}
    >
      <div className="container" style={{ maxWidth: "700px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <span className="section-label" style={{ margin: "0 auto 24px" }}>
          🚀 Join Free Today
        </span>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(34px, 7vw, 58px)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: "20px",
            letterSpacing: "-0.02em",
          }}
        >
          Stop Losing Money
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00ff88, #00cc6a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            on Guesswork
          </span>
        </h2>

        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 19px)",
            color: "var(--color-muted)",
            marginBottom: "36px",
            lineHeight: 1.65,
          }}
        >
          Join our growing community of data-driven sports bettors who stopped gambling blind and started using{" "}
          <strong style={{ color: "var(--color-white)" }}>data-driven analysis</strong> to make smarter decisions.
        </p>

        {/* Risk reversal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "40px",
            alignItems: "flex-start",
            maxWidth: "340px",
            margin: "0 auto 40px",
          }}
        >
          {risks.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "var(--color-text)" }}>
              <span style={{ color: "var(--color-green)", fontSize: "16px" }}>✅</span>
              {r}
            </div>
          ))}
        </div>

        {/* CTA — final_cta (largest button on page, highest intent) */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <a
            id="final-cta"
            href="https://t.me/TKSportsAnalytics_Free"
            className="cta-button animate-pulse-glow"
            onClick={() => { trackTelegramClick("final_cta"); }}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "19px", padding: "26px 48px", maxWidth: "520px", letterSpacing: "0.01em" }}
          >
            🚀 JOIN FREE TELEGRAM NOW
          </a>
        </div>

        <p style={{ fontSize: "13px", color: "var(--color-muted-2)", marginBottom: "40px" }}>
          Opens Telegram instantly · No signup · No payment
        </p>

        {/* Trust badges */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          {trustBadges.map((b, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                padding: "8px 16px",
                borderRadius: "100px",
                fontSize: "13px",
                color: "var(--color-muted)",
                fontWeight: 500,
              }}
            >
              <span>{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
