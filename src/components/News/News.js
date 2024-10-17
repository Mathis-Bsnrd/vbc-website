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
      description: "L'équipe a remporté le match 100-12 contre Mouilleron.",
      image:
        "https://cdn.helloasso.com/img/logos/venansault-basket-club-ffe0e0b4b7d74d9fbe5675e8f0bee22f.jpg",
    },
    {
      title: "Tournoi 3x3",
      description: "Rejoignez-nous le 15 novembre pour un tournoi 3x3.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbVA_2SSkWgXBy-vB5OiPcVjJ2ncciVdVhg&s",
    },
    {
      title: "Nouvelle saison",
      description: "La saison 2024 commence bientôt, soyez prêts !",
      image:
        "https://venansaultbasket.fr/wp-content/uploads/2022/07/Site-internet.png",
    },
    {
      title: "Nouvelle boutique !",
      description: "Découvrez la nouvelle boutique du club.",
      image:
        "https://cdn.helloasso.com/img/photos/shops/croppedimage-a52ba4d540524b5b89e88a16c8db425b.png",
    },
    {
      title: "Stage d'arbitrage",
      description:
        "Inscrivez-vous pour le stage d'arbitrage 2024 dès maintenant !",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo-DeS0sE8qOubZdr841xxDGYNn0yhR95Lg&s",
    },
  ];

  return (
    <div className="newsItem">
      <h2>Actualités du Club</h2>
      <Slider {...settings}>
        {newsItems.map((news, index) => (
          <div key={index} className="item">
            <img src={news.image} alt={news.title} className="newsImage" />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default News;
