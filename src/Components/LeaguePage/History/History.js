// Librairies
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./History.css";
import { leagueName } from "../../../assets/functions";

// Component
import Loading from "../../Loading/Loading";
import GameCard from "../../GameCard/GameCard";
import Button from "../../Button/Button";

function History({
  setShowHistory,
  setPage,
  history,
  loading,
  numberOfPages,
  compet_ID,
}) {
  useEffect(() => {
    setPage(numberOfPages);
  }, [compet_ID]);

  return (
    <div className="History">
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>Résultats des matchs de {leagueName(compet_ID)}</h1>
            <Link to={`/competition/${compet_ID}`}>
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
                      compet_ID: compet_ID,
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
