// Librairies
import * as React from "react";
import "./MenuNav.css";
import { Link } from "react-router-dom";

// Material UI
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function MenuNav({
  setShowHistory,
  setShowComparaison,
  setShowGameStats,
  setShowStandings,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="MenuNav">
      <MenuIcon
        fontSize="large"
        className="MenuIcon"
        color="primary"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          component={Link}
          to={"/"}
          onClick={() => {
            handleClose();
            setShowHistory(false);
            setShowComparaison(false);
            setShowGameStats(false);
            setShowStandings(false);
          }}
        >
          ACCUEIL
        </MenuItem>
        <MenuItem
          component={Link}
          to={`/competition/5`}
          onClick={() => {
            handleClose();
            setShowHistory(false);
            setShowComparaison(false);
            setShowGameStats(false);
            setShowStandings(false);
          }}
        >
          LIGUE 1
        </MenuItem>

        <MenuItem
          component={Link}
          to={`/competition/2`}
          onClick={() => {
            handleClose();
            setShowHistory(false);
            setShowComparaison(false);
            setShowGameStats(false);
            setShowStandings(false);
          }}
        >
          PREMIER LEAGUE
        </MenuItem>

        <MenuItem
          component={Link}
          to={`/competition/3`}
          onClick={() => {
            handleClose();
            setShowHistory(false);
            setShowComparaison(false);
            setShowGameStats(false);
            setShowStandings(false);
          }}
        >
          LIGA
        </MenuItem>

        <MenuItem
          component={Link}
          to={`/competition/1`}
          onClick={() => {
            handleClose();
            setShowHistory(false);
            setShowComparaison(false);
            setShowGameStats(false);
            setShowStandings(false);
          }}
        >
          BUNDESLIGA
        </MenuItem>

        <MenuItem
          component={Link}
          to={`/competition/4`}
          onClick={() => {
            handleClose();
            setShowHistory(false);
            setShowComparaison(false);
            setShowGameStats(false);
            setShowStandings(false);
          }}
        >
          SERIE A
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MenuNav;
