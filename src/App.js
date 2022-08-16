// Librairies
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import LeaguePage from "./Components/LeaguePage/LeaguePage";
import GamePage from "./Components/GamePage/GamePage";
import History from "./Components/LeaguePage/History/History";
import Loading from "./Components/Loading/Loading";

function App() {
  const [ligue1, setLigue1] = useState();
  const [premierLeague, setPremierLeague] = useState();
  const [liga, setLiga] = useState();
  const [bundesliga, setBundesliga] = useState();
  const [serieA, setSerieA] = useState();
  const [championsLeague, setChampionsLeague] = useState();
  const [europaLeague, setEuropaLeague] = useState();
  const [showHistory, setShowHistory] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCompetitionsList = async () => {
      try {
        const response = await axios.request(options);
        setLigue1(response.data.data.competition[247]);
        setPremierLeague(response.data.data.competition[288]);
        setBundesliga(response.data.data.competition[56]);
        setLiga(response.data.data.competition[213]);
        setSerieA(response.data.data.competition[367]);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    setLoading(true);
    getCompetitionsList();
  }, []);

  // ligue 1 247
  // Prmeier League 288
  // liga 213
  // Bundesliga 56
  // Serie A 367
  // Europa League
  // Champion's League
  // Conference League 446

  // Variables
  const options = {
    method: "GET",
    url: "https://live-score-api.p.rapidapi.com/competitions/list.json",
    params: {
      secret: "DWGf42808FwfuilUITW7GrI1t59nYbgB",
      key: "qpx1pNvBl1n7TS1T",
    },
    headers: {
      "X-RapidAPI-Key": "ab5f486435mshf09c88ef632f937p1d9aafjsn78c2c6a11acf",
      "X-RapidAPI-Host": "live-score-api.p.rapidapi.com",
    },
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
            <BrowserRouter>
              <Navigation
                ligue1={ligue1}
                premierLeague={premierLeague}
                liga={liga}
                bundesliga={bundesliga}
                serieA={serieA}
                setShowHistory={setShowHistory}
              />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/competition/:id"
                  element={
                    <LeaguePage
                      showHistory={showHistory}
                      setShowHistory={setShowHistory}
                    />
                  }
                />
                <Route
                  path="/game/:id"
                  element={<GamePage setShowHistory={setShowHistory} />}
                />
                <Route path="/competition/history/:id" element={<History />} />
              </Routes>
            </BrowserRouter>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
