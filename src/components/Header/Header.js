import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">Venansault Basketball Club</div>
    <nav className="nav">
      <a href="#home">Accueil</a>
      <a href="#team">Équipe</a>
      <a href="#results">Résultats</a>
      <a href="#schedule">Calendrier</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
