// Librairies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./LeaguePage.css";
import axios from "axios";
import { leagueName } from "../../assets/functions";

// Components
import History from "./History/History";
import Fixtures from "./Fixtures/Fixtures";
import LiveGames from "./LiveGames/LiveGames";
import LeagueLogo from "../LeagueLogo/LeagueLogo";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

function LeaguePage({ showHistory, setShowHistory }) {
  const { id } = useParams();

  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(
          // `https://directscore.onrender.com/history?competition_id=${id}&page=${page}`
          // `http://localhost:4000/history?competition_id=${id}&page=${page}`
          `https://directscore.onrender.com/history?competition_id=${id}&page=${page}`
        );

        setHistory(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getHistory();
  }, [id, page]);

  return (
    <div className="LeaguePage">
      <div className="header">
        <div>
          <LeagueLogo id={id} />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : !showHistory && history ? (
        <div>
          <Button
            func={() => {
              setShowHistory(true);
            }}
          >
            Voir les résultats des matchs de {leagueName(id)}
          </Button>
        </div>
      ) : null}

      {showHistory ? (
        <History
          setShowHistory={setShowHistory}
          history={history}
          loading={loading}
          compet_ID={id}
        />
      ) : (
        <>
          <LiveGames compet_ID={id} />
          <Fixtures compet_ID={id} />
        </>
      )}
    </div>
  );
}

export default LeaguePage;
