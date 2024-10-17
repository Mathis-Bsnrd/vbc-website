import React from "react";
import "./Header.css";
import logo from "../../logo-vbc.png";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
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
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
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
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
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
            >
              Équipe 1
            </MenuItem>
            <MenuItem
              component={Link}
              to="/teams/equipe2"
              onClick={handleCloseTeams}
            >
              Équipe 2
            </MenuItem>
            <MenuItem
              component={Link}
              to="/teams/equipe3"
              onClick={handleCloseTeams}
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
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
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
            >
              Inscription
            </MenuItem>
            <MenuItem
              component={Link}
              to="/club/store"
              onClick={handleCloseClub}
            >
              Boutique
            </MenuItem>
            <MenuItem
              component={Link}
              to="/club/schedule"
              onClick={handleCloseClub}
            >
              Planning
            </MenuItem>
          </Menu>

          <Button
            component={Link}
            to="/partners"
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
          >
            Nos partenaires
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
          >
            Contact
          </Button>
        </nav>
      </header>
    </div>
  );
}
