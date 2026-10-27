import { Contact, Faq, Footer, Testimonials } from "@/components/engage";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Process, Services, Stats, TechMarquee, WhyUs, Work } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <Work />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
