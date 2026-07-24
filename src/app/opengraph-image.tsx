import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Premier NP Care";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    path.join(process.cwd(), "public/images/logo-official.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f8fa 58%, #ffffff 100%)",
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
            alignItems: "center",
            background: "rgba(255,255,255,0.78)",
            border: "2px solid rgba(26,53,87,0.14)",
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            padding: 64,
            width: "100%",
          }}
        >
          <img alt="Premier NP Care" height={186} src={logoSrc} width={372} />
          <div
            style={{
              background: "linear-gradient(90deg,#12AEC4,#58C7D6,#C9A84C)",
              borderRadius: 999,
              height: 4,
              width: 96,
            }}
          />
          <div style={{ color: "rgba(26,53,87,0.72)", fontSize: 32 }}>
            Personal care with Virginie Chavannes, APN.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
