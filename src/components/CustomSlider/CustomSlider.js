import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSlider.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomSlider = ({ items, title }) => {
  const ArrowButton = ({ direction, onClick, icon: Icon }) => {
    return (
      <IconButton
        aria-label={`navigate-${direction}`}
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          [direction]: "-45px",
          transform: "translateY(-50%)",
          color: "black",
          backgroundColor: "white",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          fontSize: "30px",
          cursor: "pointer",
          borderRadius: "50%",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Icon />
      </IconButton>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <ArrowButton direction="right" icon={NavigateNextIcon} />,
    prevArrow: <ArrowButton direction="left" icon={NavigateBeforeIcon} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const navigate = useNavigate();

  const formatTitle = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  const handleSliderClick = (item) => {
    const formattedTitle = formatTitle(item.title);
    if (item.link) {
      window.open(item.link, "_blank");
    } else {
      navigate(`/club/news/${formattedTitle}`, { state: { news: item } });
    }
  };

  return (
    <div className="custom-slider">
      <h2>{title}</h2>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            onClick={() => handleSliderClick(item)}
          >
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
