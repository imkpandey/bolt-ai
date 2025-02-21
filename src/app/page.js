import CallToAction from "@/sections/CallToAction";
import Cover from "@/sections/Cover";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <Hero />
      <Cover />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
