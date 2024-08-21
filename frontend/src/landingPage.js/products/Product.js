import React from "react";
import { Hero } from "./Hero";
import { LeftSection } from "./LeftSection.js";
import { RightSection } from "./RightSection.js";
import { Universe } from "./Universe";
export const Product = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="/images/kite.png"
        ProductName="Kite"
        productDescription="Our ultra fast flagship trading platform with streaming market data, advanced charts, an elegent UI and more.Enjoy the kite experience seamlessly on your android and ios device ."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="/images/console.png"
        ProductName="Console"
        productDescription="The central dashboard for your zerodha account. Gain insights into your trades and investment with indepth report and visualisation."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftSection
        imageURL="/images/coin.png"
        ProductName="Coin"
        productDescription="By direct mutual funds online, commission-free,delievered directly to your demat account. Enjoy the investment experience on your android and iOS device"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="/images/kiteconnect.png"
        ProductName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftSection
        imageURL="/images/varsity.png"
        ProductName="Varsity"
        productDescription="An easy to grasp, collection of stock market lesson with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <Universe />
    </div>
  );
};
