import React from "react";
import "./Header.css";
import logo from "../../logo-vbc.png";

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo VBC"></img>
    </div>
    <nav className="nav">
      <a href="#home">Accueil</a>
      <a href="#team">Nos équipes</a>
      <a href="#results">Le club</a>
      <a href="#schedule">Nos partenaires</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
