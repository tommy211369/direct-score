// Librairies
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./History.css";

// Component
import Loading from "../../Loading/Loading";
import GameCard from "../../GameCard/GameCard";
import Button from "../../Button/Button";

function History({
  numberOfPages,
  loading,
  history,
  setShowHistory,
  league,
  setPage,
  id,
}) {
  useEffect(() => {
    setPage(numberOfPages);
  }, [id]);

  return (
    <div className="History">
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>Résultats des matchs de {league.name} </h1>
            <Link to={`/competition/${league.id}`} state={{ league: league }}>
              <Button
                func={() => {
                  setShowHistory(false);
                }}
              >
                Retour
              </Button>
            </Link>
            {history
              .map((game) => {
                return (
                  <Link
                    to={`/game/${game.id}`}
                    state={{
                      status: "FINISHED",
                      leagueID: league.id,
                      league: league,
                    }}
                    key={game.id}
                  >
                    <GameCard game={game} />
                  </Link>
                );
              })
              .reverse()}
          </>
        )}
      </>
    </div>
  );
}

export default History;
