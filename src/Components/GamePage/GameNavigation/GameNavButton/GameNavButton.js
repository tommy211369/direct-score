// Librairies
import "./GameNavButton.css";

function GameNavButton(props) {
  return (
    <div className="GameNavButton" onClick={props.func}>
      {props.children}
    </div>
  );
}

export default GameNavButton;
