"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Star } from "lucide-react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      bgRef.current.style.setProperty("--mx", `${x}%`);
      bgRef.current.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <section style={{
      position: "relative",
      minHeight: "100dvh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
      background: "var(--coal)",
    }}>
      {/* Hero background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/about.jpg"
          alt="GS Appliance engineer with van"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.18 }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(6,13,31,0.98) 0%, rgba(6,13,31,0.72) 50%, rgba(6,13,31,0.92) 100%)",
        }} />
      </div>

      {/* Mouse-tracked radial glow */}
      <div ref={bgRef} style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        background: `
          radial-gradient(ellipse 70% 55% at 62% 38%, rgba(196,114,42,0.1) 0%, transparent 60%),
          radial-gradient(ellipse 50% 70% at 18% 82%, rgba(196,114,42,0.045) 0%, transparent 55%),
          radial-gradient(ellipse 80% 60% at 90% 10%, rgba(29,78,216,0.08) 0%, transparent 60%)
        `,
      }} />

      {/* Subtle grid lines */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        backgroundImage: `
          linear-gradient(rgba(196,114,42,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(196,114,42,1) 1px, transparent 1px)
        `,
        backgroundSize: "88px 88px",
        opacity: 0.03,
      }} />

      {/* Decorative GS watermark */}
      <div className="hero-watermark" style={{
        position: "absolute",
        right: "-3%",
        top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(100px, 22vw, 300px)",
        fontWeight: 700,
        color: "transparent",
        WebkitTextStroke: "1px rgba(196,114,42,0.04)",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        GS
      </div>

      {/* Main content — left-aligned, bottom-anchored */}
      <div className="hero-content" style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: 1280,
        margin: "0 auto",
        padding: "160px 48px 100px",
        boxSizing: "border-box",
      }}>
        <div style={{ maxWidth: 760 }}>

          {/* Label */}
          <div className="stagger-1" style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}>
            <div style={{ width: 40, height: 1.5, background: "linear-gradient(90deg, var(--copper), transparent)" }} />
            <span style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--copper)",
            }}>
              Colchester, Essex — Est. 2013
            </span>
          </div>

          {/* Headline */}
          <h1 className="stagger-2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(54px, 8vw, 112px)",
            fontWeight: 600,
            lineHeight: 0.93,
            letterSpacing: "-0.025em",
            marginBottom: 32,
          }}>
            <span style={{ color: "var(--parchment)", display: "block" }}>Your Appliances,</span>
            <span style={{
              display: "block",
              background: "linear-gradient(130deg, var(--copper-light) 0%, var(--amber) 60%, var(--copper) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Restored.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="stagger-3" style={{
            fontFamily: "'Figtree', sans-serif",
            fontSize: "1rem",
            color: "var(--mid-grey)",
            lineHeight: 1.8,
            fontWeight: 400,
            maxWidth: 520,
            marginBottom: 44,
          }}>
            Expert appliance repair and professional oven cleaning across Essex & Suffolk.
            Over 14 years of hands-on experience — we restore rather than replace,
            saving you money and reducing waste.
          </p>

          {/* CTAs */}
          <div className="stagger-4 hero-ctas" style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 14,
            marginBottom: 60,
          }}>
            <a href="#contact" className="btn-primary">
              Book a Service <ArrowRight size={14} />
            </a>
            <a href="tel:01206638900" className="btn-outline">
              <Phone size={13} /> 01206 638900
            </a>
          </div>

          {/* Stats bar */}
          <div className="stagger-5 hero-stats" style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 0,
            paddingTop: 28,
            borderTop: "1px solid rgba(196,114,42,0.12)",
          }}>
            {[
              { value: "14+", label: "Years Experience" },
              { value: "£55", label: "Oven Cleans From" },
              { stars: true, label: "5-Star Rated" },
              { value: "Essex\n& Suffolk", label: "Areas Covered" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ padding: i === 0 ? "0 28px 0 0" : "0 28px" }}>
                  {"stars" in stat ? (
                    <div style={{ display: "flex", gap: 2, marginBottom: 5 }}>
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} fill="var(--copper-light)" color="var(--copper-light)" />
                      ))}
                    </div>
                  ) : (
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: stat.value?.includes("\n") ? "1.3rem" : "1.95rem",
                      fontWeight: 600,
                      color: "var(--copper-light)",
                      lineHeight: 1.1,
                      marginBottom: 5,
                      whiteSpace: "pre-line",
                    }}>
                      {stat.value}
                    </div>
                  )}
                  <div style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.64rem",
                    fontWeight: 600,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "var(--warm-grey)",
                  }}>
                    {stat.label}
                  </div>
                </div>
                {i < 3 && (
                  <div style={{ width: 1, height: 32, background: "rgba(196,114,42,0.18)", flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 140,
        background: "linear-gradient(transparent, var(--coal))",
        pointerEvents: "none",
        zIndex: 5,
      }} />

      <style>{`
        @media (max-width: 640px) {
          h1 { font-size: clamp(44px, 13vw, 72px) !important; }
          .hero-watermark { display: none; }
        }
      `}</style>
    </section>
  );
}
