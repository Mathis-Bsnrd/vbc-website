import React from "react";
import "./Shop.css";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Shop = () => {
  const handleOpenLink = () => {
    window.open(
      "https://www.helloasso.com/associations/venansault-basket-club/boutiques/boutique-vbc-24-25",
      "_blank"
    );
  };

  return (
    <div>
      <div>
        <h1>Boutique saison 2024 - 2025</h1>
        <img
          className="shop-image"
          src="https://venansaultbasket.fr/wp-content/uploads/2024/07/Boutique-BASKET-CLUB-VENANSAULT-2-pdf.jpg"
        />
      </div>
      <div className="shop-button">
        <Button
          variant="contained"
          onClick={handleOpenLink}
          endIcon={<AddShoppingCartIcon />}
          sx={{
            backgroundColor: "#A5120D",
            margin: "40px",
            width: "250px",
            height: "50px",
            fontSize: "22px",
            textTransform: "none",
          }}
        >
          Commander
        </Button>
      </div>
    </div>
  );
};

export default Shop;
