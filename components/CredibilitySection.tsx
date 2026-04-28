"use client";

import { trackViewContent } from "@/lib/pixel";

const statsGrid = [
  { value: "+465", label: "Units All Time", color: "var(--color-green)" },
  { value: "1,173", label: "Total Wins", color: "var(--color-gold)" },
  { value: "9%", label: "ROI", color: "var(--color-green)" },
  { value: "55%", label: "Win Rate", color: "var(--color-gold)" },
];

const sportRows = [
  { sport: "⚾ MLB", units: "+119", record: "240-201-5", roi: "12.8%" },
  { sport: "🏈 NFL", units: "+80", record: "175-127-1", roi: "8.1%" },
  { sport: "🏈 NCAAF", units: "+92", record: "79-41-0", roi: "18.5%" },
  { sport: "🏀 NCAAB", units: "+135", record: "513-437-5", roi: "6.2%" },
  { sport: "🏀 NBA", units: "+38", record: "166-137-2", roi: "5.1%" },
];

export default function CredibilitySection() {
  return (
    <section
      className="section"
      style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,255,136,0.04) 0%, transparent 70%), var(--color-bg-2)" }}
      onMouseEnter={() => trackViewContent("Credibility — Verified Numbers")}
    >
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">📉 The Numbers</span>
          <h2 className="section-title">
            Verified Performance Across
            <br />
            <span className="gold">All Major Sports</span>
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Every number publicly auditable on The Action Network.
            These are real results — not cherry-picked highlights.
          </p>
        </div>

        {/* Big stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            background: "var(--color-border)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            marginBottom: "40px",
          }}
        >
          {statsGrid.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--color-card)",
                padding: "36px 20px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 50% 0%, ${s.color}0a, transparent 60%)`,
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(36px, 7vw, 56px)",
                  fontWeight: 700,
                  color: s.color,
                  lineHeight: 1,
                  marginBottom: "10px",
                  position: "relative",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--color-muted)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-mono)",
                  position: "relative",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Sport breakdown table */}
        <div
          className="card"
          style={{
            padding: "0",
            overflow: "hidden",
            background: "var(--color-card)",
          }}
        >
          {/* Table header bar */}
          <div
            style={{
              padding: "20px 24px",
              borderBottom: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--color-muted)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Sport-by-Sport Breakdown
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "var(--color-green)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span className="live-dot" />
              Live Data
            </span>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="sport-table">
              <thead>
                <tr>
                  <th>Sport</th>
                  <th>Units</th>
                  <th>Record (W-L-P)</th>
                  <th>ROI</th>
                </tr>
              </thead>
              <tbody>
                {sportRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600, color: "var(--color-white)" }}>
                      {row.sport}
                    </td>
                    <td className="positive">{row.units}</td>
                    <td style={{ fontFamily: "var(--font-mono)", color: "var(--color-muted)", fontSize: "13px" }}>
                      {row.record}
                    </td>
                    <td
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                        color: "var(--color-green)",
                      }}
                    >
                      {row.roi}
                    </td>
                  </tr>
                ))}
                {/* Total row */}
                <tr
                  style={{
                    background: "rgba(0,255,136,0.04)",
                    borderTop: "1px solid rgba(0,255,136,0.15)",
                  }}
                >
                  <td
                    style={{
                      fontWeight: 800,
                      color: "var(--color-white)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    ⚡ TOTAL
                  </td>
                  <td className="positive" style={{ fontSize: "16px" }}>+465</td>
                  <td
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      color: "var(--color-gold)",
                      fontSize: "13px",
                    }}
                  >
                    1,173-943-13
                  </td>
                  <td
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 800,
                      color: "var(--color-green)",
                      fontSize: "16px",
                    }}
                  >
                    9.0%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Disclaimer note */}
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "12px",
            color: "var(--color-muted-2)",
            fontStyle: "italic",
          }}
        >
          All results independently verified on The Action Network. Past performance is not indicative of future results.
        </p>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a
            href="https://t.me/TKSportsAnalytics_Free"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { window.fbq?.('track', 'Lead'); trackViewContent("Credibility — CTA Clicked"); }}
          >
            🚀 JOIN FREE TELEGRAM NOW
          </a>
        </div>
      </div>
    </section>
  );
}
