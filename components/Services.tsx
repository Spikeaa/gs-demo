"use client";

import { useEffect, useRef } from "react";
import { Flame, Wrench, ShoppingBag, Layers, Home, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Oven Cleaning",
    subtitle: "From £55",
    desc: "Professional deep clean using specialist equipment. We disassemble, degrease, and restore your oven to near-new condition — inside and out. BBQ cleaning also available.",
    tags: ["Single Ovens", "Range Cookers", "BBQ Cleaning", "Hobs & Extractor"],
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Appliance Repairs",
    subtitle: "All Major Brands",
    desc: "Washing machines, fridges, dishwashers, tumble dryers and more. Our engineers diagnose and fix the fault — restoring your appliance at a fraction of replacement cost.",
    tags: ["Washing Machines", "Fridge Freezers", "Dishwashers", "Tumble Dryers"],
    highlight: false,
  },
  {
    icon: ShoppingBag,
    title: "New Appliances",
    subtitle: "Supply & Install",
    desc: "When repair isn't the right option, we source and supply brand new domestic appliances, fully installed and tested.",
    tags: ["Supply Only", "Full Installation", "Old Appliance Removal"],
    highlight: false,
  },
  {
    icon: Layers,
    title: "End-of-Tenancy",
    subtitle: "Landlords & Agents",
    desc: "Comprehensive oven and appliance cleaning for rental properties. Trusted by landlords, letting agents, and property managers across Essex and Suffolk.",
    tags: ["Rental Properties", "Letting Agents", "Deep Clean"],
    highlight: false,
  },
  {
    icon: Home,
    title: "Maintenance Plans",
    subtitle: "Regular Servicing",
    desc: "Scheduled maintenance visits to keep appliances running at peak efficiency. Catch problems early, extend appliance life.",
    tags: ["Scheduled Visits", "Priority Booking", "Cost Savings"],
    highlight: false,
  },
  {
    icon: Settings,
    title: "Extractor Hoods",
    subtitle: "Clean & Repair",
    desc: "Specialist cleaning and repair of extractor hoods and range hood ventilation systems. Filters, housings, ducting.",
    tags: ["Filter Cleaning", "Motor Repair", "Ducting"],
    highlight: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const dirRef = useRef<1 | -1>(1); // 1 = forward, -1 = reverse

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Ping-pong playback via RAF
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const step = () => {
      if (!video.duration || !isFinite(video.duration)) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      // ~30fps advance per frame (0.033s per RAF tick at 60fps)
      video.currentTime += dirRef.current * 0.033;

      if (video.currentTime >= video.duration) {
        video.currentTime = video.duration;
        dirRef.current = -1;
      } else if (video.currentTime <= 0) {
        video.currentTime = 0;
        dirRef.current = 1;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-section"
      style={{
        position: "relative",
        background: "var(--coal)",
        padding: "120px 0 140px",
        overflow: "hidden",
      }}
    >
      {/* Right-side video — purely decorative, no scroll effect */}
      <div className="services-video" style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "40%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
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
            filter: "brightness(0.55)",
          }}
        />
        {/* Left bleed into section */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, var(--coal) 0%, rgba(6,13,31,0.75) 28%, rgba(6,13,31,0.2) 60%, transparent 100%)",
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
          background: "radial-gradient(ellipse 70% 50% at 65% 50%, rgba(196,114,42,0.07) 0%, transparent 70%)",
        }} />
      </div>

      {/* Content — sits above video */}
      <div className="inner-pad" style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }} className="reveal">
            <div className="divider" />
            <span className="section-label">What We Do</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: 32, maxWidth: "62%" }}
            className="services-header reveal">
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(42px, 5.5vw, 72px)",
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--parchment)",
            }}>
              Our Services
            </h2>
            <p style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.85rem",
              color: "var(--mid-grey)",
              maxWidth: 240,
              lineHeight: 1.8,
              textAlign: "right",
              paddingBottom: 6,
            }}>
              Every job carried out by experienced, vetted engineers.
            </p>
          </div>
        </div>

        {/* Cards — constrained to left 62% so video shows on right */}
        <div className="services-cards" style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          background: "rgba(196,114,42,0.04)",
          maxWidth: "62%",
        }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
                style={{
                  background: service.highlight ? "var(--graphite)" : "var(--coal)",
                  border: service.highlight
                    ? "1px solid rgba(196,114,42,0.2)"
                    : "1px solid rgba(196,114,42,0.06)",
                  padding: "26px 28px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1), border-color 0.25s ease, box-shadow 0.4s ease, background 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateX(5px)";
                  el.style.borderColor = "rgba(196,114,42,0.4)";
                  el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.3)";
                  el.style.background = "var(--graphite)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateX(0)";
                  el.style.borderColor = service.highlight ? "rgba(196,114,42,0.2)" : "rgba(196,114,42,0.06)";
                  el.style.boxShadow = "none";
                  el.style.background = service.highlight ? "var(--graphite)" : "var(--coal)";
                }}
              >
                <div style={{
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: service.highlight ? "rgba(196,114,42,0.12)" : "rgba(196,114,42,0.06)",
                  border: "1px solid rgba(196,114,42,0.16)",
                  marginTop: 2,
                }}>
                  <Icon size={16} style={{ color: "var(--copper)" }} />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.45rem",
                      fontWeight: 600,
                      color: "var(--parchment)",
                      lineHeight: 1,
                    }}>
                      {service.title}
                    </h3>
                    <span style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.67rem",
                      fontWeight: 700,
                      color: "var(--copper-light)",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}>
                      {service.subtitle}
                    </span>
                  </div>
                  <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, var(--copper), transparent)", marginBottom: 10 }} />
                  <p style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.845rem",
                    color: "var(--mid-grey)",
                    lineHeight: 1.75,
                    marginBottom: 10,
                  }}>
                    {service.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {service.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--warm-grey)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        padding: "3px 8px",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <ArrowRight size={13} style={{ color: "var(--copper)", opacity: 0.45, marginTop: 4, flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-header { grid-template-columns: 1fr !important; max-width: 100% !important; }
          .services-header p { display: none; }
        }
        @media (max-width: 768px) {
          #services > div:first-child { display: none; }
        }
      `}</style>
    </section>
  );
}
