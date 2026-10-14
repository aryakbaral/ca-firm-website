import { ImageResponse } from "next/og";

export const alt = "Baral & K.C. Associates — Chartered Accountants, Lalitpur";
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
          justifyContent: "space-between",
          background: "#060F1A",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 64,
              height: 64,
              border: "1px solid #C2A45C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#E3C878",
              fontSize: 26,
              fontFamily: "serif",
            }}
          >
            BK
          </div>
          <div style={{ color: "#F7F5F0", fontSize: 34, fontFamily: "serif" }}>
            Baral &amp; K.C. Associates
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#C2A45C",
              fontSize: 20,
              letterSpacing: 6,
              fontFamily: "monospace",
            }}
          >
            CHARTERED ACCOUNTANTS · LALITPUR, NEPAL
          </div>
          <div style={{ color: "#F7F5F0", fontSize: 58, lineHeight: 1.15, fontFamily: "serif" }}>
            Trusted audit, tax and advisory services.
          </div>
          <div style={{ color: "#8FA0B0", fontSize: 22 }}>
            Audit &amp; Assurance · Taxation · Accounting · Advisory · Corporate · Payroll
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#8FA0B0",
            fontSize: 20,
            fontFamily: "monospace",
          }}
        >
          <div>baralandkc@baralandkc.com</div>
          <div>+977 9849220703</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
