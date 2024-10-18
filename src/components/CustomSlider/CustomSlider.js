// src/components/CustomSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css";

const CustomSlider = ({ items, title }) => {
  // Configuration du carousel
  const settings = {
    dots: true, // Affiche des points de navigation
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de défilement
    slidesToShow: 3, // Nombre d'éléments affichés à la fois
    slidesToScroll: 1, // Nombre d'éléments à faire défiler à la fois
    autoplay: true, // Défilement automatique
    autoplaySpeed: 4000, // Temps d'attente entre deux défilements
    responsive: [
      {
        breakpoint: 1024, // Ajuste pour les écrans de taille moyenne
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Ajuste pour les petits écrans
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="custom-slider">
      <h2>{title}</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="item">
            <img src={item.image} alt={item.title} className="item-image" />
            <div className="card-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
