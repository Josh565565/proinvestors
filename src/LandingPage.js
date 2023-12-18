import React from "react";
import Nav from "./components/Landingpage/Nav";
import Hero from "./components/Landingpage/Hero";
import Main from "./components/Landingpage/Main";

function LandingPage() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Hero />
      <Main />
    </div>
  );
}

export default LandingPage;
