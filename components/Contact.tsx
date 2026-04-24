"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: submit to API route or email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 relative" style={{ background: "var(--coal)" }}>
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(196,114,42,0.06) 0%, transparent 60%)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider" />
            <span className="section-label">Get In Touch</span>
            <div className="divider" style={{ transform: "rotate(180deg)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 600,
              color: "var(--parchment)",
              lineHeight: 1,
            }}
          >
            Book a Service
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12">
          {/* Left: info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "var(--parchment)",
                }}
              >
                Contact Details
              </h3>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "01206 638900",
                    href: "tel:01206638900",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@gsappliance.co.uk",
                    href: "mailto:info@gsappliance.co.uk",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "4 Penny Close, Colchester, CO4 6DQ",
                    href: null,
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Monday – Friday: 9am – 5pm\nWeekends: Closed",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(196,114,42,0.08)",
                        border: "1px solid rgba(196,114,42,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <Icon size={15} style={{ color: "var(--copper)" }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--warm-grey)", marginBottom: 2 }}>
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9rem", color: "var(--light-grey)", textDecoration: "none", transition: "color 0.2s" }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--copper-light)")}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--light-grey)")}
                        >
                          {value}
                        </a>
                      ) : (
                        <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9rem", color: "var(--light-grey)", whiteSpace: "pre-line" }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div
              className="p-6"
              style={{ background: "var(--charcoal)", border: "1px solid rgba(196,114,42,0.15)" }}
            >
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--parchment)", marginBottom: 8 }}>
                Find us online
              </p>
              <div className="flex gap-3">
                {["Facebook", "Instagram", "LinkedIn"].map((platform) => (
                  <span
                    key={platform}
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--mid-grey)",
                      border: "1px solid rgba(196,114,42,0.15)",
                      padding: "6px 14px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--copper-light)";
                      (e.target as HTMLElement).style.borderColor = "rgba(196,114,42,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--mid-grey)";
                      (e.target as HTMLElement).style.borderColor = "rgba(196,114,42,0.15)";
                    }}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="p-10"
            style={{
              background: "var(--charcoal)",
              border: "1px solid rgba(196,114,42,0.15)",
            }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
                <CheckCircle size={40} style={{ color: "var(--copper)" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 600, color: "var(--parchment)" }}>
                  Message Sent
                </h3>
                <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9rem", color: "var(--mid-grey)", maxWidth: 320, lineHeight: 1.7 }}>
                  Thank you for getting in touch. We'll be in contact shortly to confirm your booking.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 600, color: "var(--parchment)" }}
                >
                  Request a Booking
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.2)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        placeholder="01234 567890"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.2)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.2)")}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.2)")}
                    >
                      <option value="">Select a service...</option>
                      <option>Oven Cleaning</option>
                      <option>BBQ Cleaning</option>
                      <option>Washing Machine Repair</option>
                      <option>Washer Dryer Repair</option>
                      <option>Fridge Freezer Repair</option>
                      <option>Dishwasher Repair</option>
                      <option>Tumble Dryer Repair</option>
                      <option>Oven Repair</option>
                      <option>Extractor Hood Repair</option>
                      <option>New Appliance Supply</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Tell Us More</label>
                    <textarea
                      rows={4}
                      placeholder="Describe the fault or service you need..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(196,114,42,0.2)")}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={15} /> Send Request
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Figtree', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--warm-grey)",
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(196,114,42,0.2)",
  color: "var(--parchment)",
  fontFamily: "'Figtree', sans-serif",
  fontSize: "0.9rem",
  padding: "12px 14px",
  outline: "none",
  transition: "border-color 0.2s",
};
