import React, { useEffect, useState } from "react";
import CustomSlider from "../CustomSlider/CustomSlider";
import data from "../../data.json";
import { useLocation } from "react-router-dom";
import CustomCard from "../CustomCard/CustomCard";

function News() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Simule le chargement des données depuis le JSON
    setNewsItems(data.newsItems);
  }, []);

  const location = useLocation();
  const isNewsPage = location.pathname === "/club/news";

  return (
    <div>
      {isNewsPage ? (
        <div>
          <h1>Actualités du club</h1>
          <CustomCard items={newsItems} title="Nos partenaires" />
        </div>
      ) : (
        <div className="News">
          <CustomSlider items={newsItems} title="Actualités du club" />
        </div>
      )}
    </div>
  );
}

export default News;
