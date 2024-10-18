import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Planning from "./components/Planning/Planning";

function App() {
  return (
    <div>
      <h1>Page d'accueil</h1>
    </div>
  );
}

function TeamDetail({ teamName }) {
  return <h1>{teamName}</h1>;
}

function AppRouter() {
  return (
    <Router>
      <div className="center-component">
        <Header />

        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<App />} />
          {/* Autres routes */}
          <Route path="/teams" element={<h1>Nos équipes</h1>} />
          {/* Sous-routes pour chaque équipe */}
          <Route
            path="/teams/equipe1"
            element={<TeamDetail teamName="Équipe 1" />}
          />
          <Route
            path="/teams/equipe2"
            element={<TeamDetail teamName="Équipe 2" />}
          />
          <Route
            path="/teams/equipe3"
            element={<TeamDetail teamName="Équipe 3" />}
          />
          <Route path="/club" element={<h1>Le club</h1>} />
          <Route path="/club/join" element={<h1>Inscription</h1>} />
          <Route path="/club/store" element={<h1>Boutique</h1>} />
          <Route path="/club/schedule" element={<Planning />} />
          <Route path="/partners" element={<h1>Nos partenaires</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
