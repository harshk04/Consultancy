import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "linear-gradient(135deg, #1E3A8A, #0B1E52)",
          color: "white",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        SG
      </div>
    ),
    size,
  );
}
