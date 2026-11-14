import { ImageResponse } from "next/og";

export const alt = "SPIKEDTECH · Desarrollo de software en Costa Rica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(120deg, #081325 35%, #174281)",
        color: "#fff",
        padding: "80px",
      }}>
        <div style={{ fontSize: 29, letterSpacing: 6, color: "#a9ceff" }}>SPIKEDTECH</div>
        <div style={{ fontSize: 77, lineHeight: 1.1, marginTop: 34, width: 950, fontWeight: 700 }}>
          Desarrollo de software en Costa Rica
        </div>
        <div style={{ fontSize: 31, marginTop: 25, color: "#c5d3e8" }}>
          Software a medida · Automatización · IA · Ciberseguridad
        </div>
      </div>
    ),
    size,
  );
}
