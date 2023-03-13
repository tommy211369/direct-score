// Librairies
import "./GameNavigation.css";

// Components
import GameNavButton from "./GameNavButton/GameNavButton";

function GameNavigation({ setShowComparaison, setShowGameStats }) {
  return (
    <div className="GameNavigation">
      <GameNavButton
        func={() => {
          setShowComparaison(true);
          setShowGameStats(false);
        }}
      >
        {"Face à Face".toUpperCase()}
      </GameNavButton>

      <GameNavButton
        func={() => {
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        {"Déroulement du match".toUpperCase()}
      </GameNavButton>

      <GameNavButton
        func={() => {
          setShowComparaison(false);
          setShowGameStats(true);
        }}
      >
        {"Les Stats du Match".toUpperCase()}
      </GameNavButton>
    </div>
  );
}

export default GameNavigation;
