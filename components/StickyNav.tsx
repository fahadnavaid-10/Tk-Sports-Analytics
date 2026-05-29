"use client";

import { trackTelegramClick } from "@/lib/pixel";
import TelegramIcon from "./TelegramIcon";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";
import XIcon from "./XIcon";

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
          background: rgba(0, 9, 78, 0.97) !important;
          border-bottom-color: var(--color-border) !important;
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .nav-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--color-muted);
          transition: color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .nav-social-icon:hover {
          transform: scale(1.15);
        }
        .nav-social-icon.instagram:hover {
          color: #E1306C;
        }
        .nav-social-icon.tiktok:hover {
          color: #00f2fe;
        }
        .nav-social-icon.x:hover {
          color: #ffffff;
        }
        .nav-social-icon.telegram:hover {
          color: #34A8E2;
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
        {/* Left Side: Brand + Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {/* Brand */}
          <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tk-logo.jpg" alt="TK Sports Analytics" style={{ height: "36px", width: "auto" }} />
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
        </div>

        {/* Right Side: Social Icons + CTA */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Social Icons */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "16px", marginRight: "20px" }}>
            <a
              href="https://t.me/+BtPSFXesFkRiZWEx"
              onClick={() => { trackTelegramClick("sticky_nav_social_telegram"); }}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-icon telegram"
              title="Telegram"
            >
              <TelegramIcon size={18} />
            </a>
            <a
              href="https://www.instagram.com/tksportsanalytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-icon instagram"
              title="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@tksportsanalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-icon tiktok"
              title="TikTok"
            >
              <TikTokIcon size={18} />
            </a>
            <a
              href="https://x.com/TKSportsGators"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-icon x"
              title="X (Twitter)"
            >
              <XIcon size={18} />
            </a>
          </div>

          {/* CTA — sticky_nav_cta */}
          <a
            id="nav-cta"
            href="https://t.me/+BtPSFXesFkRiZWEx"
            onClick={() => { trackTelegramClick("sticky_nav_cta"); }}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "linear-gradient(135deg, #34A8E2, #1a90cc)",
              color: "#ffffff",
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(12px, 2.5vw, 13px)",
              fontWeight: 800,
              padding: "8px 16px",
              borderRadius: "8px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 2px 16px rgba(52,168,226,0.3)",
              whiteSpace: "nowrap",
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(52,168,226,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 16px rgba(52,168,226,0.3)";
            }}
          >
            <TelegramIcon size={15} /> Join Free
          </a>
        </div>
      </div>
    </nav>
  );
}
