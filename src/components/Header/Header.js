import React from "react";
import "./Header.css";
import logo from "../../logo-vbc.png";
import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
          <img src={logo} alt="Logo VBC"></img>
        </div>
        <nav className="nav">
          <Button
            href="#home"
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
          >
            Accueil
          </Button>

          {/* Menu Nos équipes */}
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
            <MenuItem onClick={handleCloseTeams}>Équipe 1</MenuItem>
            <MenuItem onClick={handleCloseTeams}>Équipe 2</MenuItem>
            <MenuItem onClick={handleCloseTeams}>Équipe 3</MenuItem>
            <MenuItem onClick={handleCloseTeams}>Équipe 4</MenuItem>
          </Menu>

          {/* Menu Le club */}
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
            <MenuItem onClick={handleCloseClub}>Inscription</MenuItem>
            <MenuItem onClick={handleCloseClub}>Boutique</MenuItem>
            <MenuItem onClick={handleCloseClub}>Planning</MenuItem>
          </Menu>

          <Button
            href="#partners"
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
          >
            Nos partenaires
          </Button>
          <Button
            href="#contact"
            sx={{ color: "white", fontWeight: "bold", textTransform: "none" }}
          >
            Contact
          </Button>
        </nav>
      </header>
    </div>
  );
}
