import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Partners from "./components/Partners/Partners";
import Teams from "./components/Teams/Teams";
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
  return (
    <div className="App">
      <h1>Page d'accueil</h1>
      <News />
      <Partners />
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamName" element={<TeamDetail />} />
          <Route path="/club" element={<h1>Le club</h1>} />
          <Route path="/club/join" element={<h1>Inscription</h1>} />
          <Route path="/club/store" element={<h1>Boutique</h1>} />
          <Route path="/club/schedule" element={<h1>Planning</h1>} />
          <Route path="/club/news" element={<News />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
