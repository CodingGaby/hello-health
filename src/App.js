import "./App.css";
//Import para la navegación de la pagina, para las rutas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MedicinesPage from "./Pages/MedicinesPage";
import Navbar from "./Components/Navbar";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/medicamentos" element={<MedicinesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>

      <div></div>
    </>
  );
}

export default App;
