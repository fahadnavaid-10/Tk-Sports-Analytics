"use client";

import { useEffect, useState, useCallback } from "react";
import { trackTelegramClick } from "@/lib/pixel";

const TELEGRAM_URL = "https://t.me/TKSportsAnalytics_Free";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  // No sessionStorage — resets on every page reload
  const showPopup = useCallback(() => {
    setVisible(true);
  }, []);

  const closePopup = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    let shown = false; // in-memory flag so it only shows once per page load

    // ── Trigger 1: Auto-show after 10 seconds ──────────────────────────────
    const autoTimer = setTimeout(() => {
      if (!shown) {
        shown = true;
        showPopup();
      }
    }, 10000);

    // ── Trigger 2: Exit intent — cursor reaches top 20px of viewport ───────
    // Fires immediately if user moves toward browser chrome before 10s
    let exitDebounce = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!shown && !exitDebounce && e.clientY <= 20) {
        exitDebounce = true;
        shown = true;
        showPopup();
      }
      if (e.clientY > 60) exitDebounce = false;
    };

    // ── Trigger 3: Mobile — pull back to very top of page ─────────────────
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!shown && currentY < 10 && lastScrollY > 80) {
        shown = true;
        showPopup();
      }
      lastScrollY = currentY;
    };

    // ── ESC to close ───────────────────────────────────────────────────────
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };

    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(autoTimer);
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopup, closePopup]);

  if (!visible) return null;

  return (
    <div
      className="exit-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Special offer"
    >
      <div className="exit-popup">
        {/* Close X */}
        <button
          className="exit-close"
          onClick={closePopup}
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

        {/* Eyebrow */}
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

        {/* Headline */}
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

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(13px, 3vw, 14px)",
            color: "var(--color-muted)",
            marginBottom: "22px",
            lineHeight: 1.6,
          }}
        >
          Join our growing community of data-driven sports bettors already receiving daily picks.
        </p>

        {/* CTA Button */}
        <a
          id="popup-cta"
          href={TELEGRAM_URL}
          className="cta-button"
          onClick={() => {
            trackTelegramClick("exit_intent_popup_cta");
            closePopup();
          }}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "clamp(14px, 3vw, 16px)", padding: "16px 24px" }}
        >
          🚀 JOIN FREE TELEGRAM
        </a>

        {/* No CC */}
        <p style={{ marginTop: "10px", fontSize: "12px", color: "var(--color-muted-2)" }}>
          No credit card required
        </p>

        {/* Dismiss */}
        <button
          onClick={closePopup}
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
