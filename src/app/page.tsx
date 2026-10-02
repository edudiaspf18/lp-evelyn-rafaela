import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
