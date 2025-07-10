// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // 👈 Import here

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 Add this here before routes */}
      <Navbar />
      <div className="pt-20"> {/* to avoid overlap with fixed navbar */}
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
