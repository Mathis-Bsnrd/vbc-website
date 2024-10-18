// src/App.js
import React, { useEffect, useState } from "react";
import CustomSlider from "../CustomSlider/CustomSlider";
import data from "../../data.json";

function News() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Simule le chargement des données depuis le JSON
    setNewsItems(data.newsItems);
  }, []);

  return (
    <div className="News">
      <CustomSlider items={newsItems} title="Actualités du Club" />
    </div>
  );
}

export default News;
