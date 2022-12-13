// Librairies
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./LeaguePage.css";
import axios from "axios";
import { leagueName } from "../../assets/functions";

// Material UI
import Button from "@mui/material/Button";

// Components
import History from "./History/History";
import Fixtures from "./Fixtures/Fixtures";
import LiveGames from "./LiveGames/LiveGames";
import Standings from "./Standings/Standings";
import LeagueLogo from "../LeagueLogo/LeagueLogo";
import Groups from "../Groups/Groups";
import Loading from "../Loading/Loading";

function LeaguePage({
  showHistory,
  setShowHistory,
  showStandings,
  setShowStandings,
}) {
  const { id } = useParams();

  const [history, setHistory] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const response = await axios.get(
          // `https://directscore.onrender.com/history?competition_id=${id}`
          // `http://localhost:4000/history?competition_id=${id}`
          `https://directscore.onrender.com/history?competition_id=${id}`
        );

        setHistory(response.data.history);
        setTotalPage(response.data.page);
        setPage(response.data.page);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getHistory();
  }, [id]);

  return (
    <div className="LeaguePage">
      <div className="header">
        <div>
          <LeagueLogo id={id} />
        </div>
      </div>

      {id === "244" ? <Groups /> : null}

      {loading ? (
        <Loading />
      ) : !showHistory && history ? (
        <div className="leaguepage-nav">
          <Button
            onClick={() => {
              setShowHistory(false);
              setShowStandings(true);
            }}
            variant="outlined"
          >
            Classement
          </Button>

          <Button
            onClick={() => {
              setShowHistory(true);
              setShowStandings(false);
            }}
            variant="outlined"
          >
            Résultats
          </Button>
        </div>
      ) : null}

      {showHistory && !showStandings ? (
        <History
          setShowHistory={setShowHistory}
          history={history}
          loading={loading}
          compet_ID={id}
          setHistory={setHistory}
          page={page}
          setPage={setPage}
          setLoading={setLoading}
          totalPage={totalPage}
        />
      ) : showStandings && !showHistory ? (
        <Standings setShowStandings={setShowStandings} compet_ID={id} />
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
