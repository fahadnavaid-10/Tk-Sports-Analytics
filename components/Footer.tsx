"use client";

import { trackTelegramClick } from "@/lib/pixel";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid var(--color-border)",
        padding: "52px 16px 28px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "32px",
            marginBottom: "40px",
            paddingBottom: "40px",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px", display: "flex", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/tk-logo.png" alt="TK Sports Analytics" style={{ height: "42px", width: "auto" }} />
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.6, maxWidth: "220px" }}>
              Data-driven sports consulting for disciplined investors. +465 Units. Verified on Action Network.
            </p>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-muted-2)", textTransform: "uppercase", marginBottom: "14px" }}>
              Links
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Free Telegram", href: "https://t.me/TKSportsAnalytics_Free" },
                { label: "Action Network", href: "https://app.actionnetwork.com/4zu6/ul9ste7w" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    if (link.href.includes("t.me")) {
                      window.fbq?.('track', 'Lead'); trackTelegramClick("footer_links_cta");
                    }
                  }}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ fontSize: "14px", color: "var(--color-muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--color-white)")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--color-muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-muted-2)", textTransform: "uppercase", marginBottom: "14px" }}>
              Follow
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Telegram (Free)", href: "https://t.me/TKSportsAnalytics_Free", icon: "✈️" },
                { label: "Instagram", href: "https://www.instagram.com/tksportsanalytics/", icon: "📸" },
                { label: "X (Twitter)", href: "https://x.com/TKSportsGators", icon: "🐦" },
                { label: "TikTok", href: "https://www.tiktok.com/@tksportsanalytics", icon: "🎵" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={() => {
                    if (s.href.includes("t.me")) {
                      window.fbq?.('track', 'Lead'); trackTelegramClick("footer_social_cta");
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-muted)", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-white)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")}
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-sm)",
            padding: "16px",
            marginBottom: "24px",
          }}
        >
          <p style={{ fontSize: "11px", color: "var(--color-muted-2)", lineHeight: 1.75 }}>
            <strong style={{ color: "var(--color-muted)", fontSize: "11px" }}>DISCLAIMER: </strong>
            Must be 21+ to access this site. TK Sports Analytics provides data-driven sports insights for informational
            and entertainment purposes only. We do not guarantee outcomes or profits. Past performance is not indicative
            of future results. This site does not operate as a sportsbook and does not accept wagers. Users are
            responsible for complying with all applicable laws and regulations in their jurisdiction. If you or someone
            you know has a gambling problem, call{" "}
            <a href="tel:1-800-426-2537" style={{ color: "var(--color-muted)", textDecoration: "underline" }}>
              1-800-GAMBLER
            </a>
            .
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--color-muted-2)" }}>
            © 2026 TK Sports Analytics. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="live-dot" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--color-green)", fontWeight: 600 }}>
              LIVE PICKS AVAILABLE NOW
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
