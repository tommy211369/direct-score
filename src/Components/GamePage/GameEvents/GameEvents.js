// Librairies
import React from "react";
import "./GameEvents.css";
import {
  yellow_card,
  red_card,
  substitution,
  goal,
  penalty,
  missed_penalty,
  own_goal,
} from "../../../assets/img";
import { capitalizeName } from "../../../assets/functions";

function GameEvents({ gameEvents, gameInfos }) {
  return (
    <div className="GameEvents">
      <h1>Événements marquants du match :</h1>
      {gameEvents
        .map((event) => {
          return (
            <div key={event.id} className="event">
              <span className="time">{event.time}'</span> :&nbsp;
              {event.event === "YELLOW_CARD" ? (
                <div className="yellow-red-card-goal">
                  <img src={yellow_card} alt="yellow_card" />
                  &nbsp;
                  <p>
                    Carton Jaune pour {capitalizeName(event.player)} -&nbsp;
                    {event.home_away === "h" ? (
                      <span>{gameInfos.home_name}</span>
                    ) : (
                      <span>{gameInfos.away_name}</span>
                    )}
                  </p>
                </div>
              ) : event.event === "RED_CARD" ? (
                <div className="yellow-red-card-goal">
                  <img src={red_card} alt="red_card" />
                  &nbsp;
                  <p>
                    Carton Rouge pour {capitalizeName(event.player)} -&nbsp;
                    {event.home_away === "h" ? (
                      <span>{gameInfos.home_name}</span>
                    ) : (
                      <span>{gameInfos.away_name}</span>
                    )}
                  </p>
                </div>
              ) : event.event === "SUBSTITUTION" ? (
                <div className="substitution_own_goal">
                  <img src={substitution} alt="changement" />
                  &nbsp;
                  <div>
                    <p>
                      Changement pour&nbsp;
                      {event.home_away === "h" ? (
                        <span>{gameInfos.home_name}</span>
                      ) : (
                        <span>{gameInfos.away_name}</span>
                      )}
                      &nbsp;:
                    </p>
                    <p>
                      Sortie de {capitalizeName(event.info)} remplacé par{" "}
                      {capitalizeName(event.player)}
                    </p>
                  </div>
                </div>
              ) : event.event === "GOAL" ? (
                <div className="yellow-red-card-goal">
                  <img src={goal} alt="goal" />
                  &nbsp;
                  <p>
                    But de {capitalizeName(event.player)} !! -&nbsp;
                    {event.home_away === "h" ? (
                      <span>{gameInfos.home_name}</span>
                    ) : (
                      <span>{gameInfos.away_name}</span>
                    )}
                  </p>
                </div>
              ) : event.event === "GOAL_PENALTY" ? (
                <div className="yellow-red-card-goal">
                  <img src={penalty} alt="penalty" />
                  &nbsp;
                  <p>
                    But sur PÉNALTY de {capitalizeName(event.player)} !! -&nbsp;
                    {event.home_away === "h" ? (
                      <span>{gameInfos.home_name}</span>
                    ) : (
                      <span>{gameInfos.away_name}</span>
                    )}
                  </p>
                </div>
              ) : event.event === "MISSED_PENALTY" ? (
                <div className="yellow-red-card-goal">
                  <img src={missed_penalty} alt="missed_penalty" />
                  &nbsp;
                  <p>
                    {capitalizeName(event.player)} loupe son pénalty ! -&nbsp;
                    {event.home_away === "h" ? (
                      <span>{gameInfos.home_name}</span>
                    ) : (
                      <span>{gameInfos.away_name}</span>
                    )}
                  </p>
                </div>
              ) : event.event === "OWN_GOAL" ? (
                <div className="substitution_own_goal">
                  <img src={goal} alt="own_penalty" />
                  &nbsp;
                  <div>
                    <p>
                      But pour&nbsp;
                      {event.home_away === "h" ? (
                        <span>{gameInfos.home_name}</span>
                      ) : (
                        <span>{gameInfos.away_name}</span>
                      )}
                      &nbsp;:
                    </p>
                    <p>
                      {capitalizeName(event.player)} marque contre camp ...
                      <img src={own_goal} alt="sad face" />
                      -&nbsp;
                      {event.home_away === "h" ? (
                        <span>{gameInfos.away_name}</span>
                      ) : (
                        <span>{gameInfos.home_name}</span>
                      )}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })
        .reverse()}
    </div>
  );
}

export default GameEvents;
