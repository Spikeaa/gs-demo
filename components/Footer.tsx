"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Oven Cleaning", "BBQ Cleaning", "Washing Machine Repair",
  "Fridge Freezer Repair", "Dishwasher Repair", "Tumble Dryer Repair",
  "Extractor Hood Repair", "New Appliances",
];

const company = [
  { label: "About Us", href: "#why-us" },
  { label: "Our Team", href: "#team" },
  { label: "Coverage Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Landlords & Agents", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const linkStyle: React.CSSProperties = {
    fontFamily: "'Figtree', sans-serif",
    fontSize: "0.82rem",
    color: "var(--mid-grey)",
    textDecoration: "none",
    display: "block",
    padding: "3px 0",
    transition: "color 0.2s ease",
  };

  return (
    <footer style={{
      background: "var(--charcoal)",
      borderTop: "1px solid rgba(196,114,42,0.12)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 48px 40px" }}>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 64,
          marginBottom: 56,
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.9rem",
                fontWeight: 600,
                color: "var(--copper-light)",
                display: "block",
                lineHeight: 1,
                marginBottom: 4,
              }}>
                GS Appliance
              </span>
              <span style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--warm-grey)",
              }}>
                Ltd — Est. 2013
              </span>
            </div>
            <p style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.87rem",
              color: "var(--mid-grey)",
              lineHeight: 1.8,
              maxWidth: 340,
              marginBottom: 28,
            }}>
              Expert appliance repair and professional oven cleaning across Essex & Suffolk.
              We restore rather than replace — saving you money, reducing waste.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: Phone, text: "01206 638900", href: "tel:01206638900" },
                { icon: Mail, text: "info@gsappliance.co.uk", href: "mailto:info@gsappliance.co.uk" },
                { icon: MapPin, text: "4 Penny Close, Colchester, CO4 6DQ", href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon size={12} style={{ color: "var(--copper)", flexShrink: 0 }} />
                  {href ? (
                    <a
                      href={href}
                      style={linkStyle}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--copper-light)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--mid-grey)")}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ ...linkStyle, pointerEvents: "none" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--copper)",
              marginBottom: 20,
            }}>
              Services
            </h4>
            <ul style={{ listStyle: "none" }}>
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    style={linkStyle}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--parchment)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--mid-grey)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontFamily: "'Figtree', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--copper)",
              marginBottom: 20,
            }}>
              Company
            </h4>
            <ul style={{ listStyle: "none" }}>
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={linkStyle}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--parchment)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--mid-grey)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copper rule */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(196,114,42,0.25), transparent)", marginBottom: 24 }} />

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{
            fontFamily: "'Figtree', sans-serif",
            fontSize: "0.76rem",
            color: "var(--warm-grey)",
          }}>
            © {year} GS Appliance Ltd. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'Figtree', sans-serif",
            fontSize: "0.76rem",
            color: "var(--warm-grey)",
          }}>
            Colchester, Essex — serving Essex & Suffolk
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
