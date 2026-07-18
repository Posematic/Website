import { ImageResponse } from "next/og";

export const alt =
  "Posematic — sketch-to-pose 3D reference app for artists";
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
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #07051e 0%, #0c0c14 48%, #100a34 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: 999,
            background: "rgba(91, 75, 255, 0.3)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: 180,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "rgba(46, 27, 158, 0.32)",
            filter: "blur(100px)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 34,
                height: 34,
                borderRadius: 10,
                border: "2px solid #c8beff",
                transform: "rotate(8deg)",
                boxShadow: "0 0 28px rgba(200, 190, 255, 0.45)",
              }}
            />
            Posematic
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 980,
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "#c8beff",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Rough sketch
              <span style={{ color: "#8b7bff" }}>→</span>
              Controllable 3D pose
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 78,
                fontWeight: 750,
                lineHeight: 1,
                letterSpacing: "-0.055em",
              }}
            >
              Sketch to Pose
            </div>
            <div
              style={{
                display: "flex",
                color: "#d8d5e6",
                fontSize: 32,
                lineHeight: 1.25,
              }}
            >
              Controllable 3D reference for artists.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              color: "#8f8b9f",
              fontSize: 20,
              letterSpacing: "0.03em",
            }}
          >
            posematic.art
          </div>
        </div>
      </div>
    ),
    size,
  );
}
