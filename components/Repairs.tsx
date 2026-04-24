"use client";

import { WashingMachine, Thermometer, Wind, Zap, Droplets, Fan } from "lucide-react";

const repairTypes = [
  {
    icon: WashingMachine,
    name: "Washing Machine Repair",
    faults: ["Not draining", "Not spinning", "Leaking water", "Won't start", "Noisy drum", "Door seal fault"],
  },
  {
    icon: Thermometer,
    name: "Fridge Freezer Repair",
    faults: ["Not cooling", "Running constantly", "Excessive frost", "Noisy compressor", "Water leaking", "Door seal worn"],
  },
  {
    icon: Zap,
    name: "Oven Repair",
    faults: ["Not heating up", "Tripping electrics", "Uneven cooking", "Grill fault", "Clock/timer fault", "Fan not working"],
  },
  {
    icon: Droplets,
    name: "Dishwasher Repair",
    faults: ["Not heating water", "Poor cleaning", "Not draining", "Door latch fault", "Blocked spray arms", "Error codes"],
  },
  {
    icon: Wind,
    name: "Tumble Dryer Repair",
    faults: ["Not heating", "Making noise", "Not tumbling", "Overheating", "Belt snapped", "Condensation fault"],
  },
  {
    icon: Fan,
    name: "Extractor Hood Repair",
    faults: ["Motor not working", "Lights failed", "Noisy fan", "Not extracting", "Controls faulty", "Filter blocked"],
  },
];

export default function Repairs() {
  return (
    <section id="repairs" className="py-32" style={{ background: "var(--coal)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="divider" />
            <span className="section-label">Repair Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-6">
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 600,
                color: "var(--parchment)",
                lineHeight: 1,
              }}
            >
              Common Repairs
            </h2>
            <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "1rem", color: "var(--mid-grey)", maxWidth: 380, lineHeight: 1.7 }}>
              Recognise the fault? Our engineers have seen it all — and fixed it all.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairTypes.map((repair) => {
            const Icon = repair.icon;
            return (
              <div
                key={repair.name}
                className="p-8 card-base"
                style={{ background: "var(--charcoal)" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(196,114,42,0.1)",
                      border: "1px solid rgba(196,114,42,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--copper)" }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "var(--parchment)",
                      lineHeight: 1.2,
                    }}
                  >
                    {repair.name}
                  </h3>
                </div>

                <ul className="flex flex-col gap-2">
                  {repair.faults.map((fault) => (
                    <li
                      key={fault}
                      className="flex items-center gap-3"
                      style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.85rem", color: "var(--mid-grey)" }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--copper)",
                          flexShrink: 0,
                          opacity: 0.7,
                        }}
                      />
                      {fault}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8"
          style={{ background: "var(--charcoal)", border: "1px solid rgba(196,114,42,0.2)" }}
        >
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "var(--parchment)" }}>
              Can't see your fault listed?
            </p>
            <p style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.9rem", color: "var(--mid-grey)" }}>
              Give us a call — we diagnose and repair a huge range of appliance faults.
            </p>
          </div>
          <a href="tel:01206638900" className="btn-primary" style={{ flexShrink: 0 }}>
            Call 01206 638900
          </a>
        </div>
      </div>
    </section>
  );
}
