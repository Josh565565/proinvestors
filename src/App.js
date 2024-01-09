import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// library.add(fas, far, fab);
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate
} from "react-router-dom";

import LandingPage from "./LandingPage";
import Nav from "./components/Landingpage/Nav";
import DropdownMenu from "./components/Landingpage/DropdownMenu";
import Hero from "./components/Landingpage/Hero";
import Main from "./components/Landingpage/Main";
import Footer from "./components/Landingpage/Footer";
import SecondNav from "./components/businessOwners/SecondNav";
import Owners from "./components/businessOwners/Owners";
import Investors from "./components/investors/Investors";
import ThirdNav from "./components/businessOpportunity/ThirdNav";
import BusinessOpportunity from "./components/businessOpportunity/BusinessOpportunity";
import AboutUs from "./components/aboutUs/AboutUs";
import Newsletter from "./components/Landingpage/Newsletter";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
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
