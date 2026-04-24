"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle, Leaf, PoundSterling, Clock, Shield, MapPin } from "lucide-react";

const reasons = [
  {
    icon: PoundSterling,
    title: "Genuinely Affordable",
    desc: "Transparent pricing with no hidden call-out fees. Clear quotes before any work begins.",
  },
  {
    icon: Leaf,
    title: "Restore, Don't Replace",
    desc: "If your appliance can be repaired, we'll make it happen — saving you money and reducing waste.",
  },
  {
    icon: Shield,
    title: "Vetted & Experienced",
    desc: "All engineers are fully trained and carry ID. 14+ years of hands-on industry expertise.",
  },
  {
    icon: Clock,
    title: "Prompt & Reliable",
    desc: "We respect your time. Punctual appointments and jobs completed right the first time.",
  },
  {
    icon: CheckCircle,
    title: "All Major Brands",
    desc: "From Bosch to Hotpoint, Samsung to AEG — we repair all major domestic appliance brands.",
  },
  {
    icon: MapPin,
    title: "Local to You",
    desc: "Based in Colchester. A local company you can rely on, not a faceless national call centre.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{ padding: "128px 0 140px", background: "linear-gradient(90deg, var(--charcoal) 0%, var(--charcoal) 62%, rgba(12,22,48,0.85) 75%, rgba(12,22,48,0.3) 88%, transparent 100%)", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient background accent */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "-10%",
        width: "50vw",
        height: "50vw",
        maxWidth: 700,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(196,114,42,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* About — split layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 88, alignItems: "center" }}
          className="about-grid">

          {/* Left: copy */}
          <div className="reveal">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div className="divider" />
              <span className="section-label">About Us</span>
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(34px, 4.2vw, 60px)",
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: "-0.015em",
              color: "var(--parchment)",
              marginBottom: 28,
            }}>
              A Trusted,<br />Well-Established<br />Company
            </h2>
            <p style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.95rem",
              color: "var(--mid-grey)",
              lineHeight: 1.85,
              marginBottom: 16,
            }}>
              GS Oven Cleaning & Appliance Repairs is a trusted, well-established company with over a decade of experience in appliance cleaning and servicing and more than 14 years of hands-on industry expertise.
            </p>
            <p style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.95rem",
              color: "var(--mid-grey)",
              lineHeight: 1.85,
              marginBottom: 16,
            }}>
              We've built a strong reputation by consistently delivering fast, professional, and high-quality service. Whether it's in your home or workplace, we handle all appliance needs regardless of make or model.
            </p>
            <p style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.95rem",
              color: "var(--mid-grey)",
              lineHeight: 1.85,
              marginBottom: 32,
            }}>
              From one-off oven deep cleans to end-of-tenancy cleans or regular maintenance plans. Fully insured, using only the safest and most effective methods and products.
            </p>

            <blockquote style={{
              borderLeft: "2px solid var(--copper)",
              paddingLeft: 20,
              marginBottom: 36,
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontStyle: "italic",
                color: "var(--light-grey)",
                lineHeight: 1.65,
              }}>
                "If your appliance can be repaired, we'll make it happen — saving you money and reducing waste."
              </p>
            </blockquote>

            <a href="#contact" className="btn-primary">Request a Quote</a>
          </div>

          {/* Right: double-bezel photo */}
          <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
            {/* Outer shell */}
            <div style={{
              padding: "8px",
              background: "rgba(196,114,42,0.04)",
              border: "1px solid rgba(196,114,42,0.14)",
              borderRadius: 0,
            }}>
              {/* Inner core */}
              <div style={{
                position: "relative",
                height: 500,
                overflow: "hidden",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06)",
              }}>
                <Image
                  src="/images/about.jpg"
                  alt="GS Appliance van and engineer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                {/* Image tint overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,13,31,0.55) 0%, transparent 50%)",
                }} />
              </div>
            </div>

            {/* Decorative copper corner accents */}
            <div style={{
              position: "absolute",
              top: -10,
              right: -10,
              width: 48,
              height: 48,
              borderTop: "2px solid var(--copper)",
              borderRight: "2px solid var(--copper)",
              opacity: 0.45,
              pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute",
              bottom: -10,
              left: -10,
              width: 48,
              height: 48,
              borderBottom: "2px solid var(--copper)",
              borderLeft: "2px solid var(--copper)",
              opacity: 0.45,
              pointerEvents: "none",
            }} />

            {/* Floating stat badge */}
            <div style={{
              position: "absolute",
              bottom: 28,
              right: -20,
              background: "var(--coal)",
              border: "1px solid rgba(196,114,42,0.22)",
              padding: "18px 24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.2rem",
                fontWeight: 600,
                color: "var(--copper-light)",
                lineHeight: 1,
                marginBottom: 4,
              }}>
                14+
              </div>
              <div style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--mid-grey)",
              }}>
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Why choose GS grid */}
        <div style={{ marginTop: 96 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }} className="reveal">
            <div className="divider" />
            <span className="section-label">Why Choose GS</span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
            background: "rgba(196,114,42,0.06)",
          }} className="reasons-grid">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
                  style={{
                    background: "var(--charcoal)",
                    padding: "32px 28px",
                    transition: "background 0.3s ease, transform 0.35s cubic-bezier(0.32,0.72,0,1)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(196,114,42,0.05)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--charcoal)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    width: 38,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(196,114,42,0.09)",
                    border: "1px solid rgba(196,114,42,0.18)",
                    marginBottom: 16,
                  }}>
                    <Icon size={15} style={{ color: "var(--copper)" }} />
                  </div>
                  <h4 style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.855rem",
                    fontWeight: 700,
                    color: "var(--parchment)",
                    marginBottom: 8,
                    letterSpacing: "0.01em",
                  }}>
                    {reason.title}
                  </h4>
                  <p style={{
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.82rem",
                    color: "var(--mid-grey)",
                    lineHeight: 1.7,
                  }}>
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid  { grid-template-columns: 1fr !important; gap: 48px !important; }
          .reasons-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .reasons-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
