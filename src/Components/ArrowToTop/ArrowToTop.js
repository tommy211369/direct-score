// Librairies
import "./ArrowToTop.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ScrollUp from "react-scroll-up";

const ArrowStyle = {
  position: "fixed",
  bottom: 90,
  right: 30,
  cursor: "pointer",
  transitionDuration: "0.2s",
  transitionTimingFunction: "linear",
  transitionDelay: "0s",
};
function ArrowToTop() {
  return (
    <div>
      <ScrollUp
        showUnder={200}
        duration={400}
        topPosition={0}
        style={ArrowStyle}
      >
        <ArrowUpwardIcon className="ArrowToTop" />
      </ScrollUp>
    </div>
  );
}

export default ArrowToTop;
