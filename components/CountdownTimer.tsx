"use client";

import { useEffect, useRef } from "react";
import { trackTelegramClick } from "@/lib/pixel";

const TELEGRAM_URL = "https://t.me/TKSportsAnalytics_Free";

/** Next upcoming pick drop times (hours in 24h, user's local timezone) */
const DROP_HOURS = [12, 18, 23]; // 12 PM, 6 PM, 11 PM (actual 11:59)
const DROP_MINUTES = [0, 0, 59]; // :00, :00, :59

function getNextDrop(): Date {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();

  for (let i = 0; i < DROP_HOURS.length; i++) {
    const dh = DROP_HOURS[i];
    const dm = DROP_MINUTES[i];
    if (h < dh || (h === dh && m < dm)) {
      const next = new Date(now);
      next.setHours(dh, dm, 0, 0);
      return next;
    }
  }

  // Past all drops today — next is tomorrow's 12 PM
  const next = new Date(now);
  next.setDate(next.getDate() + 1);
  next.setHours(DROP_HOURS[0], DROP_MINUTES[0], 0, 0);
  return next;
}

export default function CountdownTimer() {
  const timerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function tick() {
      if (!timerRef.current) return;
      const now = new Date();
      const diff = getNextDrop().getTime() - now.getTime();
      if (diff <= 0) {
        timerRef.current.textContent = "0h 00m 00s";
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const min = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      timerRef.current.textContent = `${h}h ${String(min).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className="cdt-section" aria-label="Countdown to next free pick drop">
        <div className="cdt-container">
          {/* Lightning icon */}
          <div className="cdt-bolt" aria-hidden="true">⚡</div>

          {/* Headline */}
          <h2 className="cdt-headline">TODAY&apos;S FREE PICKS DROP IN:</h2>

          {/* Timer display */}
          <div className="cdt-timer-wrap" aria-live="polite" aria-atomic="true">
            <span id="countdown-timer" ref={timerRef} className="cdt-timer">
              --h --m --s
            </span>
          </div>

          {/* Subtext */}
          <p className="cdt-subtext">Join now to receive today&apos;s free predictions</p>

          {/* CTA */}
          <a
            id="countdown-cta"
            href={TELEGRAM_URL}
            className="cdt-cta"
            onClick={() => trackTelegramClick("countdown_timer_cta")}
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN FREE NOW
          </a>
        </div>
      </section>

      <style>{`
        .cdt-section {
          padding: 0 20px;
          display: flex;
          justify-content: center;
        }

        .cdt-container {
          background: #2d2d2d;
          border: 2px solid #00ff88;
          border-radius: 12px;
          padding: 30px;
          margin: 40px auto;
          max-width: 700px;
          width: 100%;
          text-align: center;
          box-shadow: 0 0 40px rgba(0,255,136,0.08), 0 8px 40px rgba(0,0,0,0.4);
        }

        .cdt-bolt {
          font-size: 36px;
          line-height: 1;
          margin-bottom: 12px;
          filter: drop-shadow(0 0 8px rgba(255,215,0,0.5));
        }

        .cdt-headline {
          font-family: 'Montserrat', 'Inter', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffd700;
          margin-bottom: 15px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .cdt-timer-wrap {
          margin-bottom: 15px;
        }

        .cdt-timer {
          font-family: 'Courier New', monospace;
          font-size: 48px;
          font-weight: 900;
          color: #00ff88;
          letter-spacing: 0.04em;
          text-shadow: 0 0 20px rgba(0,255,136,0.4);
          display: inline-block;
        }

        .cdt-subtext {
          color: #808080;
          font-size: 16px;
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .cdt-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #00ff88;
          color: #000000;
          font-family: 'Montserrat', 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 800;
          padding: 18px 45px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
          min-height: 48px;
          min-width: 200px;
          box-shadow: 0 4px 20px rgba(0,255,136,0.3);
        }

        .cdt-cta:hover {
          transform: scale(1.05);
          background: #00e57a;
          box-shadow: 0 8px 30px rgba(0,255,136,0.5);
        }

        .cdt-cta:active {
          transform: scale(1.01);
        }

        /* Mobile */
        @media (max-width: 600px) {
          .cdt-container {
            padding: 20px;
            margin: 30px auto;
          }

          .cdt-headline {
            font-size: 18px;
          }

          .cdt-timer {
            font-size: 32px;
          }

          .cdt-subtext {
            font-size: 14px;
          }

          .cdt-cta {
            width: 100%;
            padding: 18px 20px;
          }
        }

        @media (max-width: 400px) {
          .cdt-timer {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
