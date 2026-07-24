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
          background: "linear-gradient(135deg, #ffffff 0%, #f4f8fa 58%, #ffffff 100%)",
          color: "#1A3557",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "2px solid rgba(26,53,87,0.14)",
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#1A3557", fontSize: 24, fontWeight: 700, letterSpacing: 0, textTransform: "uppercase" }}>
            Nurse Practitioner-led telehealth care
          </div>
          <div style={{ fontSize: 82, fontWeight: 300, lineHeight: 1.05, color: "#1A3557" }}>
            Premier NP Care
          </div>
          <div style={{ color: "rgba(26,53,87,0.68)", fontSize: 32 }}>
            Personal care with Virginie Chavannes, APN.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
