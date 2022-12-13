// Libraries
import "./Standings.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { leagueName } from "../../../assets/functions";

// Material UI
import Button from "@mui/material/Button";

// Components
import Loading from "../../Loading/Loading";

function Standings({ setShowStandings, compet_ID }) {
  const [standings, setStandings] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStandings = async () => {
      try {
        const response = await axios.get(
          // `https://directscore.onrender.com/livegames?competition_id=${compet_ID}`
          // `http://localhost:4000/livegames?competition_id=${compet_ID}`
          `https://directscore.onrender.com/standings?competition_id=${compet_ID}`
        );

        console.log(response.data.table);
        setStandings(response.data.table);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getStandings();
  }, [compet_ID]);

  return (
    <div className="Standings">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* Head */}
          <div className="head">
            <h1>Classement de {leagueName(compet_ID)} </h1>
            <Link to={`/competition/${compet_ID}`}>
              <Button
                onClick={() => {
                  setShowStandings(false);
                }}
                variant="outlined"
                className="back-button"
              >
                Retour
              </Button>
            </Link>
          </div>
          {/* End of Head */}

          {/* Standings */}
          <div className="table">
            <div className="table-legend">
              <p>#</p>
              <p>Equipe</p>
              <p>Pts</p>
              <p>J</p>
              <p>G</p>
              <p>N</p>
              <p>P</p>
              <p>BP</p>
              <p>BC</p>
              <p>DIF</p>
            </div>
            {standings.map((team) => {
              // eslint-disable-next-line no-lone-blocks
              {
                /* Team Line */
              }
              return (
                <div className="line" key={team.team_id}>
                  <div>{team.rank}</div>
                  <div>{team.name}</div>
                  <div>{team.points}</div>
                  <div>{team.matches}</div>
                  <div>{team.won}</div>
                  <div>{team.drawn}</div>
                  <div>{team.lost}</div>
                  <div>{team.goals_scored}</div>
                  <div>{team.goals_conceded}</div>
                  <div>{team.goal_diff}</div>
                </div>
              );
              // eslint-disable-next-line no-lone-blocks, no-unreachable
              {
                /* End of Team Line */
              }
            })}
          </div>
          {/* End of Standings */}
        </div>
      )}
    </div>
  );
}

export default Standings;
