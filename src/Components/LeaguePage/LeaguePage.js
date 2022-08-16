// Librairies
import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./LeaguePage.css";
import axios from "axios";

// Components
import History from "./History/History";
import Fixtures from "./Fixtures/Fixtures";
import LiveGames from "./LiveGames/LiveGames";
import LeagueLogo from "../LeagueLogo/LeagueLogo";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";

function LeaguePage({ showHistory, setShowHistory }) {
  const { id } = useParams();
  const location = useLocation();
  const { league } = location.state;

  const [history, setHistory] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [page, setPage] = useState();
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
      secret: "DWGf42808FwfuilUITW7GrI1t59nYbgB",
      key: "qpx1pNvBl1n7TS1T",
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
            Voir les matchs de {league.name} déjà joués
          </Button>
        </div>
      ) : null}

      {showHistory ? (
        <History
          setShowHistory={setShowHistory}
          league={league}
          setPage={setPage}
          page={page}
          history={history}
          loading={loading}
          numberOfPages={numberOfPages}
          id={id}
        />
      ) : (
        <>
          <LiveGames compet_ID={id} league={league} />
          <Fixtures compet_ID={id} league={league} />
        </>
      )}
    </div>
  );
}

export default LeaguePage;
