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
        // `https://directscore.herokuapp.com/game/stats/${gameID}`;
        // `http://localhost:4000/game/stats/${gameID}`;
        const response = await axios.get(
          `http://localhost:4000/game/stats/${gameID}`
        );
        console.log(response.data);
        setGameStats(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    setLoading(true);
    getGameStats();
  }, [gameID]);

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
