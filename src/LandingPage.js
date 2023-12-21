import React from "react";
import Nav from "./components/Landingpage/Nav";
import Hero from "./components/Landingpage/Hero";
import Main from "./components/Landingpage/Main";
import Footer from "./components/Landingpage/Footer";

function LandingPage() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default LandingPage;
