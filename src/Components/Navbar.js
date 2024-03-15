import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          Hello Health
        </a>  
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/medicamentos">Medicamentos</Link>
        </li>
        <li>
          <Link to="/about">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  </>
);


export default Navbar;
