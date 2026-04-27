"use client";

import { trackTelegramClick } from "@/lib/pixel";

export default function StickyNav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "transparent",
        borderBottom: "1px solid transparent",
        padding: "0 16px",
      }}
      id="sticky-nav"
    >
      <style>{`
        #sticky-nav {
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        #sticky-nav.scrolled {
          background: rgba(10,10,10,0.97) !important;
          border-bottom-color: var(--color-border) !important;
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var nav = document.getElementById('sticky-nav');
              function onScroll(){ nav && nav.classList.toggle('scrolled', window.scrollY > 80); }
              window.addEventListener('scroll', onScroll, {passive:true});
            })();
          `,
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/tk-logo.png" alt="TK Sports Analytics" style={{ height: "36px", width: "auto" }} />
        </a>

        {/* Desktop nav links */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {[
            ["Results", "#results"],
            ["Benefits", "#benefits"],
            ["Stats", "#stats"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--color-muted)",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--color-muted)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA — sticky_nav_cta */}
        <a
          id="nav-cta"
          href="https://t.me/TKSportsAnalytics_Free"
          onClick={() => trackTelegramClick("sticky_nav_cta")}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "linear-gradient(135deg, #00ff88, #00e57a)",
            color: "#000",
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(12px, 2.5vw, 13px)",
            fontWeight: 800,
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 2px 16px rgba(0,255,136,0.2)",
            whiteSpace: "nowrap",
            textDecoration: "none",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,255,136,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 16px rgba(0,255,136,0.2)";
          }}
        >
          🚀 Join Free
        </a>
      </div>
    </nav>
  );
}
