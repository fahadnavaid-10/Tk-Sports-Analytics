"use client";

import { useEffect, useRef } from "react";
import { trackTelegramClick, trackViewContent } from "@/lib/pixel";
import TelegramIcon from "./TelegramIcon";

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
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const viewTracked = useRef(false);

  useEffect(() => {
    const targets = [
      { id: "counter-units", end: 518, prefix: "+", suffix: "", noFormat: false },
      { id: "counter-wins", end: 1220, prefix: "", suffix: "-972", noFormat: true },
      { id: "counter-roi", end: 9, prefix: "", suffix: "%", noFormat: false },
      { id: "counter-clv", end: 72, prefix: "", suffix: "%", noFormat: false },
    ];

    const animateCounter = (el: HTMLElement, end: number, prefix: string, suffix: string, noFormat?: boolean) => {
      const duration = 1800;
      const start = performance.now();
      const update = (time: number) => {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * end);
        el.textContent = `${prefix}${noFormat ? current : current.toLocaleString()}${suffix}`;
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Fire counter animation once
            if (!hasAnimated.current) {
              hasAnimated.current = true;
              targets.forEach(({ id, end, prefix, suffix, noFormat }) => {
                const el = document.getElementById(id);
                if (el) animateCounter(el, end, prefix, suffix, noFormat);
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <>
      {/* Viewport 1: Responsive Image Hero */}
      <section className="hero-image-section">
        {/* The Hero Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/120222.jpg"
          alt="TK Sports Analytics Hero"
          className="hero-img-element"
        />

        {/* Gradient overlays to blend with navbar and bottom content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0, 9, 78, 0.4) 0%, transparent 20%, transparent 80%, #00094E 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      </section>

      {/* Viewport 2: Text content, counters, and ticker */}
      <section
        className="hero-section-text"
        ref={sectionRef}
      >
        {/* Background grids */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(52,168,226,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(255,215,0,0.04) 0%, transparent 60%), #00094E",
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
          className="animate-fade-wrapper"
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 20px 48px",
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
            
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 8vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Stop Guessing.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #34A8E2 0%, #1a90cc 100%)",
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
            style={{
              fontSize: "clamp(14px, 2.8vw, 19px)",
              color: "#9a9a9a",
              margin: "0 auto 36px",
              maxWidth: "560px",
              lineHeight: 1.6,
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
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "18px",
              padding: "0 8px",
            }}
          >
            <a
              id="hero-cta-2"
              href="https://t.me/+BtPSFXesFkRiZWEx"
              className="cta-button animate-pulse-glow"
              onClick={() => { trackTelegramClick("hero_text_cta"); }}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "clamp(14px, 3vw, 18px)", padding: "16px 28px", width: "100%", maxWidth: "420px" }}
            >
              <TelegramIcon size={18} /> JOIN FREE TELEGRAM NOW
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="trust-row"
            style={{
              gap: "12px",
            }}
          >
            <span className="trust-badge"><span className="check">✅</span> Instant access</span>
            <span className="trust-badge"><span className="check">✅</span> No payment required</span>
            <span className="trust-badge"><span className="check">✅</span> Unsubscribe anytime</span>
          </div>

          {/* Mini stats row */}
          <div
            className="hero-stats-grid"
            style={{ marginTop: "44px" }}
          >
            {[
              { id: "counter-units", label: "Units Last 12 months", color: "var(--color-gold)" },
              { id: "counter-wins", label: "Record", color: "var(--color-gold)" },
              { id: "counter-roi", label: "ROI", color: "var(--color-gold)" },
              { id: "counter-clv", label: "CLV (Closing Line Value)", color: "var(--color-gold)" },
            ].map((item) => (
              <div key={item.id} className="hero-stat-cell">
                <div
                  id={item.id}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(20px, 5vw, 30px)",
                    fontWeight: 700,
                    color: item.color,
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
        .hero-image-section {
          position: relative;
          width: 100%;
          height: 100dvh;
          overflow: hidden;
          background: #00094E;
        }
        .hero-img-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .hero-section-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 80px 20px 0;
          background: var(--color-bg);
        }
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
        .animate-fade-wrapper {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-section-text.animate-in .animate-fade-wrapper {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .hero-image-section {
            height: auto;
          }
          .hero-img-element {
            height: auto;
            object-fit: contain;
          }
          .hero-section-text {
            padding: 48px 16px 0;
          }
        }
        @media (max-width: 480px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
