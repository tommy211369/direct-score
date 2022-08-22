// Libraries
import { useState, useEffect } from "react";
import "./H2HComparaison.css";
import axios from "axios";

// Component
import Loading from "../../Loading/Loading";

function H2HComparaison({ homeID, awayID }) {
  const [loading, setLoading] = useState(true);
  const [homeTeam, setHomeTeam] = useState();
  const [awayTeam, setAwayTeam] = useState();
  const [homeTeamLast6, setHomeTeamLast6] = useState();
  const [awayTeamLast6, setAwayTeamLast6] = useState();

  useEffect(() => {
    setLoading(true);
    getComparaison();
  }, []);

  // Fonctions
  const getComparaison = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setHomeTeam(response.data.data.team1);
      setAwayTeam(response.data.data.team2);
      setHomeTeamLast6(response.data.data.team1_last_6);
      setAwayTeamLast6(response.data.data.team2_last_6);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  // Variables
  const options = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/teams/head2head.json",
    params: {
      secret: "DWGf42808FwfuilUITW7GrI1t59nYbgB",
      key: "qpx1pNvBl1n7TS1T",
      team2_id: awayID,
      team1_id: homeID,
    },
    headers: {
      "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

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
                    <span>{game.ft_score}</span>
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
                    <span>{game.ft_score}</span>
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
