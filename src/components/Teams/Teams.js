import React, { useEffect, useState } from "react";
import data from "../../data.json";
import CustomCard from "../CustomCard/CustomCard";

function Teams() {
  const [teamsItems, setTeamsItems] = useState([]);

  useEffect(() => {
    // Simule le chargement des données depuis le JSON
    setTeamsItems(data.teamsItems);
  }, []);

  return (
    <div className="Teams">
      <h1>Nos équipes</h1>
      <CustomCard items={teamsItems} title="Nos équipes" />
    </div>
  );
}

export default Teams;
