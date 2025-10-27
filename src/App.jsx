import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import InstafoodHome from "./components/instafood/InstafoodHome";

import About from "./components/Bluelounge/About";
import ContactUs from "./components/Bluelounge/Contact";
import Services from "./components/Bluelounge/Services";
import InstaFoodServices from "./components/instafood/Servicesinsta";
import InstaFoodAbout from "./components/instafood/InstaAbout";
import InstaFoodContact from "./components/instafood/InstaContacts";
import BlueLoungeUltraFancy from "./components/Bluelounge/BlueLoungeHome";
import Landing from "./components/landing/Landing";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/b" element={<BlueLoungeUltraFancy />} />
        <Route path="/i" element={<InstafoodHome />} />
        <Route path="/a" element={<About />} />
        <Route path="/c" element={<ContactUs />} />
        <Route path="/s" element={<Services />} />
        <Route path="/si" element={<InstaFoodServices />} />
        <Route path="/k" element={<InstaFoodAbout />} />
        <Route path="/di" element={<InstaFoodContact />} />
      </Routes>
    </Router>
  );
}

export default App;
