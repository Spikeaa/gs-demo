"use client";

import { MapPin } from "lucide-react";

const areas = [
  { name: "Colchester", primary: true, note: "Our home base" },
  { name: "Clacton-on-Sea", primary: true, note: "Full coverage" },
  { name: "Harwich", primary: true, note: "Full coverage" },
  { name: "Manningtree", primary: false, note: "Full coverage" },
  { name: "Ipswich", primary: true, note: "Full coverage" },
  { name: "Mersea Island", primary: false, note: "Full coverage" },
  { name: "Chelmsford", primary: true, note: "Full coverage" },
  { name: "Witham", primary: false, note: "Full coverage" },
  { name: "Braintree", primary: false, note: "Full coverage" },
  { name: "Sudbury", primary: false, note: "Full coverage" },
  { name: "Felixstowe", primary: false, note: "Full coverage" },
  { name: "Hadleigh", primary: false, note: "Full coverage" },
  { name: "Surrounding Essex & Suffolk", primary: false, note: "Please enquire" },
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

          {/* Right: areas grid */}
          <div>
            <div
              className="grid grid-cols-2 gap-px"
              style={{ background: "rgba(196,114,42,0.08)" }}
            >
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-3 px-5 py-4 transition-all duration-200 group cursor-default"
                  style={{
                    background: "var(--charcoal)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(196,114,42,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--charcoal)";
                  }}
                >
                  <MapPin
                    size={13}
                    style={{
                      color: area.primary ? "var(--copper)" : "var(--warm-grey)",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontFamily: "'Figtree', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: area.primary ? 600 : 400,
                        color: area.primary ? "var(--parchment)" : "var(--light-grey)",
                      }}
                    >
                      {area.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="mt-4"
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.78rem",
                color: "var(--warm-grey)",
                letterSpacing: "0.05em",
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
