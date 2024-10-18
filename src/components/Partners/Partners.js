// src/App.js
import React, { useEffect, useState } from "react";
import CustomSlider from "../CustomSlider/CustomSlider";
import data from "../../data.json";
import { useLocation } from "react-router-dom";
import CustomCard from "../CustomCard/CustomCard";

function Partners() {
  const [partnersItems, setPartnersItems] = useState([]);

  useEffect(() => {
    // Simule le chargement des données depuis le JSON
    setPartnersItems(data.partnersItems);
  }, []);

  const location = useLocation();
  const isPartnersPage = location.pathname === "/partners";

  return (
    <div className="Partners">
      {isPartnersPage ? (
        <CustomCard items={partnersItems} title="Nos partenaires" />
      ) : (
        <CustomSlider items={partnersItems} title="Nos partenaires" />
      )}
    </div>
  );
}

export default Partners;
