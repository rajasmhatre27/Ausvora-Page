import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import EcommercePage from "../pages/EcommercePage";
import DigitalMarketing from "../pages/DigitalMarketing";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services/ecommerce" element={<EcommercePage />} />
    <Route path="/services/training" element={<DigitalMarketing />} />
  </Routes>
);

export default AppRoutes;
