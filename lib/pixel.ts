/**
 * TK Sports Analytics — Meta (Facebook) Pixel Utility
 * Pixel ID: 2450793322058149
 *
 * Standard Events: https://developers.facebook.com/docs/meta-pixel/reference
 * Custom Events:   trackCustom() — appear in Events Manager under custom events
 *
 * ── Event Map ──────────────────────────────────────────────────────────────
 *  PageView          — fired automatically on every page load (layout.tsx)
 *  ViewContent       — fired when a key section scrolls into view
 *  Lead              — fired on every Telegram CTA click (standard conversion)
 *  TelegramClick     — custom, fired alongside Lead (segments by source button)
 *  InitiateCheckout  — fired when user clicks a premium/upgrade-related button
 * ────────────────────────────────────────────────────────────────────────────
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = "2450793322058149";

/** Guard — only runs in browser, only when pixel is loaded */
function fbq(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
}

// ── Standard Events ──────────────────────────────────────────────────────────

/** Track PageView manually (e.g. client-side route changes) */
export function trackPageView() {
  fbq("track", "PageView");
}

/**
 * Track ViewContent — call when a section scrolls into view.
 * @param contentName  Human-readable section name shown in Meta Events Manager
 */
export function trackViewContent(contentName: string) {
  fbq("track", "ViewContent", {
    content_name: contentName,
    content_type: "section",
  });
}

/**
 * Track Lead + custom TelegramClick — call on every Telegram CTA click.
 * @param source  Identifies which button was clicked (shown in custom events)
 */
export function trackTelegramClick(source: string) {
  // Standard Lead event — appears in Meta Ads as a conversion
  fbq("track", "Lead", {
    content_name: "Free Telegram Join",
    content_category: "CTA",
    source_button: source,
    pixel_id: PIXEL_ID,
  });

  // Custom event for granular button-level breakdown
  fbq("trackCustom", "TelegramClick", {
    button_id: source,
    action: "join_free_telegram",
  });
}

/**
 * Track InitiateCheckout — call if a premium/paid upgrade button is added.
 * @param plan  e.g. "weekly_35", "monthly_100", "yearly_840"
 */
export function trackInitiateCheckout(plan: string) {
  fbq("track", "InitiateCheckout", {
    content_name: "Premium Subscription",
    content_category: "Upgrade",
    value: plan === "weekly_35" ? 35 : plan === "monthly_100" ? 100 : 840,
    currency: "USD",
    plan,
  });
}

/**
 * Track Subscribe — call when a paid subscription is confirmed.
 */
export function trackSubscribe(plan: string, value: number) {
  fbq("track", "Subscribe", {
    value,
    currency: "USD",
    predicted_ltv: value * 12,
    plan,
  });
}
