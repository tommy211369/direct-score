// Librairies
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { timeFormatter } from "../../assets/functions";
import bundesLogo from "../../assets/logo/bundes-logo.jpg";
import ligaLogo from "../../assets/logo/liga-logo.jpg";
import l1Logo from "../../assets/logo/ligue1-logo.jpg";
import plLogo from "../../assets/logo/pl-logo.jpg";
import serieALogo from "../../assets/logo/serieA-logo.jpg";

// Components
import Loading from "../Loading/Loading";

function Home() {
  const [L1Games, setL1Games] = useState([]);
  const [PLGames, setPLGames] = useState([]);
  const [LigaGames, setLigaGames] = useState([]);
  const [BundesligaGames, setBundesligaGames] = useState([]);
  const [SerieAGames, setSerieAGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLiveGames = async () => {
      try {
        const responseL1 = await axios.get(
          // `https://directscore.onrender.com/livegames?competition_id=5`
          // `http://localhost:4000/livegames?competition_id=5`
          `https://directscore.onrender.com/livegames?competition_id=5`
        );

        const responsePL = await axios.get(
          // `https://directscore.onrender.com/livegames?competition_id=2`
          // `http://localhost:4000/livegames?competition_id=2`
          `https://directscore.onrender.com/livegames?competition_id=2`
        );

        const responseLiga = await axios.get(
          // `https://directscore.onrender.com/livegames?competition_id=3`
          // `http://localhost:4000/livegames?competition_id=3`
          `https://directscore.onrender.com/livegames?competition_id=3`
        );

        const responseBundesliga = await axios.get(
          // `https://directscore.onrender.com/livegames?competition_id=1`
          // `http://localhost:4000/livegames?competition_id=1`
          `https://directscore.onrender.com/livegames?competition_id=1`
        );

        const responseSerieA = await axios.get(
          // `https://directscore.onrender.com/livegames?competition_id=4`
          // `http://localhost:4000/livegames?competition_id=4`
          `https://directscore.onrender.com/livegames?competition_id=4`
        );

        console.log(responseL1.data);
        console.log(responsePL.data);
        console.log(responseLiga.data);
        console.log(responseBundesliga.data);
        console.log(responseSerieA.data);

        setL1Games(responseL1.data);
        setPLGames(responsePL.data);
        setLigaGames(responseLiga.data);
        setBundesligaGames(responseBundesliga.data);
        setSerieAGames(responseSerieA.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    getLiveGames();
  }, []);

  return (
    <div className="Home">
      <h1>Matchs en directs</h1>

      <img src={l1Logo} alt="l1 logo" />

      {loading ? (
        <Loading />
      ) : (
        <div>
          {L1Games ? (
            L1Games.length > 0 ? (
              L1Games.map((game) => {
                return (
                  <Link
                    to={`/game/${game.id}`}
                    state={{ status: "LIVE", compet_ID: 5 }}
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
            ) : (
              <p className="no-game-message">
                Il n'y a pas de matchs de Ligue 1 pour le moment
              </p>
            )
          ) : (
            <p className="no-game-message">
              Il n'y a pas de matchs de Ligue 1 pour le moment
            </p>
          )}
        </div>
      )}

      <img src={plLogo} alt="premier league logo" />

      {loading ? (
        <Loading />
      ) : (
        <div>
          {PLGames ? (
            PLGames.length > 0 ? (
              PLGames.map((game) => {
                return (
                  <Link
                    to={`/game/${game.id}`}
                    state={{ status: "LIVE", compet_ID: 5 }}
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
            ) : (
              <p className="no-game-message">
                Il n'y a pas de matchs de Premier League pour le moment
              </p>
            )
          ) : (
            <p className="no-game-message">
              Il n'y a pas de matchs de Ligue 1 pour le moment
            </p>
          )}
        </div>
      )}

      <img src={ligaLogo} alt="liga logo" />

      {loading ? (
        <Loading />
      ) : (
        <div>
          {LigaGames ? (
            LigaGames.length > 0 ? (
              LigaGames.map((game) => {
                return (
                  <Link
                    to={`/game/${game.id}`}
                    state={{ status: "LIVE", compet_ID: 5 }}
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
            ) : (
              <p className="no-game-message">
                Il n'y a pas de matchs de Liga pour le moment
              </p>
            )
          ) : (
            <p className="no-game-message">
              Il n'y a pas de matchs de Ligue 1 pour le moment
            </p>
          )}
        </div>
      )}

      <img src={bundesLogo} alt="bundesliga logo" />

      {loading ? (
        <Loading />
      ) : (
        <div>
          {BundesligaGames ? (
            BundesligaGames.length > 0 ? (
              BundesligaGames.map((game) => {
                return (
                  <Link
                    to={`/game/${game.id}`}
                    state={{ status: "LIVE", compet_ID: 5 }}
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
            ) : (
              <p className="no-game-message">
                Il n'y a pas de matchs de Bundesliga pour le moment
              </p>
            )
          ) : (
            <p className="no-game-message">
              Il n'y a pas de matchs de Ligue 1 pour le moment
            </p>
          )}
        </div>
      )}

      <img src={serieALogo} alt="serie A logo" />

      {loading ? (
        <Loading />
      ) : (
        <div>
          {SerieAGames ? (
            SerieAGames.length > 0 ? (
              SerieAGames.map((game) => {
                return (
                  <Link
                    to={`/game/${game.id}`}
                    state={{ status: "LIVE", compet_ID: 5 }}
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
            ) : (
              <p className="no-game-message">
                Il n'y a pas de matchs de Serie A pour le moment
              </p>
            )
          ) : (
            <p className="no-game-message">
              Il n'y a pas de matchs de Ligue 1 pour le moment
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
