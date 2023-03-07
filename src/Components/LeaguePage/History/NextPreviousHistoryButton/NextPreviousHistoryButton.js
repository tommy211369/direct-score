// Librairies
import "./NextPreviousHistoryButton.css";

// Material UI
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function NextPreviousHistoryButton({
  setLoading,
  getPreviousHistory,
  page,
  totalPage,
  getNextHistory,
}) {
  return (
    <Stack spacing={2} className="NextPreviousHistoryButton" direction="row">
      <Button
        onClick={() => {
          setLoading(true);
          getPreviousHistory();
        }}
        variant="outlined"
        startIcon={<ArrowLeftIcon />}
      >
        Précédents
      </Button>

      {page !== totalPage ? (
        <Button
          onClick={() => {
            setLoading(true);
            getNextHistory();
          }}
          variant="outlined"
          endIcon={<ArrowRightIcon />}
        >
          Suivants
        </Button>
      ) : null}
    </Stack>
  );
}

export default NextPreviousHistoryButton;
