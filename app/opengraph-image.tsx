import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Tekton Interior Solutions, furniture manufacturer in Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The share image is the same idea as the site: one board, cut into panels.
export default function OpengraphImage() {
  const panel = { display: "flex", borderRadius: 4 } as const;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#e6e9e1", padding: 36, gap: 10 }}>
        <div style={{ ...panel, flex: 1, flexDirection: "column", justifyContent: "space-between", background: "#8fae2e", padding: 52, color: "#141a0a" }}>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{site.name}</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
            Office and home furniture, made in our own factory in Pune.
          </div>
          <div style={{ fontSize: 30 }}>{`Since 2017 · ${site.phone}`}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 250, gap: 10 }}>
          <div style={{ ...panel, flex: 2, background: "#f7f8f3" }} />
          <div style={{ ...panel, flex: 1, background: "#1b2210" }} />
          <div style={{ ...panel, flex: 1, background: "#c79a5e" }} />
        </div>
      </div>
    ),
    size,
  );
}
