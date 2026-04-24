"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const repairLinks = [
  { label: "Oven Repair", href: "#repairs" },
  { label: "Washing Machine", href: "#repairs" },
  { label: "Washer Dryer", href: "#repairs" },
  { label: "Fridge Freezer", href: "#repairs" },
  { label: "Tumble Dryer", href: "#repairs" },
  { label: "Dishwasher", href: "#repairs" },
  { label: "Extractor Hood", href: "#repairs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [repairsOpen, setRepairsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(6,13,31,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,114,42,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/logo-v4.png"
            alt="GS Appliance Ltd"
            width={64}
            height={64}
            style={{ objectFit: "contain", width: 64, height: 64 }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#services" className="nav-link">Oven Cleaning</a>

          {/* Repairs dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setRepairsOpen(true)}
            onMouseLeave={() => setRepairsOpen(false)}
          >
            <button className="nav-link flex items-center gap-1">
              Repairs <ChevronDown size={12} />
            </button>
            {repairsOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-48 py-2"
                style={{
                  background: "var(--charcoal)",
                  border: "1px solid rgba(196,114,42,0.2)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                {repairLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-xs font-body tracking-wider uppercase transition-colors"
                    style={{
                      color: "var(--light-grey)",
                      fontFamily: "'Figtree', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--copper-light)";
                      (e.target as HTMLElement).style.background = "rgba(196,114,42,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--light-grey)";
                      (e.target as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#team" className="nav-link">Our Team</a>
          <a href="#areas" className="nav-link">Coverage</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:01206638900"
            className="flex items-center gap-2 transition-colors"
            style={{ color: "var(--light-grey)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--copper-light)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--light-grey)")}
          >
            <Phone size={14} />
            <span style={{ fontFamily: "'Figtree', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}>
              01206 638900
            </span>
          </a>
          <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.75rem" }}>
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 transition-colors"
          style={{ color: "var(--light-grey)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-8 pt-4 flex flex-col gap-4"
          style={{ background: "rgba(6,13,31,0.98)", borderTop: "1px solid rgba(196,114,42,0.15)" }}
        >
          {["#services", "#repairs", "#team", "#areas", "#faq", "#contact"].map((href, i) => {
            const labels = ["Oven Cleaning", "Repairs", "Our Team", "Coverage", "FAQ", "Contact"];
            return (
              <a
                key={href}
                href={href}
                className="nav-link text-base"
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: "0.95rem", color: "var(--parchment)" }}
              >
                {labels[i]}
              </a>
            );
          })}
          <hr style={{ borderColor: "rgba(196,114,42,0.15)" }} />
          <a href="tel:01206638900" className="flex items-center gap-2" style={{ color: "var(--copper-light)" }}>
            <Phone size={14} /> 01206 638900
          </a>
          <a href="#contact" className="btn-primary text-center justify-center">Book Now</a>
        </div>
      )}
    </header>
  );
}
