"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We cover Colchester and the surrounding Essex area including Clacton-on-Sea, Harwich, Manningtree, Mersea Island, and into Suffolk including Ipswich. If you're unsure whether we cover your postcode, give us a call on 01206 638900 and we'll let you know.",
  },
  {
    q: "How much does an oven clean cost?",
    a: "Our oven cleaning prices start from just £55 for a standard single oven. Range cookers, double ovens, and BBQ cleaning are also available — prices vary depending on the size and condition of the appliance. Contact us for a personalised quote.",
  },
  {
    q: "Do you charge a call-out fee?",
    a: "We believe in transparent, honest pricing. We'll always give you a clear quote before any work begins, with no hidden surprises. Please contact us directly to discuss your specific situation.",
  },
  {
    q: "What appliances do you repair?",
    a: "We repair a wide range of domestic appliances including washing machines, fridge freezers, dishwashers, tumble dryers, ovens, extractor hoods, and washer-dryers. We work on all major brands.",
  },
  {
    q: "My washing machine isn't draining — can you fix it?",
    a: "Yes, this is one of the most common faults we see. It's often caused by a blocked pump filter, a faulty drain pump, or a kinked hose. Our engineers can diagnose and fix this efficiently, usually in a single visit.",
  },
  {
    q: "Do you supply new appliances too?",
    a: "Yes — if your appliance is beyond economical repair, we can source and supply brand new domestic appliances and handle the full installation. Just ask us when you get in touch.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can call us on 01206 638900, email info@gsappliance.co.uk, or use the booking form on this page. We're available Monday to Friday, 9am–5pm.",
  },
  {
    q: "Do you work with landlords and letting agents?",
    a: "Absolutely. We regularly work with landlords, letting agents, and property managers across Essex and Suffolk, providing end-of-tenancy oven cleaning and appliance servicing. Regular maintenance plans are also available.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32" style={{ background: "var(--charcoal)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="divider" />
              <span className="section-label">FAQ</span>
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 600,
                color: "var(--parchment)",
                lineHeight: 1,
              }}
            >
              Questions &amp;{" "}
              <em style={{ color: "var(--copper-light)", fontStyle: "italic" }}>Answers</em>
            </h2>
            <p
              style={{
                fontFamily: "'Figtree', sans-serif",
                fontSize: "0.95rem",
                color: "var(--mid-grey)",
                lineHeight: 1.7,
              }}
            >
              Can't find the answer you're looking for? Call us directly on{" "}
              <a
                href="tel:01206638900"
                style={{ color: "var(--copper)", textDecoration: "none" }}
              >
                01206 638900
              </a>{" "}
              — we're happy to help.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderBottom: "1px solid rgba(196,114,42,0.12)" }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: open === i ? "var(--copper-light)" : "var(--parchment)",
                      lineHeight: 1.3,
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "var(--copper)",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: open === i ? "rotate(0deg)" : "rotate(0deg)",
                    }}
                  >
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: open === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p
                    className="pb-6"
                    style={{
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.9rem",
                      color: "var(--mid-grey)",
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
