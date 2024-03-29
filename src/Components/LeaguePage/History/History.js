// Librairies
import axios from "axios";
import { Link } from "react-router-dom";
import "./History.css";
import { leagueName } from "../../../assets/functions";

// Material UI
import Button from "@mui/material/Button";

// Component
import Loading from "../../Loading/Loading";
import GameCard from "../../GameCard/GameCard";
import NextPreviousGamesButton from "./NextPreviousHistoryButton/NextPreviousHistoryButton";

function History({
  setShowHistory,
  history,
  loading,
  compet_ID,
  setHistory,
  page,
  setPage,
  setLoading,
  totalPage,
}) {
  const getPreviousHistory = async () => {
    await setPage(page - 1);

    try {
      const response = await axios.get(
        // `https://directscore.onrender.com/history/new?competition_id=${compet_ID}&page=${page - 1}`
        // `http://localhost:4000/history/new?competition_id=${compet_ID}&page=${page - 1}`
        `https://directscore.onrender.com/history/new?competition_id=${compet_ID}&page=${
          page - 1
        }`
      );

      setHistory(response.data.history);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getNextHistory = async () => {
    await setPage(page + 1);

    try {
      const response = await axios.get(
        // `https://directscore.onrender.com/history/new?competition_id=${compet_ID}&page=${page + 1}`
        // `http://localhost:4000/history/new?competition_id=${compet_ID}&page=${page + 1}`
        `https://directscore.onrender.com/history/new?competition_id=${compet_ID}&page=${
          page + 1
        }`
      );

      setHistory(response.data.history);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="History">
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="head">
              <h1 id="ReturnToTop">
                Résultats des matchs de {leagueName(compet_ID)}
              </h1>

              <Link to={`/competition/${compet_ID}`}>
                <Button
                  onClick={() => {
                    setShowHistory(false);
                  }}
                  variant="outlined"
                  className="back-button"
                >
                  Retour
                </Button>
              </Link>
            </div>

            <NextPreviousGamesButton
              setLoading={setLoading}
              getPreviousHistory={getPreviousHistory}
              page={page}
              totalPage={totalPage}
              getNextHistory={getNextHistory}
            />

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

            <NextPreviousGamesButton
              setLoading={setLoading}
              getPreviousHistory={getPreviousHistory}
              page={page}
              totalPage={totalPage}
              getNextHistory={getNextHistory}
            />
          </>
        )}
      </>
    </div>
  );
}

export default History;
