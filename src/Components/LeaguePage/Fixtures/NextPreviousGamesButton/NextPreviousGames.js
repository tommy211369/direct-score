// Libraries
import React from "react";
import "./NextPreviousGamesButton.css";

// Material UI
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function NextPreviousGamesButton({ page, setPage }) {
  const handlePreviousGames = () => {
    setPage(page - 1);
  };

  const handleNextGames = () => {
    setPage(page + 1);
  };

  return (
    <Stack
      className={
        page > 1 ? "NextPreviousGamesButton" : "NextPreviousGamesButton2"
      }
      direction="row"
      spacing={2}
    >
      {page > 1 ? (
        <Button
          onClick={handlePreviousGames}
          variant="outlined"
          startIcon={<ArrowLeftIcon />}
        >
          Précédents
        </Button>
      ) : null}
      <Button
        onClick={handleNextGames}
        variant="outlined"
        endIcon={<ArrowRightIcon />}
      >
        Suivants
      </Button>
    </Stack>
  );
}

export default NextPreviousGamesButton;
