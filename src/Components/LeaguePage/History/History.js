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
    console.log("getNewHistory previous page :", page - 1);
    try {
      const response = await axios.get(
        // `https://directscore.onrender.com/history?competition_id=${compet_ID}&page=${page - 1}`
        // `http://localhost:4000/history?competition_id=${compet_ID}&page=${page - 1}`
        `https://directscore.onrender.com/history?competition_id=${compet_ID}&page=${
          page - 1
        }`
      );

      console.log("PREVIOUS HISTORY MESSAGE:", response.data.message);
      console.log("PREVIOUS HISTORY :", response.data.history);
      console.log("PREVIOUS PAGE :", response.data.page);
      setHistory(response.data.history);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getNextHistory = async () => {
    await setPage(page + 1);
    console.log("getNewHistory previous page :", page + 1);
    try {
      const response = await axios.get(
        // `https://directscore.onrender.com/history?competition_id=${compet_ID}&page=${page + 1}`
        // `http://localhost:4000/history?competition_id=${compet_ID}&page=${page + 1}`
        `https://directscore.onrender.com/history?competition_id=${compet_ID}&page=${
          page + 1
        }`
      );

      console.log("NEXT HISTORY MESSAGE:", response.data.message);
      console.log("NEXT HISTORY :", response.data.history);
      console.log("NEXT PAGE :", response.data.page);
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
