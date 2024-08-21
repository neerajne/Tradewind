import "./App.css";
import { AllRoutes } from "./landingPage.js/Allroutes/AllRoutes.js";
import { Footer } from "./landingPage.js/Footer.js";
import { Navbar } from "./landingPage.js/Navbar.js";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
