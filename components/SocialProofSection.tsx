"use client";

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import dynamic from "next/dynamic";
import { trackViewContent } from "@/lib/pixel";

// Dynamically import Line chart to avoid SSR canvas errors
const Line = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  { ssr: false, loading: () => <div style={{ height: "260px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: "13px" }}>Loading chart...</div> }
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr",
];

const unitData = [
  18, 45, 72, 98, 130, 158, 200, 242, 290, 328, 372, 410,
  425, 440, 455, 465,
];

const chartData = {
  labels: months,
  datasets: [
    {
      label: "Units",
      data: unitData,
      borderColor: "#00ff88",
      backgroundColor: (context: { chart: { ctx: CanvasRenderingContext2D; chartArea?: { top: number; bottom: number } } }) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) return "transparent";
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, "rgba(0,255,136,0.25)");
        gradient.addColorStop(1, "rgba(0,255,136,0)");
        return gradient;
      },
      borderWidth: 2.5,
      fill: true,
      tension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 6,
      pointBackgroundColor: "#00ff88",
      pointBorderColor: "#0f0f0f",
      pointBorderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: { intersect: false, mode: "index" as const },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#1e1e1e",
      borderColor: "#2a2a2a",
      borderWidth: 1,
      titleColor: "#808080",
      bodyColor: "#00ff88",
      padding: 12,
      callbacks: {
        label: (ctx: { parsed: { y: number } }) => `+${ctx.parsed.y} Units`,
      },
    },
  },
  scales: {
    x: {
      grid: { color: "rgba(255,255,255,0.04)" },
      ticks: { color: "#5a5a5a", font: { size: 11 } },
      border: { color: "transparent" },
    },
    y: {
      grid: { color: "rgba(255,255,255,0.04)" },
      ticks: {
        color: "#5a5a5a",
        font: { size: 11, family: "Courier New" },
        callback: (v: number | string) => `+${v}`,
      },
      border: { color: "transparent" },
    },
  },
};

const testimonials = [
  {
    quote:
      "TK is a machine. If you ain't paying attention, you should be.",
    author: "SBR MVP Member",
    handle: "@verified_bettor",
    stars: 5,
  },
  {
    quote:
      "This guy 100% knows what he is doing. I don't bother a guy painting masterpieces.",
    author: "SBR Hall of Famer",
    handle: "@hall_of_fame",
    stars: 5,
  },
  {
    quote:
      "Decent day in football. Thanks TKGator 🎉 Up 3 units today alone.",
    author: "Verified Member",
    handle: "@verified_member",
    stars: 5,
  },
];

export default function SocialProofSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Track ViewContent once when chart/testimonials become visible
            if (!viewTracked.current && entry.target.classList.contains("anim-item")) {
              viewTracked.current = true;
              trackViewContent("Social Proof — Verified Results & Chart");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatables = sectionRef.current?.querySelectorAll(".anim-item");
    animatables?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-label">📊 Verified Results</span>
          <h2 className="section-title">
            Every Single Pick
            <br />
            <span className="gold">Tracked Publicly</span>
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            All results verified transparently on The Action Network.
            Zero hidden losses. Zero manipulation.
          </p>

          {/* Action Network badge */}
          <a
            href="https://www.actionnetwork.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "24px",
              background: "rgba(255,215,0,0.07)",
              border: "1px solid rgba(255,215,0,0.2)",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#ffd700",
              fontSize: "14px",
              fontWeight: 600,
              transition: "var(--transition)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,215,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,215,0,0.07)";
            }}
          >
            <span>🏆</span>
            View Live Results on Action Network →
          </a>
        </div>

        {/* Chart */}
        <div
          className="card anim-item"
          style={{
            padding: "32px",
            marginBottom: "48px",
            background: "var(--color-card)",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "28px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Unit Progression
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "var(--color-green)",
                  lineHeight: 1,
                }}
              >
                +465
              </div>
              <div style={{ fontSize: "13px", color: "var(--color-muted)", marginTop: "2px" }}>
                Units all time
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,255,136,0.08)",
                border: "1px solid rgba(0,255,136,0.15)",
                padding: "6px 14px",
                borderRadius: "100px",
              }}
            >
              <span className="live-dot" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--color-green)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                }}
              >
                LIVE TRACKING
              </span>
            </div>
          </div>
          <div style={{ height: "260px" }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card anim-item"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, rgba(0,255,136,0.4), transparent)",
                }}
              />
              <div style={{ color: "#ffd700", fontSize: "18px", marginBottom: "14px" }}>
                {"★".repeat(t.stars)}
              </div>
              <p
                style={{
                  color: "#d0d0d0",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(255,215,0,0.1))",
                    border: "1px solid var(--color-border-2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--color-green)",
                  }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-white)" }}>
                    {t.author}
                  </div>
                  <div style={{ fontSize: "11px", color: "var(--color-muted)" }}>
                    {t.handle} · Verified Member
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .anim-item.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
