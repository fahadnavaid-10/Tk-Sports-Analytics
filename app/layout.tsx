import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "TK Sports Analytics | Free Data-Driven Sports Predictions",
  description:
    "Join our growing community of data-driven sports bettors getting FREE predictions daily. +465 Units, 9% ROI, verified on Action Network.",
  keywords:
    "sports analytics, sports picks, sports betting, free picks, telegram sports, data-driven predictions, sports handicapping",
  authors: [{ name: "TK Sports Analytics" }],
  openGraph: {
    title: "TK Sports Analytics | Stop Guessing. Start Investing.",
    description:
      "Join our growing community of data-driven sports bettors getting FREE predictions daily. +465 Units all time. Verified on Action Network.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TK Sports Analytics | Free Sports Predictions",
    description: "+465 Units. 9% ROI. 55% Win Rate. Join free today.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const PIXEL_ID = "2450793322058149";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* Preconnect to Meta/Facebook CDN for faster pixel load */}
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f0f0f" />
      </head>

      <body suppressHydrationWarning>
        {children}

        {/*
         * ── META PIXEL BASE CODE ───────────────────────────────────────────
         * Strategy "afterInteractive": loads after the page becomes interactive.
         * This is the correct Next.js approach — avoids blocking page render
         * while still firing before most user interactions.
         *
         * Events fired automatically:
         *   • fbq('init', PIXEL_ID)   — initialises the pixel
         *   • fbq('track', 'PageView') — fires on every page/route load
         *
         * Additional events are fired from lib/pixel.ts via helper functions
         * imported directly into each component.
         * ──────────────────────────────────────────────────────────────────
         */}
        <Script
          id="meta-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* NoScript fallback — for browsers with JS disabled */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
