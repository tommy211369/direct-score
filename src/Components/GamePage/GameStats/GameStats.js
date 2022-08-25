// Librairies
import { useState, useEffect } from "react";
import "./GameStats.css";
import axios from "axios";
import { split } from "../../../assets/functions";

// Component
import Loading from "../../Loading/Loading";

function GameStats({ gameID }) {
  const [loading, setLoading] = useState(true);
  const [gameStats, setGameStats] = useState(true);

  useEffect(() => {
    const getGameStats = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.data);
        setGameStats(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    setLoading(true);
    getGameStats();
  }, [gameID]);

  // Variables
  const options = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/matches/stats.json",
    params: {
      secret: process.env.REACT_APP_API_SECRET,
      key: process.env.REACT_APP_API_KEY,
      match_id: gameID,
    },
    headers: {
      "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

  return (
    <div className="GameStats">
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h1>Les Statistiques du Match</h1>
          {split(gameStats.attacks)}
        </>
      )}
    </div>
  );
}

export default GameStats;
