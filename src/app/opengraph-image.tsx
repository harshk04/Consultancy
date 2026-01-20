import { ImageResponse } from "next/og";
import { site } from "@/content/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "radial-gradient(900px 520px at 12% 22%, rgba(30,58,138,0.20), transparent 60%), radial-gradient(800px 460px at 88% 24%, rgba(200,162,74,0.16), transparent 65%), linear-gradient(180deg, #fbfbff, #ffffff)",
          color: "#0f172a",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 18,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 34, color: "rgba(15,23,42,0.85)" }}>
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 22,
            color: "rgba(71,85,105,1)",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {site.positioning}
        </div>
        <div
          style={{
            marginTop: 42,
            height: 1,
            width: 180,
            background: "rgba(200,162,74,0.75)",
          }}
        />
      </div>
    ),
    size,
  );
}
