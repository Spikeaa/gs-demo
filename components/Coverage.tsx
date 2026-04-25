"use client";

import { MapPin } from "lucide-react";

const primaryAreas = [
  "Colchester",
  "Clacton-on-Sea",
  "Harwich",
  "Ipswich",
  "Chelmsford",
];

const secondaryAreas = [
  "Manningtree",
  "Mersea Island",
  "Witham",
  "Braintree",
  "Sudbury",
  "Felixstowe",
  "Hadleigh",
  "Surrounding Essex & Suffolk",
];

export default function Coverage() {
  return (
    <section
      id="areas"
      className="py-32"
      style={{ background: "var(--coal)" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="divider" />
              <span className="section-label">Service Area</span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 600,
                color: "var(--parchment)",
                lineHeight: 1,
              }}
            >
              Covering Essex{" "}
              <span style={{ color: "var(--copper-light)" }}>&amp; Suffolk</span>
            </h2>
            <p
              className="mb-8"
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "1rem",
                color: "var(--mid-grey)",
                lineHeight: 1.8,
                maxWidth: 440,
              }}
            >
              Based in Colchester, our engineers travel across Essex and into Suffolk to bring
              expert appliance care directly to your door. Not sure if we cover your area?
              Give us a call — we'll always try to help.
            </p>

            <a href="tel:01206638900" className="btn-outline">
              <MapPin size={15} /> Check Your Area
            </a>
          </div>

          {/* Right: areas */}
          <div>
            {/* Primary areas */}
            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--copper-light)",
                marginBottom: 14,
              }}
            >
              Main Coverage
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {primaryAreas.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2"
                  style={{
                    background: "rgba(196,114,42,0.1)",
                    border: "1px solid rgba(196,114,42,0.35)",
                    borderRadius: 3,
                    padding: "10px 18px",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--copper-light)",
                    letterSpacing: "0.03em",
                  }}
                >
                  <MapPin size={13} style={{ color: "var(--copper-light)", flexShrink: 0 }} />
                  {name}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(196,114,42,0.15)", marginBottom: 24 }} />

            {/* Secondary areas */}
            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--copper)",
                marginBottom: 14,
              }}
            >
              Also Serving
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {secondaryAreas.map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-2"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(196,114,42,0.2)",
                    borderRadius: 3,
                    padding: "8px 14px",
                    fontFamily: "'Figtree', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 400,
                    color: "var(--copper)",
                    letterSpacing: "0.02em",
                  }}
                >
                  <MapPin size={11} style={{ color: "var(--copper)", flexShrink: 0, opacity: 0.7 }} />
                  {name}
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.78rem",
                color: "var(--copper)",
                opacity: 0.55,
                letterSpacing: "0.04em",
              }}
            >
              Don't see your town? Contact us — our coverage is constantly expanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
