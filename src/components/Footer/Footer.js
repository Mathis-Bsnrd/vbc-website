import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../logo-vbc.png";
import { Facebook, Instagram } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo VBC" />
        </div>

        <div className="footer-social">
          <Typography variant="h6" className="footer-title">
            Suivez-nous :
          </Typography>
          <Box className="social-icons">
            <IconButton
              component="a"
              href="https://www.facebook.com/VenansaultBasketClub/"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook sx={{ color: "white" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/venansaultbasketclub/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </div>

        <div className="footer-links">
          <Typography variant="h6" className="footer-title">
            Liens utiles :
          </Typography>
          <Link to="/privacy-policy" className="footer-link">
            Politique de confidentialité
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>

      <div className="footer-copyright">
        <Typography variant="body2" sx={{ color: "white" }}>
          &copy; {new Date().getFullYear()} Venansault Basket Club. Tous droits
          réservés.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
