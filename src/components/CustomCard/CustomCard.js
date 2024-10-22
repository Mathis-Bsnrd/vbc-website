import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import "./CustomCard.css";

export default function CustomCard({ items }) {
  const navigate = useNavigate();

  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  const handleCardClick = (item) => {
    const formattedTitle = formatTitle(item.title);
    navigate(`/teams/${formattedTitle}`, { state: { team: item } });
  };

  return (
    <div className="card-container">
      {items.map((item, index) => (
        <Card
          key={index}
          className="card"
          onClick={() => handleCardClick(item)}
        >
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
              <Typography
                gutterBottom
                component="div"
                className="card-description"
              >
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
