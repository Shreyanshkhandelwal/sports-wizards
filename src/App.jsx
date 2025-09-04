import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Equipment from "./pages/Equipment";
import Infracture from "./pages/Infracture";
import Events from "./pages/Events";
import Coaching from "./pages/Coaching";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/infra" element={<Infracture />} />
        <Route path="/events" element={<Events />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
