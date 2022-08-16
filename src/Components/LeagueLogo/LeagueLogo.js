// Librairies
import "./LeagueLogo.css";
import bundesLogo from "../../assets/logo/bundes-logo.jpg";
import ligaLogo from "../../assets/logo/liga-logo.jpg";
import ligue1Logo from "../../assets/logo/ligue1-logo.jpg";
import plLogo from "../../assets/logo/pl-logo.jpg";
import serieALogo from "../../assets/logo/serieA-logo.jpg";

function LeagueLogo({ id }) {
  return (
    <div className="LeagueLogo">
      {id === "5" ? (
        <img src={ligue1Logo} alt="logo Ligue 1" />
      ) : id === "1" ? (
        <img src={bundesLogo} alt="logo Bundesliga" />
      ) : id === "2" ? (
        <img src={plLogo} alt="logo Premier League" />
      ) : id === "3" ? (
        <img src={ligaLogo} alt="logo Liga" />
      ) : id === "4" ? (
        <img src={serieALogo} alt="logo Serie A" />
      ) : null}
    </div>
  );
}

export default LeagueLogo;
