import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { SignUp } from "../signUp/SignUp";
import { Product } from "../products/Product.js";
import { Support } from "../support/Support";
import { PricingPageComponenet } from "../pricing/PricingPageComponenet";
import { AboutPage } from "../about/AboutPage";
import { NotFound } from "../notFound/NotFound.js";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<PricingPageComponenet />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
