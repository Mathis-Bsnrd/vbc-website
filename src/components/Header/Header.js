import React from "react";
import "./Header.css";
import logo from "../../logo-vbc.png";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

export default function Header() {
  // État pour le menu "Nos équipes"
  const [anchorElTeams, setAnchorElTeams] = React.useState(null);
  const openTeams = Boolean(anchorElTeams);
  const handleClickTeams = (event) => {
    setAnchorElTeams(event.currentTarget);
  };
  const handleCloseTeams = () => {
    setAnchorElTeams(null);
  };

  // État pour le menu "Le club"
  const [anchorElClub, setAnchorElClub] = React.useState(null);
  const openClub = Boolean(anchorElClub);
  const handleClickClub = (event) => {
    setAnchorElClub(event.currentTarget);
  };
  const handleCloseClub = () => {
    setAnchorElClub(null);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo VBC" />
          </Link>
        </div>
        <nav className="nav">
          <Button
            component={Link}
            to="/"
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              minWidth: "120px",
              fontSize: "16px",
            }}
          >
            Accueil
          </Button>

          <Button
            id="basic-button"
            aria-controls={openTeams ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openTeams ? "true" : undefined}
            onClick={handleClickTeams}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              minWidth: "120px",
              fontSize: "16px",
            }}
          >
            Nos équipes
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorElTeams}
            open={openTeams}
            onClose={handleCloseTeams}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              component={Link}
              to="/teams/equipe1"
              onClick={handleCloseTeams}
              sx={{ minWidth: "120px", fontSize: "16px" }}
            >
              Équipe 1
            </MenuItem>
            <MenuItem
              component={Link}
              to="/teams/equipe2"
              onClick={handleCloseTeams}
              sx={{ minWidth: "120px", fontSize: "16px" }}
            >
              Équipe 2
            </MenuItem>
            <MenuItem
              component={Link}
              to="/teams/equipe3"
              onClick={handleCloseTeams}
              sx={{ minWidth: "120px", fontSize: "16px" }}
            >
              Équipe 3
            </MenuItem>
          </Menu>

          <Button
            id="basic-button2"
            aria-controls={openClub ? "basic-menu2" : undefined}
            aria-haspopup="true"
            aria-expanded={openClub ? "true" : undefined}
            onClick={handleClickClub}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              minWidth: "120px",
              fontSize: "16px",
            }}
          >
            Le club
          </Button>
          <Menu
            id="basic-menu2"
            anchorEl={anchorElClub}
            open={openClub}
            onClose={handleCloseClub}
            MenuListProps={{
              "aria-labelledby": "basic-button2",
            }}
          >
            <MenuItem
              component={Link}
              to="/club/join"
              onClick={handleCloseClub}
              sx={{ minWidth: "120px", fontSize: "16px" }}
            >
              Inscription
            </MenuItem>
            <MenuItem
              component={Link}
              to="/club/store"
              onClick={handleCloseClub}
              sx={{ minWidth: "120px", fontSize: "16px" }}
            >
              Boutique
            </MenuItem>
            <MenuItem
              component={Link}
              to="/club/schedule"
              onClick={handleCloseClub}
              sx={{ minWidth: "120px", fontSize: "16px" }}
            >
              Planning
            </MenuItem>
          </Menu>

          <Button
            component={Link}
            to="/partners"
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              minWidth: "120px",
              fontSize: "16px",
            }}
          >
            Nos partenaires
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "none",
              minWidth: "120px",
              fontSize: "16px",
            }}
          >
            Contact
          </Button>
        </nav>
      </header>
    </div>
  );
}
