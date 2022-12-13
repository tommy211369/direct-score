// Librairies
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import LeaguePage from "./Components/LeaguePage/LeaguePage";
import GamePage from "./Components/GamePage/GamePage";
import History from "./Components/LeaguePage/History/History";
import Standings from "./Components/LeaguePage/Standings/Standings";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ArrowToTop from "./Components/ArrowToTop/ArrowToTop";
import Footer from "./Components/Footer/Footer";

function App() {
  const [showHistory, setShowHistory] = useState(false);
  const [showStandings, setShowStandings] = useState(false);
  const [showComparaison, setShowComparaison] = useState(false);
  const [showGameStats, setShowGameStats] = useState(false);

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header
            setShowHistory={setShowHistory}
            setShowComparaison={setShowComparaison}
            setShowGameStats={setShowGameStats}
            setShowStandings={setShowStandings}
          />
          <main>
            <Navigation
              setShowHistory={setShowHistory}
              setShowComparaison={setShowComparaison}
              setShowGameStats={setShowGameStats}
              setShowStandings={setShowStandings}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/competition/:id"
                element={
                  <LeaguePage
                    showHistory={showHistory}
                    setShowHistory={setShowHistory}
                    showStandings={showStandings}
                    setShowStandings={setShowStandings}
                  />
                }
              />
              <Route
                path="/game/:id"
                element={
                  <GamePage
                    setShowHistory={setShowHistory}
                    setShowStandings={setShowStandings}
                    showComparaison={showComparaison}
                    setShowComparaison={setShowComparaison}
                    showGameStats={showGameStats}
                    setShowGameStats={setShowGameStats}
                  />
                }
              />
              <Route path="/competition/history/:id" element={<History />} />
              <Route
                path="/competition/standings/:id"
                element={<Standings />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <ArrowToTop />
          </main>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
