import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";

import Achievements from "@/components/achievements/Achievements";
import MyHero from "@/components/ui/myhero";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "One Touch",
  description: "One Touch",
  icons: {
    icon: "/favicon.ico",
  },
  // other metadata
};

export default function Home() {
  return (
    <>
      <Suspense fallback={<h1>loading</h1>}>
        <ScrollUp />
        <MyHero />
        <Features />
        {/* <Video /> */}
        <Brands />
        <AboutSectionOne />
        <AboutSectionTwo />
        <Achievements />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <Blog /> */}
        <Contact />
      </Suspense>
    </>
  );
}
