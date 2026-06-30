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
          background: "#F7F1E8",
          color: "#24312D",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(36,49,45,0.18)",
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#C98264", fontSize: 28, fontWeight: 700 }}>
            Nurse Practitioner-led telehealth care
          </div>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.05 }}>
            Premier NP Care
          </div>
          <div style={{ color: "rgba(36,49,45,0.76)", fontSize: 34 }}>
            Personal, accessible care from a provider who listens first.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

