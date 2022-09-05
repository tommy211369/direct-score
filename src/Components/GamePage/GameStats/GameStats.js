// Librairies
import { useState, useEffect } from "react";
import "./GameStats.css";
import axios from "axios";
import { statsDataFormat, translate } from "../../../assets/functions";

// Component
import Loading from "../../Loading/Loading";

function GameStats({ gameID }) {
  const [loading, setLoading] = useState(true);
  const [gameStats, setGameStats] = useState();

  useEffect(() => {
    const getGameStats = async () => {
      try {
        // ``https://directscore.onrender.com/game/stats/${gameID}`;
        // `http://localhost:4000/game/stats/${gameID}`;
        const response = await axios.get(
          `http://localhost:4000/game/stats/${gameID}`
        );
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
          {statsDataFormat(gameStats).map((stat, index) => {
            return (
              <div key={index} className="stat">
                <span>{stat[0]}</span>
                <span>{translate(stat[1])}</span>
                <span>{stat[2]}</span>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default GameStats;
