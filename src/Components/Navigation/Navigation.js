// Librairies
import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

// Material UI
import Button from "@mui/material/Button";

function Navigation({ setShowHistory, setShowComparaison, setShowGameStats }) {
  return (
    <nav className="Navigation">
      <Link
        to={`/competition/5`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        <Button variant="contained" color="primary">
          {" "}
          Ligue 1
        </Button>
      </Link>

      <Link
        to={`/competition/2`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        <Button variant="contained" color="primary">
          {" "}
          Premier league
        </Button>
      </Link>
      <Link
        to={`/competition/3`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        <Button variant="contained" color="primary">
          {" "}
          Liga
        </Button>
      </Link>
      <Link
        to={`/competition/1`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        <Button variant="contained" color="primary">
          {" "}
          Bundesliga
        </Button>
      </Link>
      <Link
        to={`/competition/4`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        <Button variant="contained" color="primary">
          {" "}
          Serie A
        </Button>
      </Link>
      {/* <Link
        to={`/competition/244`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        UEFA Champion's League
      </Link>
      <Link
        to={`/competition/245`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        UEFA Europa league
      </Link>
      <Link
        to={`/competition/446`}
        onClick={() => {
          setShowHistory(false);
          setShowComparaison(false);
          setShowGameStats(false);
        }}
      >
        UEFA Conference League
      </Link> */}
    </nav>
  );
}

export default Navigation;
