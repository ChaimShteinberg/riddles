import "../styles/Play.css";
import Level from "../components/Level.tsx";
import Riddle from "../components/Riddle.tsx";
import { useState } from "react";

function Play() {
  const [type, setType] = useState("level");
  const [reddles, setReddles] = useState([]);

  return (
    <main id="playMain">
      <h1 id="playHeader">Play</h1>
      {type === "level" ? (
        <Level setType={setType} setReddles={setReddles} />
      ) : (
        <Riddle />
      )}
    </main>
  );
}

export default Play;
