"use client";

import { useState } from "react";
import { trackTelegramClick, trackViewContent } from "@/lib/pixel";

const faqs = [
  {
    q: "Is this really free?",
    a: "Yes. The free Telegram channel gives you daily insights at no cost. No credit card required. You can upgrade to premium anytime, but it's completely optional. The free channel provides significant value on its own.",
  },
  {
    q: "How are your results verified?",
    a: "Every single pick is tracked publicly on The Action Network under username TK_Gators. You can view our complete history at any time — wins, losses, pushes, everything. We hide nothing.",
  },
  {
    q: "What sports do you cover?",
    a: "MLB, NFL, NBA, NCAAF (college football), and NCAAB (college basketball). We focus on sports where our quantitative models have the strongest demonstrated edge based on historical data.",
  },
  {
    q: "Do you guarantee wins?",
    a: "No one can guarantee wins in sports betting. We provide data-driven analysis based on 30+ years of experience and quantitative modeling. Past performance is not indicative of future results. We are transparent about losses as well as wins.",
  },
  {
    q: "How do I receive the picks?",
    a: "All picks are delivered in real-time via our private Telegram channel. You'll get a push notification on your phone as soon as a new pick is posted — never miss a play.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. The free channel has zero commitment — simply leave the Telegram group whenever you want. Premium subscriptions can be canceled at any time with no penalties or cancellation fees.",
  },
  {
    q: "Is this legal?",
    a: "TK Sports Analytics provides informational and entertainment content only. We do not accept wagers or operate as a sportsbook. Users are responsible for complying with all applicable laws and regulations in their jurisdiction regarding sports betting.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section
      className="section"
      style={{ background: "var(--color-bg)" }}
      onMouseEnter={() => trackViewContent("FAQ — Questions")}
    >
      <div className="container" style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">❓ FAQ</span>
          <h2 className="section-title">
            Frequently Asked
            <br />
            <span className="gold">Questions</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", textAlign: "center" }}>
            Everything you need to know before joining. Still have questions?
            Ask inside the channel.
          </p>
        </div>

        {/* FAQ list */}
        <div
          className="card"
          style={{
            padding: "0 28px",
            background: "var(--color-card)",
            overflow: "hidden",
          }}
        >
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                id={`faq-btn-${i}`}
              >
                <span style={{ flex: 1, textAlign: "left", fontSize: "15px" }}>
                  {faq.q}
                </span>
                <span className={`faq-icon${open === i ? " open" : ""}`}>
                  +
                </span>
              </button>
              <div className={`faq-answer${open === i ? " open" : ""}`} role="region">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://t.me/TKSportsAnalytics_Free"
            className="cta-button"
            onClick={() => { trackTelegramClick("faq_footer_cta"); }}
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 JOIN FREE TELEGRAM NOW
          </a>
          <p
            style={{
              marginTop: "16px",
              fontSize: "14px",
              color: "var(--color-muted)",
            }}
          >
            Still have questions? Ask inside the Telegram channel.
          </p>
        </div>
      </div>
    </section>
  );
}
