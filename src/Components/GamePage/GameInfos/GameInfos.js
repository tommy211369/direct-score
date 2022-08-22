// Librairies
import React from "react";
import "./GameInfos.css";
import {
  dateLiveFormatter,
  timeFormatter,
  capitalizeName,
  leagueName,
} from "../../../assets/functions";
import { mini_ball } from "../../../assets/img";

function GameInfos({ gameEvents, gameInfos, compet_ID }) {
  const scorerListHome = [];
  const scorerListAway = [];

  for (let i = 0; i < gameEvents.length; i++) {
    if (gameEvents[i].event === "GOAL" && gameEvents[i].home_away === "h") {
      scorerListHome.push({
        name: capitalizeName(gameEvents[i].player),
        id: gameEvents[i].id,
        time: gameEvents[i].time,
      });
    }

    if (gameEvents[i].event === "GOAL" && gameEvents[i].home_away === "a") {
      scorerListAway.push({
        name: capitalizeName(gameEvents[i].player),
        id: gameEvents[i].id,
        time: gameEvents[i].time,
      });
    }
  }

  return (
    <div className="GameInfos">
      <div className="time-place">
        {/* <span>{dateLiveFormatter(gameInfos.added)}</span> */}
        {gameInfos.status !== "FINISHED" ? (
          <span>{timeFormatter(gameInfos.scheduled)}</span>
        ) : null}
        &nbsp;-&nbsp;
        <span>{gameInfos.location}</span>&nbsp;-&nbsp;
        <span>{leagueName(compet_ID)}</span>
      </div>
      <div className="game-status">
        {gameInfos.status === "IN PLAY" ? (
          <p>{gameInfos.time}'</p>
        ) : gameInfos.status === "HALF TIME BREAK" ? (
          <p>Mi-Temps</p>
        ) : gameInfos.status === "FINISHED" ? (
          <p>Fin du Match</p>
        ) : gameInfos.status === "ADDED TIME" ? (
          <p>{gameInfos.time}</p>
        ) : null}
      </div>
      <div className="teams">
        <div>
          <p>{gameInfos.home_name}</p>
          <div>
            {scorerListHome.length > 0
              ? scorerListHome.map((scorer) => {
                  return (
                    <div key={scorer.id} className="scorer">
                      <img src={mini_ball} alt="mini-ball" />
                      <span>{scorer.name}</span>
                      <span>{scorer.time}'</span>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className="score">
          <span>{gameInfos.score}</span>
          {gameInfos.ht_score ? (
            <span>Score à la Mi-Temps : {gameInfos.ht_score}</span>
          ) : null}
        </div>

        <div>
          <p>{gameInfos.away_name}</p>
          <div>
            {scorerListAway.length > 0
              ? scorerListAway.map((scorer) => {
                  return (
                    <div key={scorer.id} className="scorer">
                      <img src={mini_ball} alt="mini-ball" />
                      <span>{scorer.name}</span>
                      <span>{scorer.time}'</span>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameInfos;
