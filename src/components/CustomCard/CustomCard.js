import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import data from "../../data.json";
import "./CustomCard.css";

export default function CustomCard() {
  const [partnersItems, setPartnersItems] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON
    setPartnersItems(data.partnersItems);
  }, []);

  return (
    <div className="card-container">
      {partnersItems.map((item, index) => (
        <Card key={index} className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              className="card-image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
