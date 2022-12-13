// Librairies
import { Link } from "react-router-dom";
import "./Header.css";
import directScorelogo from "../../assets/logo/direct_score_cover_photo_1.jpg";

function Header({
  setShowHistory,
  setShowComparaison,
  setShowGameStats,
  setShowStandings,
}) {
  return (
    <header>
      <Link
        to={"/"}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
          setShowStandings(false);
        }}
      >
        <img src={directScorelogo} alt="Logo Direct Score" />
      </Link>
    </header>
  );
}

export default Header;
