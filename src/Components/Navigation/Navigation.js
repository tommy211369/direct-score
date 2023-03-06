// Librairies
import "./Navigation.css";

// Components
import NewsButton from "../NewsButton/NewsButton";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import MenuNav from "./MenuNav/MenuNav";

// C1 id: 244 seasonId : 14
// C3 id: 245 seasonId : 14
// C4 id: 446 seasonId : 14

function Navigation({
  setShowHistory,
  setShowComparaison,
  setShowGameStats,
  setShowStandings,
}) {
  return (
    <nav className="Navigation">
      {/* <NewsButton
        setShowHistory={setShowHistory}
        setShowComparaison={setShowComparaison}
        setShowGameStats={setShowGameStats}
        setShowStandings={setShowStandings}
  /> */}
      <>
        <div>
          <NavigationLinks
            setShowHistory={setShowHistory}
            setShowComparaison={setShowComparaison}
            setShowGameStats={setShowGameStats}
            setShowStandings={setShowStandings}
          />
        </div>
        <MenuNav
          setShowHistory={setShowHistory}
          setShowComparaison={setShowComparaison}
          setShowGameStats={setShowGameStats}
          setShowStandings={setShowStandings}
        />
      </>
    </nav>
  );
}

export default Navigation;
