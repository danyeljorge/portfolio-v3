import React from "react";
import HudOverlay from "@/components/HudOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/motion/ScrollRevealObserver";

export default function Home() {
  return (
    <>
      <ScrollRevealObserver />
      <HudOverlay />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <FeaturedProjects />
        <TechStack />
        <ExperienceTimeline />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
