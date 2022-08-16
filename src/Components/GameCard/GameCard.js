// Librairies
import "./GameCard.css";
import { dateFormatter, timeFormatter } from "../../assets/functions";

function GameCard({ game }) {
  return (
    <div className="game">
      <p className="date_time">
        <span>{dateFormatter(game.date)}</span>
        {game.time !== "FT" ? (
          <span>&nbsp;- {timeFormatter(game.time)} - </span>
        ) : null}
        {game.round ? <span>{game.round}e journée</span> : null}
      </p>
      <p className="teams">
        <span className="home_team">{game.home_name}</span>
        {game.ft_score ? <span>{game.ft_score}</span> : <span>-</span>}

        <span className="away_team">{game.away_name}</span>
      </p>
      <p className="stadium">{game.location}</p>
    </div>
  );
}

export default GameCard;
