// Librairies
import React from "react";
import "./Fixtures.css";
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loading from "../../Loading/Loading";
import NextPreviousGamesButton from "./NextPreviousGamesButton/NextPreviousGames";
import GameCard from "../../GameCard/GameCard";

// secret "DWGf42808FwfuilUITW7GrI1t59nYbgB"
// key "qpx1pNvBl1n7TS1T"

function Fixtures({ compet_ID, league }) {
  const [fixtures, setFixtures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const response = await axios.request(options);
        setLoading(false);
        setFixtures(response.data.data.fixtures);
      } catch (error) {
        console.log(error.response);
      }
    };
    setLoading(true);
    getFixtures();
  }, [compet_ID, page]);

  // Variables
  const options = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/fixtures/matches.json",
    params: {
      secret: "DWGf42808FwfuilUITW7GrI1t59nYbgB",
      key: "qpx1pNvBl1n7TS1T",
      competition_id: compet_ID,
      page: page,
    },
    headers: {
      "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

  return (
    <div className="Fixtures">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>Les matchs de {league.name} à venir</h1>
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
