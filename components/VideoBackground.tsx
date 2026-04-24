"use client";

export default function VideoBackground() {
  return (
    <>
      {/* Sticky right-side video — inside content flow, not fixed */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "36%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <div style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
        }}>
          <video
            src="/videos/content.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(0.7)",
            }}
          />

          {/* Left gradient — bleeds into content */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, var(--coal) 0%, rgba(6,13,31,0.55) 30%, rgba(6,13,31,0.1) 65%, transparent 100%)",
          }} />

          {/* Top fade */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "25%",
            background: "linear-gradient(180deg, var(--coal) 0%, transparent 100%)",
          }} />

          {/* Bottom fade */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "25%",
            background: "linear-gradient(0deg, var(--coal) 0%, transparent 100%)",
          }} />

          {/* Copper tint */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(196,114,42,0.07) 0%, transparent 70%)",
          }} />
        </div>
      </div>
    </>
  );
}
