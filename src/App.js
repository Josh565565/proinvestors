import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// library.add(fas, far, fab);

import LandingPage from "./LandingPage";
import Nav from "./components/Landingpage/Nav";

function App() {
  return (
    <div>
      {/* <LandingPage /> */}
      <Nav />
    </div>
  );
}

export default App;
library.add(fas, far, fab);
