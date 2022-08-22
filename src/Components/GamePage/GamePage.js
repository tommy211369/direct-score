// Librairies
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./GamePage.css";

// Competitions
import GameEvents from "./GameEvents/GameEvents";
import GameInfos from "./GameInfos/GameInfos";
import H2HComparaison from "./H2HComparaison/H2HComparaison";
import Loading from "../Loading/Loading";
import GameNavButton from "./GameNavButton/GameNavButton";
import Button from "../Button/Button";

function GamePage({ setShowHistory, showComparaison, setShowComparaison }) {
  const { id } = useParams();
  const location = useLocation();
  const { status, compet_ID } = location.state;

  const [gameEvents, setGameEvents] = useState([]);
  const [gameInfos, setGameInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGameEvents = async () => {
      try {
        const response = await axios.request(options);

        setGameEvents(response.data.data.event);
        setGameInfos(response.data.data.match);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getGameEvents();
  }, [id]);

  // Variables
  const options = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/scores/events.json",
    params: {
      secret: process.env.REACT_APP_API_SECRET,
      key: process.env.REACT_APP_API_KEY,
      id: id,
    },
    headers: {
      "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

  return (
    <div className="GamePage">
      {loading ? (
        <Loading />
      ) : (
        <>
          <GameInfos
            gameEvents={gameEvents}
            gameInfos={gameInfos}
            compet_ID={compet_ID}
          />
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
              }}
            >
              {"L'Avant Match".toUpperCase()}
            </GameNavButton>

            <GameNavButton
              func={() => {
                setShowComparaison(false);
              }}
            >
              {"Déroulement du match".toUpperCase()}
            </GameNavButton>
          </div>

          {showComparaison ? (
            <H2HComparaison
              homeID={gameInfos.home_id}
              awayID={gameInfos.away_id}
            />
          ) : (
            <GameEvents gameEvents={gameEvents} gameInfos={gameInfos} />
          )}
        </>
      )}
    </div>
  );
}

export default GamePage;
