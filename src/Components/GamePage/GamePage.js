// Librairies
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./GamePage.css";

// Competitions
import GameEvents from "./GameEvents/GameEvents";
import GameInfos from "./GameInfos/GameInfos";
import H2HComparaison from "./H2HComparaison/H2HComparaison";
import GameStats from "./GameStats/GameStats";
import Loading from "../Loading/Loading";
import GameNavButton from "./GameNavButton/GameNavButton";
import Button from "../Button/Button";

function GamePage({
  setShowHistory,
  showComparaison,
  setShowComparaison,
  showGameStats,
  setShowGameStats,
}) {
  const { id } = useParams();
  const location = useLocation();
  const { compet_ID } = location.state;

  const [gameEvents, setGameEvents] = useState([]);
  const [gameInfos, setGameInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGameEvents = async () => {
      try {
        // `https://directscore.onrender.com/game/${id}`
        // `http://localhost:4000/game/${id}`
        const response = await axios.get(`http://localhost:4000/game/${id}`);

        setGameEvents(response.data.events);
        setGameInfos(response.data.infos);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getGameEvents();
  }, [id]);

  return (
    <div className="GamePage">
      {loading ? (
        <Loading />
      ) : (
        <>
          <GameInfos gameEvents={gameEvents} gameInfos={gameInfos} />
          <Link to={`/competition/${compet_ID}`}>
            <Button
              func={() => {
                setShowHistory(false);
              }}
            >
              Retour
            </Button>
          </Link>

          <div className="navigation">
            <GameNavButton
              func={() => {
                setShowComparaison(true);
                setShowGameStats(false);
              }}
            >
              {"Le Duel".toUpperCase()}
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

          {showComparaison && !showGameStats ? (
            <H2HComparaison
              homeID={gameInfos.home_id}
              awayID={gameInfos.away_id}
              compet_ID={compet_ID}
            />
          ) : !showComparaison && showGameStats ? (
            <GameStats gameID={id} />
          ) : (
            <GameEvents gameEvents={gameEvents} gameInfos={gameInfos} />
          )}
        </>
      )}
    </div>
  );
}

export default GamePage;
