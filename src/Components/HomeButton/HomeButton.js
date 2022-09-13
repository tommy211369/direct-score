// Librairies
import "./HomeButton.css";
import { Link } from "react-router-dom";

// Material UI
import Button from "@mui/material/Button";

function HomeButton({ setShowHistory, setShowComparaison, setShowGameStats }) {
  return (
    <Link to="/">
      <Button
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
        className="home-button"
      >
        ACCUEIL
      </Button>
    </Link>
  );
}

export default HomeButton;
