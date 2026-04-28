"use client";

import { trackTelegramClick, trackViewContent } from "@/lib/pixel";

const benefits = [
  {
    icon: "📊",
    title: "DAILY PREDICTIONS",
    desc: "Real-time sports picks across MLB, NFL, NBA, NCAAF, and NCAAB — based on quantitative models and syndicate data.",
    color: "#00ff88",
  },
  {
    icon: "🧠",
    title: "EXPERT ANALYSIS",
    desc: "30+ years of professional sports betting experience combined with syndicate intelligence and proprietary modeling.",
    color: "#ffd700",
  },
  {
    icon: "📈",
    title: "VERIFIED TRACK RECORD",
    desc: "Every single result tracked publicly. No locks. No hype. Just transparent data you can audit yourself on Action Network.",
    color: "#00ff88",
  },
  {
    icon: "💬",
    title: "PRIVATE COMMUNITY",
    desc: "Join 2,000+ members in our exclusive Telegram channel. Ask questions, share insights, and learn together.",
    color: "#ffd700",
  },
  {
    icon: "⚡",
    title: "INSTANT ALERTS",
    desc: "Get push notifications the second a play is released. Never miss an opportunity to lock in the best line before it moves.",
    color: "#00ff88",
  },
  {
    icon: "🎯",
    title: "BANKROLL MANAGEMENT",
    desc: "Every prediction includes precise unit sizing recommendations. Protect your bankroll and compound your profits systematically.",
    color: "#ffd700",
  },
];

export default function WhatYouGetSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--color-bg)" }}
      onMouseEnter={() => trackViewContent("Benefits — What You Get For Free")}
    >
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">🎁 Free Access</span>
          <h2 className="section-title">
            Join Free. Get Immediate
            <br />
            <span className="green">Access To:</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            No email. No credit card. Just click and get instant access to everything below.
          </p>
        </div>

        {/* Benefit cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginBottom: "52px",
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className="card"
              style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
                padding: "32px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "80px",
                  height: "80px",
                  background: `radial-gradient(circle at top right, ${b.color}12, transparent 70%)`,
                }}
              />
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: `rgba(${b.color === "#00ff88" ? "0,255,136" : "255,215,0"},0.08)`,
                  border: `1px solid ${b.color}25`,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "18px",
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: b.color,
                  marginBottom: "10px",
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--color-muted)", lineHeight: 1.7 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA — benefits_section_cta */}
        <div style={{ textAlign: "center" }}>
          <a
            id="benefits-cta"
            href="https://t.me/TKSportsAnalytics_Free"
            className="cta-button"
            onClick={() => trackTelegramClick("benefits_section_cta")}
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 auto" }}
          >
            🚀 GET FREE ACCESS NOW
          </a>
          <p style={{ marginTop: "14px", fontSize: "13px", color: "var(--color-muted-2)" }}>
            Opens Telegram instantly · No signup form
          </p>
        </div>
      </div>
    </section>
  );
}
