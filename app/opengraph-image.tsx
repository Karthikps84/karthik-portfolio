import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Karthik Palyakere Suresh — AI/ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0f18 0%, #111827 55%, #1e1b4b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#a8b1ff",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#3b82f6",
            }}
          />
          Available for full-time opportunities
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            marginTop: 28,
          }}
        >
          Karthik Palyakere Suresh
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#cbd5e1",
            marginTop: 24,
            lineHeight: 1.3,
          }}
        >
          AI/ML Engineer — Computer Vision, Generative AI &amp; Agentic Systems
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: 44,
            flexWrap: "wrap",
          }}
        >
          {["Agentic RAG", "PyTorch", "LangGraph", "MLOps", "ICCV 2025"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 999,
                border: "1px solid #334155",
                color: "#e2e8f0",
                fontSize: 26,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#64748b",
            marginTop: 48,
          }}
        >
          Mannheim, Germany · karthikps.online
        </div>
      </div>
    ),
    size
  );
}
