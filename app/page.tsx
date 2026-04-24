import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Repairs from "@/components/Repairs";
import Team from "@/components/Team";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Repairs />
        <Team />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
