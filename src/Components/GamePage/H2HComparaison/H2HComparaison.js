// Libraries
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./H2HComparaison.css";
import axios from "axios";

// Component
import Loading from "../../Loading/Loading";

function H2HComparaison({ homeID, awayID, compet_ID }) {
  const [loading, setLoading] = useState(true);
  const [homeTeam, setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();
  const [homeTeamLast6, setHomeTeamLast6] = useState();
  const [awayTeamLast6, setAwayTeamLast6] = useState();

  useEffect(() => {
    const getComparaison = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/h2h?team1_id=${homeID}&team2_id=${awayID}`
        );
        console.log(response.data);
        setHomeTeam(response.data.homeTeam);
        setAwayTeam(response.data.awayTeam);
        setHomeTeamLast6(response.data.homeTeamLast6);
        setAwayTeamLast6(response.data.awayTeamLast6);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getComparaison();
  }, [awayID, homeID]);

  return (
    <div className="H2HComparaison">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="overallForm">
            <div>
              {homeTeam.overall_form.map((form, index) => {
                if (form === "L") {
                  return (
                    <span key={index} className="lost">
                      D
                    </span>
                  );
                } else if (form === "W") {
                  return (
                    <span key={index} className="won">
                      V
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="draw">
                      N
                    </span>
                  );
                }
              })}
            </div>
            <h1>Série en Cours</h1>
            <div>
              {awayTeam.overall_form.map((form, index) => {
                if (form === "L") {
                  return (
                    <span key={index} className="lost">
                      D
                    </span>
                  );
                } else if (form === "W") {
                  return (
                    <span key={index} className="won">
                      V
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="draw">
                      N
                    </span>
                  );
                }
              })}
            </div>
          </div>

          <div className="last_6_games">
            <div>
              {homeTeamLast6.map((game) => {
                return (
                  <li key={game.id}>
                    <span>{game.home_name}</span>
                    <Link
                      to={`/game/${game.id}`}
                      state={{
                        status: "FINISHED",
                        compet_ID: compet_ID,
                      }}
                    >
                      <span>{game.ft_score}</span>
                    </Link>
                    <span>{game.away_name}</span>
                  </li>
                );
              })}
            </div>
            <h1>Derniers résultats des équipes</h1>
            <div>
              {awayTeamLast6.map((game) => {
                return (
                  <li key={game.id}>
                    <span>{game.home_name}</span>
                    <Link
                      to={`/game/${game.id}`}
                      state={{
                        status: "FINISHED",
                        compet_ID: compet_ID,
                      }}
                    >
                      <span>{game.ft_score}</span>
                    </Link>
                    <span>{game.away_name}</span>
                  </li>
                );
              })}
            </div>
          </div>

          <div className="lastH2H">
            <div>
              {homeTeam.h2h_form.map((form, index) => {
                if (form === "L") {
                  return (
                    <span key={index} className="lost">
                      D
                    </span>
                  );
                } else if (form === "W") {
                  return (
                    <span key={index} className="won">
                      V
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="draw">
                      N
                    </span>
                  );
                }
              })}
            </div>
            <h1>Derniers affrontements entre les équipes</h1>
            <div>
              {awayTeam.h2h_form.map((form, index) => {
                if (form === "L") {
                  return (
                    <span key={index} className="lost">
                      D
                    </span>
                  );
                } else if (form === "W") {
                  return (
                    <span key={index} className="won">
                      V
                    </span>
                  );
                } else {
                  return (
                    <span key={index} className="draw">
                      N
                    </span>
                  );
                }
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default H2HComparaison;
