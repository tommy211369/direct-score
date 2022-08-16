// Libraries
import React from "react";
import "./NextPreviousGamesButton.css";

// Component
import Button from "../../../Button/Button";

function NextPreviousGamesButton({ page, setPage }) {
  const handlePreviousGames = () => {
    setPage(page - 1);
  };

  const handleNextGames = () => {
    setPage(page + 1);
  };

  return (
    <div
      className={
        page > 1 ? "NextPreviousGamesButton" : "NextPreviousGamesButton2"
      }
    >
      {page > 1 ? (
        <Button func={handlePreviousGames}>Matchs précédents</Button>
      ) : null}
      <Button func={handleNextGames}>Matchs suivants</Button>
    </div>
  );
}

export default NextPreviousGamesButton;
