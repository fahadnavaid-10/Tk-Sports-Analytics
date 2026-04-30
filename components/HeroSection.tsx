"use client";

import { useEffect, useRef } from "react";
import { trackTelegramClick, trackViewContent } from "@/lib/pixel";

const TICKER_ITEMS = [
  "+518 Units Last 12 Months",
  "Record: 1220-972",
  "9% ROI",
  "72% CLV",
  "MLB +145.74U",
  "NFL +80.68U",
  "NCAAF +92.23U",
  "NCAAB +135.48U",
  "NBA +64.23U",
  "Verified on Action Network",
  "Join our growing community",
  "30+ Years Experience",
];

export default function HeroSection() {
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const viewTracked = useRef(false);

  useEffect(() => {
    const targets = [
      { id: "counter-units", end: 518, prefix: "+", suffix: "" },
      { id: "counter-wins", end: 1220, prefix: "", suffix: "-972" },
      { id: "counter-roi", end: 9, prefix: "", suffix: "%" },
      { id: "counter-clv", end: 72, prefix: "", suffix: "%" },
    ];

    const animateCounter = (el: HTMLElement, end: number, prefix: string, suffix: string) => {
      const duration = 1800;
      const start = performance.now();
      const update = (time: number) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * end);
        el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fire counter animation once
            if (!hasAnimated.current) {
              hasAnimated.current = true;
              targets.forEach(({ id, end, prefix, suffix }) => {
                const el = document.getElementById(id);
                if (el) animateCounter(el, end, prefix, suffix);
              });
            }
            // Track ViewContent once for Hero section
            if (!viewTracked.current) {
              viewTracked.current = true;
              trackViewContent("Hero — Stop Guessing Start Winning");
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      <section
        className="hero-section"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "0",
        }}
      >
        {/* Background */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(255,215,0,0.04) 0%, transparent 60%), #0f0f0f",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "90px 20px 48px",
            width: "100%",
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          {/* Brand badge */}
          <div
            className="animate-fade-in"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,215,0,0.08)",
                border: "1px solid rgba(255,215,0,0.2)",
                color: "#ffd700",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "100px",
              }}
            >
              <span className="live-dot" style={{ background: "#ffd700", boxShadow: "0 0 6px #ffd700" }} />
              TK SPORTS ANALYTICS
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(38px, 9vw, 80px)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
              animationDelay: "0.1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Stop Guessing.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Start Investing.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-up"
            style={{
              fontSize: "clamp(16px, 3vw, 20px)",
              color: "#9a9a9a",
              margin: "0 auto 36px",
              maxWidth: "560px",
              lineHeight: 1.6,
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
              padding: "0 4px",
            }}
          >
            <strong style={{ color: "#ffffff" }}>Join our growing community of data-driven sports bettors</strong>{" "}
            getting{" "}
            <strong style={{ color: "#ffd700" }}>FREE data-driven</strong> sports
            predictions daily.{" "}
            <span style={{ color: "#6a6a6a" }}>No credit card. No risk.</span>
          </p>

          {/* CTA — hero_main_cta */}
          <div
            className="animate-fade-up"
            style={{
              display: "flex",
              justifyContent: "center",
              animationDelay: "0.3s",
              opacity: 0,
              animationFillMode: "forwards",
              marginBottom: "18px",
              padding: "0 8px",
            }}
          >
            <a
              id="hero-cta"
              href="https://t.me/TKSportsAnalytics_Free"
              className="cta-button animate-pulse-glow"
              onClick={() => { trackTelegramClick("hero_main_cta"); }}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "clamp(15px, 3vw, 18px)", padding: "20px 32px" }}
            >
              🚀 JOIN FREE TELEGRAM NOW
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="trust-row animate-fade-up"
            style={{
              animationDelay: "0.4s",
              opacity: 0,
              animationFillMode: "forwards",
              gap: "12px",
            }}
          >
            <span className="trust-badge"><span className="check">✅</span> Instant access</span>
            <span className="trust-badge"><span className="check">✅</span> No payment required</span>
            <span className="trust-badge"><span className="check">✅</span> Unsubscribe anytime</span>
          </div>

          {/* Mini stats row */}
          <div
            ref={counterRef}
            className="animate-fade-up hero-stats-grid"
            style={{ marginTop: "44px", animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            {[
              { id: "counter-units", label: "Units Last 12 months" },
              { id: "counter-wins", label: "Record" },
              { id: "counter-roi", label: "ROI" },
              { id: "counter-clv", label: "CLV (Closing Line Value)" },
            ].map((item) => (
              <div key={item.id} className="hero-stat-cell">
                <div
                  id={item.id}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(20px, 5vw, 30px)",
                    fontWeight: 700,
                    color: "var(--color-green)",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  —
                </div>
                <div style={{ fontSize: "11px", color: "var(--color-muted)", fontWeight: 500 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticker */}
        <div className="ticker-wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="ticker-track">
            {doubled.map((item, i) => (
              <span key={i} className="ticker-item">
                {item}
                <span className="ticker-sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--color-border);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .hero-stat-cell {
          background: var(--color-card);
          padding: 18px 8px;
          text-align: center;
        }
        @media (max-width: 480px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
