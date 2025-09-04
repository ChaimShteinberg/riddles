import "../styles/Play.css";
import Level from "../components/Level.tsx";
import Riddle from "../components/Riddle.tsx";
import { useState } from "react";

function Play() {
  const [type, setType] = useState("level");
  const [riddles, setRiddles] = useState([]);
  const [riddleNum, setReddleNum] = useState(0);

  return (
    <main id="playMain">
      <h1 id="playHeader">Play</h1>
      {type === "level" ? (
        <Level setType={setType} setReddles={setRiddles} />
      ) : (
        <Riddle
          name={riddles[riddleNum]["name"]}
          taskDescription={riddles[riddleNum]["taskDescription"]}
          correctAnswer={riddles[riddleNum]["correctAnswer"]}
          hint={riddles[riddleNum]["hint"]}
          setReddleNum={setReddleNum}
          riddleNum={riddleNum}
          sumRiddle={riddles.length}
        />
      )}
    </main>
  );
}

export default Play;
