// Librairies
import React from "react";
import "./Fixtures.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { leagueName } from "../../../assets/functions";

// Components
import Loading from "../../Loading/Loading";
import NextPreviousGamesButton from "./NextPreviousGamesButton/NextPreviousGames";
import GameCard from "../../GameCard/GameCard";

function Fixtures({ compet_ID }) {
  const [fixtures, setFixtures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const response = await axios.get(
          // `https://directscore.onrender.com/fixtures?competition_id=${compet_ID}&page=${page}`
          // `http://localhost:4000/fixtures?competition_id=${compet_ID}&page=${page}`
          `https://directscore.onrender.com/fixtures?competition_id=${compet_ID}&page=${page}`
        );

        setFixtures(response.data.fixtures);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    setLoading(true);
    getFixtures();
  }, [compet_ID, page]);

  return (
    <div className="Fixtures">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>Les matchs de {leagueName(compet_ID)} à venir</h1>
          <NextPreviousGamesButton page={page} setPage={setPage} />

          {fixtures.map((game) => {
            return (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            );
          })}

          <NextPreviousGamesButton page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
}

export default Fixtures;
