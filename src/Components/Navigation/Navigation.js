// Librairies
import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({
  ligue1,
  premierLeague,
  liga,
  bundesliga,
  serieA,
  setShowHistory,
}) {
  return (
    <nav className="Navigation">
      <Link
        to={`/competition/5`}
        state={{ league: ligue1 }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        Ligue 1
      </Link>

      <Link
        to={`/competition/2`}
        state={{ league: premierLeague }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        Premier League
      </Link>
      <Link
        to={`/competition/3`}
        state={{ league: liga }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        Liga
      </Link>
      <Link
        to={`/competition/1`}
        state={{ league: bundesliga }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        Bundesliga
      </Link>
      <Link
        to={`/competition/4`}
        state={{ league: serieA }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        Serie A
      </Link>
      <Link
        to={`/competition/4`}
        state={{ league: serieA }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        UEFA Champion's League
      </Link>
      <Link
        to={`/competition/4`}
        state={{ league: serieA }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        UEFA Europa league
      </Link>
      <Link
        to={`/competition/4`}
        state={{ league: serieA }}
        onClick={() => {
          setShowHistory(false);
        }}
      >
        UEFA Conference League
      </Link>
    </nav>
  );
}

export default Navigation;
