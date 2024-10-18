// src/App.js
import React, { useEffect, useState } from "react";
import CustomSlider from "../CustomSlider/CustomSlider";
import data from "../../data.json";

function Partners() {
  const [partnersItems, setPartnersItems] = useState([]);

  useEffect(() => {
    // Simule le chargement des données depuis le JSON
    setPartnersItems(data.partnersItems);
  }, []);

  return (
    <div className="Partners">
      <CustomSlider items={partnersItems} title="Nos partenaires" />
    </div>
  );
}

export default Partners;
