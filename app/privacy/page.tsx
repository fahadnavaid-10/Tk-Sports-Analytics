import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TK Sports Analytics",
  description:
    "Privacy Policy for TK Sports Analytics. This site is for users 21 years of age or older only. Learn how we collect, use, and protect your data.",
};

const SECTIONS = [
  {
    title: "Age Restriction — 21+ Only",
    icon: "🔞",
    highlight: true,
    content: `TK Sports Analytics is strictly intended for individuals who are 21 years of age or older. By accessing or using this website, you confirm that you are at least 21 years old and legally permitted to engage with sports information content in your jurisdiction.\n\nIf you are under the age of 21, you must immediately leave this site. We do not knowingly collect any personal information from minors. If we become aware that a user under 21 has provided us with personal data, we will take steps to delete that information immediately.`,
  },
  {
    title: "Responsible Gambling",
    icon: "⚠️",
    highlight: true,
    content: `TK Sports Analytics does not encourage problem gambling. If you or someone you know has a gambling problem, free help is available:\n\n• National Problem Gambling Helpline: 1-800-GAMBLER (1-800-426-2537)\n• National Council on Problem Gambling: www.ncpgambling.org\n• Gamblers Anonymous: www.gamblersanonymous.org\n\nWe support responsible gambling practices. Sports betting should be entertainment — never bet more than you can afford to lose.`,
  },
  {
    title: "Information We Collect",
    icon: "📋",
    highlight: false,
    content: `We may collect the following types of information:\n\n• Usage data: pages visited, time on site, browser type, device type, and IP address — collected automatically via analytics tools.\n• Voluntary information: if you contact us via email or social media, we receive whatever information you choose to provide.\n• Pixel data: we use the Facebook Pixel (ID: 2450793322058149) to track page views and conversion events (such as Telegram link clicks) for advertising optimization purposes.\n\nWe do not collect credit card information, payment data, or financial information on this website.`,
  },
  {
    title: "How We Use Your Information",
    icon: "🎯",
    highlight: false,
    content: `Information we collect is used to:\n\n• Understand how visitors use our website and optimize content\n• Measure the effectiveness of our advertising campaigns\n• Improve the overall user experience\n• Respond to inquiries you send us directly\n• Comply with legal obligations\n\nWe do not sell your personal information to third parties.`,
  },
  {
    title: "Facebook Pixel & Third-Party Analytics",
    icon: "📊",
    highlight: false,
    content: `This website uses the Facebook Pixel, a tracking technology provided by Meta Platforms, Inc. The Pixel may collect data about your browsing behavior on this site and may link that data with your Facebook account if you are logged in.\n\nFor more information on how Meta uses data collected through the Pixel, visit: https://www.facebook.com/privacy/explanation\n\nYou can opt out of interest-based advertising from Facebook at: https://www.facebook.com/ads/preferences`,
  },
  {
    title: "Telegram Channel",
    icon: "✈️",
    highlight: false,
    content: `When you join our Telegram channel (t.me/TKSportsAnalytics_Free), Telegram's own Privacy Policy and Terms of Service apply. TK Sports Analytics does not control Telegram's data collection practices.\n\nBy joining the channel, you are subject to Telegram's policies. We recommend reviewing Telegram's privacy policy at: https://telegram.org/privacy`,
  },
  {
    title: "Cookies",
    icon: "🍪",
    highlight: false,
    content: `This website uses cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. Cookies used may include:\n\n• Session cookies: temporary cookies deleted when you close your browser\n• Analytics cookies: help us understand how visitors interact with the site\n• Advertising cookies: used by Facebook Pixel for ad targeting\n\nYou can control cookies through your browser settings. Note that disabling cookies may affect site functionality.`,
  },
  {
    title: "Legal Disclaimer",
    icon: "⚖️",
    highlight: false,
    content: `TK Sports Analytics provides sports information for informational and entertainment purposes only. We are not a sportsbook and do not accept wagers of any kind.\n\nAll picks, predictions, and analysis are based on research, data modeling, and professional opinion. They are NOT financial or legal advice. Past performance is not indicative of future results.\n\nSports betting involves substantial risk of financial loss. You should never bet more than you can afford to lose. TK Sports Analytics is not responsible for any losses incurred as a result of acting on information provided on this site or in our Telegram channels.\n\nSports betting laws vary by jurisdiction. Users are solely responsible for ensuring that their use of sports betting services complies with all applicable local, state, and federal laws.`,
  },
  {
    title: "Data Security",
    icon: "🔒",
    highlight: false,
    content: `We implement reasonable technical and organizational measures to protect the limited personal information we collect. However, no method of transmission over the Internet or electronic storage is 100% secure.\n\nWe cannot guarantee absolute security of your data. By using our website, you acknowledge and accept these inherent risks.`,
  },
  {
    title: "Children's Privacy",
    icon: "👶",
    highlight: false,
    content: `This website is not directed to children under 13, and we do not knowingly collect personal information from children under 13. As noted above, this site is strictly for users aged 21 and older.\n\nIf you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately and we will take steps to delete such information.`,
  },
  {
    title: "Changes to This Policy",
    icon: "🔄",
    highlight: false,
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.\n\nContinued use of the website after changes are posted constitutes your acceptance of the updated Privacy Policy.`,
  },
  {
    title: "Contact Us",
    icon: "📬",
    highlight: false,
    content: `If you have any questions about this Privacy Policy, please contact us through our Telegram channel:\n\nhttps://t.me/TKSportsAnalytics_Free\n\nThis Privacy Policy was last updated: April 2026`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Nav bar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(10,10,10,0.97)",
          borderBottom: "1px solid #2a2a2a",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "0 16px",
        }}
      >
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
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tk-logo.png" alt="TK Sports Analytics" style={{ height: "32px", width: "auto" }} />
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "13px",
              color: "var(--color-muted)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main
        style={{
          minHeight: "100vh",
          background: "#0f0f0f",
          paddingBottom: "80px",
        }}
      >
        {/* Hero */}
        <div
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,255,136,0.05) 0%, transparent 70%)",
            borderBottom: "1px solid #2a2a2a",
            padding: "60px 16px 48px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,255,136,0.08)",
              border: "1px solid rgba(0,255,136,0.2)",
              color: "#00ff88",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "6px 14px",
              borderRadius: "100px",
              marginBottom: "20px",
            }}
          >
            🔒 Legal
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "12px",
              letterSpacing: "-0.02em",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: "16px", color: "#808080", maxWidth: "540px", margin: "0 auto" }}>
            TK Sports Analytics — Last updated April 2026
          </p>

          {/* 21+ Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "28px",
              background: "rgba(255,50,50,0.08)",
              border: "1px solid rgba(255,80,80,0.3)",
              color: "#ff6b6b",
              padding: "10px 24px",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            🔞 This site is strictly for users 21 years of age or older
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "48px 16px 0" }}>
          {SECTIONS.map((section, i) => (
            <div
              key={i}
              style={{
                marginBottom: "32px",
                background: section.highlight ? "rgba(255,80,80,0.04)" : "#1a1a1a",
                border: `1px solid ${section.highlight ? "rgba(255,80,80,0.2)" : "#2a2a2a"}`,
                borderRadius: "12px",
                padding: "28px 24px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(16px, 3vw, 20px)",
                  fontWeight: 800,
                  color: section.highlight ? "#ff8888" : "#ffffff",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <span>{section.icon}</span>
                {section.title}
              </h2>
              <div style={{ fontSize: "15px", color: "#909090", lineHeight: 1.8 }}>
                {section.content.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    style={{
                      marginBottom: j < section.content.split("\n\n").length - 1 ? "14px" : "0",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Back link */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #00ff88, #00e57a)",
                color: "#000",
                fontFamily: "var(--font-heading)",
                fontSize: "15px",
                fontWeight: 800,
                padding: "16px 32px",
                borderRadius: "10px",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(0,255,136,0.2)",
              }}
            >
              🚀 Back to Free Telegram Join
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid #2a2a2a",
          padding: "28px 16px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "11px", color: "#5a5a5a", lineHeight: 1.75, maxWidth: "700px", margin: "0 auto" }}>
          Must be 21+ to access this site. TK Sports Analytics provides data-driven sports insights for informational
          and entertainment purposes only. We do not guarantee outcomes or profits. Past performance is not indicative of
          future results. This site does not operate as a sportsbook and does not accept wagers. If you or someone you
          know has a gambling problem, call 1-800-GAMBLER.
        </p>
        <p style={{ marginTop: "16px", fontSize: "12px", color: "#3a3a3a" }}>
          © 2026 TK Sports Analytics. All rights reserved.
        </p>
      </footer>
    </>
  );
}
