import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// library.add(fas, far, fab);

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

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      {/* <Nav /> */}
      {/* <DropdownMenu /> */}
      {/* <Hero /> */}
      {/* <Main /> */}
      {/* <LandingPage /> */}
      {/* <Footer /> */}
      {/* <SecondNav /> */}
      {/* <Owners /> */}
      {/* <Investors /> */}
      {/* <ThirdNav /> */}
      {/* <BusinessOpportunity /> */}
      <AboutUs />
      {/* <Newsletter /> */}
    </div>
  );
}

export default App;
library.add(fas, far, fab);
