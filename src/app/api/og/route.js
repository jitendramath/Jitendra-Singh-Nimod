import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "linear-gradient(135deg,#0f172a,#1e293b,#020617)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700 }}>
          Jitendra Singh Nimod
        </div>

        <div style={{ fontSize: 28, marginTop: 20, color: "#60a5fa" }}>
          Full Stack Developer • B.Sc Mathematics Student
        </div>

        <div style={{ fontSize: 22, marginTop: 30, opacity: 0.8 }}>
          Official Website
        </div>

        <div style={{ marginTop: 40, fontSize: 18, opacity: 0.7 }}>
          jitendrasingh.online
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}