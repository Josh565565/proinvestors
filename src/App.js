import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// library.add(fas, far, fab);
import React from "react";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import LandingPage from "./LandingPage";
import Owners from "./components/businessOwners/Owners";
import Investors from "./components/investors/Investors";
import BusinessOpportunity from "./components/businessOpportunity/BusinessOpportunity";
import AboutUs from "./components/aboutUs/AboutUs";
import { ImageProvider } from "./components/ImageContext";

function App() {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<LandingPage />} />
            <Route path="/owners" element={<Owners />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/opportunity" element={<BusinessOpportunity />} />
          </Route>
        </Routes>
      </Router>
    </ImageProvider>
  );
}

export default App;
library.add(fas, far, fab);
