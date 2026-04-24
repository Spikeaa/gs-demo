"use client";

import { useEffect, useRef, useState } from "react";

const PANELS = [
  {
    label: "The Craft",
    headline: "Precision\nRestoration",
    body: "Every appliance carries a story. Our engineers treat each job with the kind of quiet attention that only comes from 14 years of hands-on experience — not a call centre script.",
  },
  {
    label: "The Method",
    headline: "Deep Clean.\nDone Right.",
    body: "Specialist degreasers. Disassembled cavities. Individually cleaned racks, fans, and seals. The kind of clean that makes your oven look like the day it arrived.",
  },
  {
    label: "The Promise",
    headline: "Restore,\nNot Replace.",
    body: "Replacing a working appliance costs the earth — literally. We believe in repair first. Our 5-star rated service saves you money and reduces waste, every single time.",
  },
];

export default function VideoScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const targetTimeRef = useRef(0);

  const [activePanel, setActivePanel] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [revealed, setRevealed] = useState([false, false, false]);

  // RAF loop: smoothly lerp video.currentTime toward target
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loop = () => {
      if (video.duration && isFinite(video.duration)) {
        const target = targetTimeRef.current;
        const current = video.currentTime;
        const diff = target - current;
        if (Math.abs(diff) > 0.01) {
          // lerp at ~12% per frame → smooth scrub
          video.currentTime = current + diff * 0.12;
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Scroll handler: only updates target time + state (no direct DOM writes)
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowH = window.innerHeight;

      const scrolled = -rect.top;
      const total = sectionHeight - windowH;
      const progress = Math.max(0, Math.min(1, scrolled / total));

      // Update target time for RAF loop
      if (video.duration && isFinite(video.duration)) {
        targetTimeRef.current = progress * video.duration;
      }

      setVideoProgress(progress);
      setActivePanel(Math.min(2, Math.floor(progress * 3)));
      setRevealed([
        progress > 0.02,
        progress > 0.35,
        progress > 0.68,
      ]);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount in case already scrolled
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "400vh",
        background: "var(--coal)",
      }}
    >
      {/* Sticky container */}
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        overflow: "hidden",
      }}>

        {/* Left: video */}
        <div style={{
          position: "relative",
          width: "58%",
          height: "100%",
          flexShrink: 0,
        }}>
          <video
            ref={videoRef}
            src="/videos/content.mp4"
            muted
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Vignette right edge → blends into right panel */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, transparent 50%, var(--coal) 100%), linear-gradient(0deg, rgba(6,13,31,0.45) 0%, transparent 25%, transparent 75%, rgba(6,13,31,0.45) 100%)",
            pointerEvents: "none",
          }} />

          {/* Progress track */}
          <div style={{
            position: "absolute",
            bottom: 40,
            left: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <div style={{
              width: 160,
              height: 1,
              background: "rgba(196,114,42,0.18)",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: `${videoProgress * 100}%`,
                background: "linear-gradient(90deg, var(--copper), var(--amber))",
                transition: "width 0.15s linear",
              }} />
            </div>
            <span style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--copper)",
              opacity: 0.65,
              minWidth: 28,
            }}>
              {String(Math.round(videoProgress * 100)).padStart(2, "0")}%
            </span>
          </div>
        </div>

        {/* Right: text panels */}
        <div style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 64px 0 56px",
          position: "relative",
          background: "var(--coal)",
        }}>
          {/* Top label */}
          <div style={{
            position: "absolute",
            top: 48,
            left: 56,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <div style={{ width: 28, height: 1.5, background: "linear-gradient(90deg, var(--copper), transparent)", flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.67rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--copper)",
            }}>
              Our Approach
            </span>
          </div>

          {/* Panels */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PANELS.map((panel, i) => {
              const isActive = i === activePanel;
              const wasRevealed = revealed[i];
              return (
                <div
                  key={panel.label}
                  style={{
                    padding: "28px 0",
                    borderTop: i > 0 ? "1px solid rgba(196,114,42,0.08)" : "none",
                    transition: "opacity 0.5s cubic-bezier(0.32,0.72,0,1), transform 0.6s cubic-bezier(0.32,0.72,0,1)",
                    opacity: wasRevealed ? (isActive ? 1 : 0.22) : 0,
                    transform: wasRevealed ? "translateY(0)" : "translateY(18px)",
                    pointerEvents: "none",
                  }}
                >
                  {/* Label + dot */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: isActive ? "var(--copper)" : "rgba(196,114,42,0.28)",
                      transition: "background 0.4s ease",
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: isActive ? "var(--copper)" : "var(--warm-grey)",
                      transition: "color 0.4s ease",
                    }}>
                      {panel.label}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: isActive ? "clamp(36px, 4.2vw, 58px)" : "clamp(24px, 2.8vw, 38px)",
                    fontWeight: 600,
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    color: isActive ? "var(--parchment)" : "var(--warm-grey)",
                    marginBottom: isActive ? 18 : 0,
                    transition: "font-size 0.5s cubic-bezier(0.32,0.72,0,1), color 0.4s ease, margin 0.5s ease",
                    whiteSpace: "pre-line",
                  }}>
                    {panel.headline}
                  </h3>

                  {/* Body — height animates open/closed */}
                  <div style={{
                    maxHeight: isActive ? 120 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.55s cubic-bezier(0.32,0.72,0,1)",
                  }}>
                    <p style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.88rem",
                      color: "var(--mid-grey)",
                      lineHeight: 1.78,
                      maxWidth: 360,
                      paddingTop: 2,
                      paddingBottom: 4,
                    }}>
                      {panel.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right-edge panel counter */}
          <div style={{
            position: "absolute",
            bottom: 48,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
          }}>
            {PANELS.map((_, i) => (
              <div key={i} style={{
                width: 1,
                height: i === activePanel ? 28 : 10,
                background: i === activePanel ? "var(--copper)" : "rgba(196,114,42,0.22)",
                transition: "height 0.4s cubic-bezier(0.32,0.72,0,1), background 0.4s ease",
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
