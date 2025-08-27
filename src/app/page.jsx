"use client"

import gsap from "gsap"
import ScrollSmoother from "gsap/ScrollSmoother"
import ScrollTrigger from "gsap/ScrollTrigger"
import AbilitySection from "./ability-section/ability"
import ApproachSection from "./approach-section/page"
import Footer from "./components/footer"
import HeroSection from "./hero-section/hero"
import MeetUsSection from "./meet-us-section/page"
import ProjectSection from "./project-section/project"
import WhyUsSection from "./why-us-section/page"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() {

  return (
    <div className="relative bg-beluga w-full">
      <div className="w-full md:max-w-[90rem] h-dvh">
        <HeroSection />
      </div>
      <div className="w-full h-[32rem] bg-charcoal">
        <MeetUsSection />
      </div>
      <div className="w-full h-max mx-auto">
        <ApproachSection />
      </div>
      <div className="w-full md:max-w-[90rem] h-dvh my-16">
        <AbilitySection />
      </div>
      <div className="w-full md:max-w-[90rem] dvh mx-auto">
        <ProjectSection />
      </div>
      <div className="w-full md:max-w-[90rem] h-max mx-auto">
        <WhyUsSection />
      </div>
      {/* <div className="max-w-[90rem] dvh">
          <TestimonialsSection />
        </div> */}
      <div className="w-full dvh">
        <Footer />
      </div>
    </div>
  );
}
