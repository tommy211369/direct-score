// Librairies
import "./Header.css";
import directScorelogo from "../../assets/logo/direct_score_cover_photo_1.jpg";

function Header() {
  return (
    <header>
      <img src={directScorelogo} alt="Logo Direct Score" />
    </header>
  );
}

export default Header;
