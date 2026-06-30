import { ImageResponse } from "next/og";

export const alt = "Premier NP Care";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f4ede2",
          color: "#1a1f1c",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(26,31,28,0.14)",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#3d6b57", fontSize: 24, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Nurse Practitioner-led telehealth care
          </div>
          <div style={{ fontSize: 82, fontWeight: 300, lineHeight: 1.05, color: "#1a1f1c" }}>
            Premier NP Care
          </div>
          <div style={{ color: "rgba(26,31,28,0.62)", fontSize: 32 }}>
            Personal, accessible care from a provider who listens first.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
