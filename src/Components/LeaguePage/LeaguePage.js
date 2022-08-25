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
  const [numberOfPages, setNumberOfPages] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getHistory();
  }, [id, page]);

  // Fonctions
  const getHistory = async () => {
    try {
      const response = await axios.request(options);

      setNumberOfPages(response.data.data.total_pages);
      setHistory(response.data.data.match);
      console.log("History :", history);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  // Variables
  const options = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/scores/history.json",
    params: {
      secret: process.env.REACT_APP_API_SECRET,
      key: process.env.REACT_APP_API_KEY,
      competition_id: id,
      page: page,
    },
    headers: {
      "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

  return (
    <div className="LeaguePage">
      <div className="header">
        <div>
          <LeagueLogo id={id} />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : !showHistory ? (
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
          setPage={setPage}
          history={history}
          loading={loading}
          numberOfPages={numberOfPages}
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
