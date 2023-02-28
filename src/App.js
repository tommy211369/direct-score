// Librairies
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottie from "lottie-react";
import footballAnimation from "./assets/img/directscore-loading-lottie.json";

// Components
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import LeaguePage from "./Components/LeaguePage/LeaguePage";
import GamePage from "./Components/GamePage/GamePage";
import History from "./Components/LeaguePage/History/History";
import Standings from "./Components/LeaguePage/Standings/Standings";
import News from "./Components/News/News";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ArrowToTop from "./Components/ArrowToTop/ArrowToTop";
import Footer from "./Components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showStandings, setShowStandings] = useState(false);
  const [showComparaison, setShowComparaison] = useState(false);
  const [showGameStats, setShowGameStats] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="welcome-message">
          <p>Bienvenue sur DirectScore</p>
          <Lottie animationData={footballAnimation} />
        </div>
      ) : (
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
                  <Route
                    path="/competition/history/:id"
                    element={<History />}
                  />
                  <Route
                    path="/competition/standings/:id"
                    element={<Standings />}
                  />
                  <Route path="/news" element={<News />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
                <ArrowToTop />
              </main>
              <Footer />
            </BrowserRouter>
          </>
        </div>
      )}
    </div>
  );
}

export default App;
