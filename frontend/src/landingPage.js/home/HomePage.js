import React from "react";
import { HeroSection } from "./HeroSection";
import { Awards } from "./Awards";
import { Stats } from "./Stats";
import { Pricing } from "./Pricing";
import { Education } from "./Education";
import { OpenAcoount } from "../OpenAcoount";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAcoount />
    </>
  );
};
