// Librairies
import React from "react";
import "./LiveGames.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { timeFormatter } from "../../../assets/functions";

// Components
import Loading from "../../Loading/Loading";

function LiveGames({ compet_ID }) {
  const [liveGames, setLiveGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLiveGames = async () => {
      try {
        const response = await axios.get(
          // `https://directscore.onrender.com/livegames?competition_id=${compet_ID}`
          // `http://localhost:4000/livegames?competition_id=${compet_ID}`
          `https://directscore.onrender.com/livegames?competition_id=${compet_ID}`
        );

        setLiveGames(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    setLoading(true);
    getLiveGames();
  }, [compet_ID]);

  return (
    <div className="LiveGames">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {liveGames
            ? liveGames.length > 0
              ? liveGames.map((game) => {
                  return (
                    <Link
                      to={`/game/${game.id}`}
                      state={{ status: "LIVE", compet_ID: compet_ID }}
                      key={game.id}
                    >
                      <div className="game">
                        <p className="teams">
                          <span className="home_team">{game.home_name}</span>{" "}
                          {game.status === "IN PLAY" || "HALF TIME BREAK" ? (
                            <span className="score">{game.score}</span>
                          ) : (
                            <span>-</span>
                          )}{" "}
                          <span className="away_team">{game.away_name}</span>
                        </p>
                        {game.status === "IN PLAY" ? (
                          <p className="time">{game.time}'</p>
                        ) : game.status === "HALF TIME BREAK" ? (
                          <p className="time">
                            <p className="time">Mi-Temps</p>
                          </p>
                        ) : game.status === "FINISHED" ? (
                          <p className="time">
                            <p className="time">Fin du Match</p>
                          </p>
                        ) : game.status === "ADDED TIME" ? (
                          <p className="time">
                            <p className="time">{game.time}</p>
                          </p>
                        ) : (
                          <p className="time">
                            Début du match à {timeFormatter(game.scheduled)}
                          </p>
                        )}

                        <p className="stadium">{game.location}</p>
                      </div>
                    </Link>
                  );
                })
              : null
            : null}
        </div>
      )}
    </div>
  );
}

export default LiveGames;
