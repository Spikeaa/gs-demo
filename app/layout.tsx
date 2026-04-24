import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GS Appliance Ltd | Repair & Oven Cleaning — Colchester, Essex",
  description: "Expert appliance repair and professional oven cleaning across Essex & Suffolk. 14+ years of hands-on experience. Washing machines, ovens, fridges, dishwashers and more. From £55.",
  keywords: "appliance repair Colchester, oven cleaning Essex, washing machine repair, fridge repair, dishwasher repair, GS Appliance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>{children}</body>
    </html>
  );
}
