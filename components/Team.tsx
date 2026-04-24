"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const team = [
  {
    name: "Grant",
    role: "Senior Appliance Engineer",
    photo: "/images/team/grant.jpg",
    bio: "Grant is our most experienced engineer with a wealth of knowledge — the man to call for any appliance problem. He can repair, replace, install and clean.",
    colour: "var(--copper)",
  },
  {
    name: "Jack",
    role: "Oven Cleaner & Appliance Technician",
    photo: "/images/team/jack.jpg",
    bio: "Joined in August 2021 with outstanding customer service skills and incredible attention to detail. He gives 110% to every job and always goes the extra mile.",
    colour: "var(--amber)",
  },
  {
    name: "Nathan",
    role: "Oven Cleaner & Appliance Technician",
    photo: "/images/team/nathan.jpg",
    bio: "Joined in December 2021. With extensive experience in oven cleaning, Nathan is friendly, thorough, and always happy to help.",
    colour: "var(--amber)",
  },
  {
    name: "Max",
    role: "Appliance Engineer",
    photo: "/images/team/max.jpg",
    bio: "Joined in January 2025 with years of appliance repair knowledge. Max is determined to find every problem and its resolution — always goes the extra mile.",
    colour: "var(--copper)",
  },
  {
    name: "Hannah",
    role: "Operational Logistics Manager",
    photo: "/images/team/hannah.jpg",
    bio: "Hannah manages company logistics, back-office operations, and most importantly ensures every customer gets exactly the help they need.",
    colour: "var(--copper-light)",
  },
  {
    name: "Alana",
    role: "Head of Marketing & Advertising",
    photo: "/images/team/alana.jpg",
    bio: "Alana manages all marketing, advertising, and social media — while supporting office operations and helping drive company development.",
    colour: "var(--copper-light)",
  },
];

export default function Team() {
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
      id="team"
      ref={sectionRef}
      style={{ padding: "128px 0 0", background: "var(--charcoal)", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient radial */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "80vw",
        height: "40vw",
        background: "radial-gradient(ellipse, rgba(196,114,42,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div className="inner-pad" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 10 }}>
        {/* Header — left-aligned (not centred, variance > 4) */}
        <div style={{ marginBottom: 64 }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <div className="divider" />
            <span className="section-label">The People Behind GS</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "flex-end", gap: 40 }}
            className="team-header">
            <h2 className="reveal" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 5vw, 70px)",
              fontWeight: 600,
              color: "var(--parchment)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}>
              Meet the Team
            </h2>
            <p className="reveal reveal-delay-2" style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.88rem",
              color: "var(--mid-grey)",
              maxWidth: 320,
              lineHeight: 1.8,
              textAlign: "right",
              paddingBottom: 6,
            }}>
              Highly experienced, friendly, and committed to top-quality results every time.
            </p>
          </div>
        </div>

        {/* Team grid — 3-col to 2-col mixed sizing */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          background: "rgba(196,114,42,0.05)",
        }} className="team-grid">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
              style={{
                background: "var(--coal)",
                border: "1px solid rgba(196,114,42,0.08)",
                overflow: "hidden",
                transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1), border-color 0.25s ease, box-shadow 0.4s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(196,114,42,0.35)";
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 24px 64px rgba(0,0,0,0.45), 0 0 40px rgba(196,114,42,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(196,114,42,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Photo — double bezel inner */}
              <div style={{ position: "relative", height: 280, background: "var(--graphite)", overflow: "hidden" }}>
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center top", transition: "transform 0.6s cubic-bezier(0.32,0.72,0,1)" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,13,31,0.88) 0%, rgba(6,13,31,0.15) 50%, transparent 100%)",
                }} />
                {/* Role badge */}
                <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
                  <span style={{
                    display: "inline-block",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: member.colour,
                    background: "rgba(6,13,31,0.82)",
                    padding: "5px 11px",
                    border: `1px solid ${member.colour}35`,
                  }}>
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 26px 28px" }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.65rem",
                  fontWeight: 600,
                  color: "var(--parchment)",
                  lineHeight: 1,
                  marginBottom: 10,
                }}>
                  {member.name}
                </h3>
                <div style={{ width: 28, height: 1, background: "linear-gradient(90deg, var(--copper), transparent)", marginBottom: 12 }} />
                <p style={{
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: "0.835rem",
                  color: "var(--mid-grey)",
                  lineHeight: 1.75,
                }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet photo banner */}
        <div className="reveal" style={{ marginTop: 2, position: "relative", height: 260, overflow: "hidden" }}>
          <Image
            src="/images/van.jpg"
            alt="GS Appliance team and fleet"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(6,13,31,0.92) 0%, rgba(6,13,31,0.38) 55%, rgba(6,13,31,0.72) 100%)",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 52px",
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div className="divider" />
                <span className="section-label">Our Team</span>
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(22px, 2.8vw, 38px)",
                fontWeight: 600,
                color: "var(--parchment)",
                lineHeight: 1.1,
                marginBottom: 18,
                maxWidth: 440,
              }}>
                Behind the scenes, our dedicated office team is here to support you.
              </h3>
              <a href="#contact" className="btn-outline" style={{ fontSize: "0.74rem", padding: "10px 22px" }}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .team-header { grid-template-columns: 1fr !important; }
          .team-header p { text-align: left !important; }
        }
        @media (max-width: 560px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
