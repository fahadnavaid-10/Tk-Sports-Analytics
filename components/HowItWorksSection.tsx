"use client";

import { trackTelegramClick, trackViewContent } from "@/lib/pixel";

const steps = [
  {
    number: "01",
    icon: "⚡",
    title: "Click Join Free Telegram",
    desc: "No signup form. No email required. One tap and you're inside instantly. Opens directly in the Telegram app on mobile.",
    detail: "~5 seconds",
  },
  {
    number: "02",
    icon: "📲",
    title: "Start Receiving Picks",
    desc: "Daily predictions delivered in real-time. Unit sizing included with every pick. MLB, NFL, NBA, NCAAF, NCAAB.",
    detail: "Real-time alerts",
  },
  {
    number: "03",
    icon: "💰",
    title: "Upgrade When Ready",
    desc: "Love the free picks? Unlock premium insights, detailed analysis, and exclusive plays starting at just $35/week.",
    detail: "100% optional",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      className="section"
      style={{
        background:
          "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,215,0,0.04) 0%, transparent 70%), var(--color-bg-2)",
      }}
      onMouseEnter={() => trackViewContent("How It Works — 60 Second Setup")}
    >
      <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">⚙️ How It Works</span>
          <h2 className="section-title">
            Get Started in{" "}
            <span className="green">60 Seconds</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            No complicated onboarding. No forms to fill out. One click and you&apos;re in.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "52px" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="card"
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                padding: "28px",
                background: "var(--color-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  background: i === 2
                    ? "linear-gradient(to bottom, #ffd700, #c9a800)"
                    : "linear-gradient(to bottom, #00ff88, #00cc6a)",
                }}
              />
              <div
                className="step-number"
                style={{
                  background: i === 2 ? "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05))" : undefined,
                  border: i === 2 ? "1px solid rgba(255,215,0,0.25)" : undefined,
                  color: i === 2 ? "#ffd700" : undefined,
                }}
              >
                {step.number}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "var(--color-white)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>{step.icon}</span> {step.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: i === 2 ? "var(--color-gold)" : "var(--color-green)",
                      background: i === 2 ? "rgba(255,215,0,0.08)" : "rgba(0,255,136,0.08)",
                      border: `1px solid ${i === 2 ? "rgba(255,215,0,0.2)" : "rgba(0,255,136,0.2)"}`,
                      padding: "3px 10px",
                      borderRadius: "100px",
                      fontWeight: 600,
                    }}
                  >
                    {step.detail}
                  </span>
                </div>
                <p style={{ color: "var(--color-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — how_it_works_cta */}
        <div style={{ textAlign: "center" }}>
          <a
            id="how-it-works-cta"
            href="https://t.me/TKSportsAnalytics_Free"
            className="cta-button"
            onClick={() => trackTelegramClick("how_it_works_cta")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 auto" }}
          >
            🚀 JOIN 2,000+ MEMBERS FREE
          </a>
          <p style={{ marginTop: "14px", fontSize: "13px", color: "var(--color-muted-2)" }}>
            Instant access · No forms · No payment required
          </p>
        </div>
      </div>
    </section>
  );
}
