import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";

const News = () => {
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

  // Exemple de contenu du carousel
  const newsItems = [
    {
      title: "Victoire de l'équipe sénior",
      description: "L'équipe a remporté un match 100-12 contre Mouilleron.",
    },
    {
      title: "Tournoi 3x3",
      description: "Rejoignez-nous le 15 novembre pour un tournoi 3x3.",
    },
    {
      title: "Nouvelle saison",
      description: "La saison 2024 commence bientôt, soyez prêts !",
    },
    {
      title: "Nouvelle boutique !",
      description: "Découvrez la nouvelle boutique du club.",
    },
    {
      title: "Stage d'arbitrage",
      description:
        "Inscrivez-vous pour le stage d'arbitrage 2024 dès maintenant !",
    },
  ];

  return (
    <div>
      <h2>Actualités du Club</h2>
      <Slider {...settings}>
        {newsItems.map((news, index) => (
          <div key={index}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
