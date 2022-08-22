// Librairies
import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ setShowHistory, setShowComparaison }) {
  return (
    <nav className="Navigation">
      <Link
        to={`/competition/5`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        Ligue 1
      </Link>

      <Link
        to={`/competition/2`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        Premier League
      </Link>
      <Link
        to={`/competition/3`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        Liga
      </Link>
      <Link
        to={`/competition/1`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        Bundesliga
      </Link>
      <Link
        to={`/competition/4`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        Serie A
      </Link>
      <Link
        to={`/competition/4`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        UEFA Champion's League
      </Link>
      <Link
        to={`/competition/4`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        UEFA Europa league
      </Link>
      <Link
        to={`/competition/4`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
        }}
      >
        UEFA Conference League
      </Link>
    </nav>
  );
}

export default Navigation;
