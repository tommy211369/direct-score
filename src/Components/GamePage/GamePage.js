// Librairies
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./GamePage.css";

// Competitions
import GameEvents from "./GameEvents/GameEvents";
import GameInfos from "./GameInfos/GameInfos";
import Loading from "../Loading/Loading";
import Button from "../Button/Button";

function GamePage({ setShowHistory }) {
  const { id } = useParams();
  const location = useLocation();
  const { status, leagueID, league } = location.state;
  const [gameEvents, setGameEvents] = useState([]);
  const [gameInfos, setGameInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGameEvents = async () => {
      try {
        const response = await axios.request(options);
        setLoading(false);

        setGameEvents(response.data.data.event);
        setGameInfos(response.data.data.match);
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
      secret: "DWGf42808FwfuilUITW7GrI1t59nYbgB",
      key: "qpx1pNvBl1n7TS1T",
      id: id,
    },
    headers: {
      "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to={`/competition/${leagueID}`} state={{ league: league }}>
            <Button
              func={() => {
                setShowHistory(false);
              }}
            >
              Retour
            </Button>
          </Link>
          <GameInfos gameEvents={gameEvents} gameInfos={gameInfos} />
          <GameEvents gameEvents={gameEvents} gameInfos={gameInfos} />
        </>
      )}
    </div>
  );
}

export default GamePage;
