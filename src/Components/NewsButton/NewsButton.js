// Librairies
import "./NewsButton.css";
import { Link } from "react-router-dom";

// Material UI
import Button from "@mui/material/Button";

function NewsButton({
  setShowHistory,
  setShowComparaison,
  setShowGameStats,
  setShowStandings,
}) {
  return (
    <Link to="/news">
      <Button
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
          setShowStandings(false);
        }}
        className="home-button"
      >
        NEWS
      </Button>
    </Link>
  );
}

export default NewsButton;
