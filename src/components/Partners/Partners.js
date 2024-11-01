import React, { useEffect, useState } from "react";
import CustomSlider from "../CustomSlider/CustomSlider";
import { useLocation } from "react-router-dom";
import CustomCard from "../CustomCard/CustomCard";
import { getPartners } from "../../api/partnerApi";

function Partners() {
  const [partnersItems, setPartnersItems] = useState([]);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const data = await getPartners();
        setPartnersItems(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des partenaires", error);
      }
    };

    loadPartners();
  }, []);

  const location = useLocation();
  const isPartnersPage = location.pathname === "/partners";

  return (
    <div className="Partners">
      {isPartnersPage ? (
        <div>
          <h1>Nos partenaires</h1>
          <CustomCard items={partnersItems} title="Nos partenaires" />
        </div>
      ) : (
        <CustomSlider items={partnersItems} title="Nos partenaires" />
      )}
    </div>
  );
}

export default Partners;
