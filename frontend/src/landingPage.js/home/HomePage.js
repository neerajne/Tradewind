import React from "react";
import { useEffect } from "react";
import { HeroSection } from "./HeroSection";
import { Awards } from "./Awards";
import { Stats } from "./Stats";
import { Pricing } from "./Pricing";
import { Education } from "./Education";
import { OpenAcoount } from "../OpenAcoount";

export const HomePage = () => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      window.location.href = "http://localhost:3002/";
    }
  }, []);
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
