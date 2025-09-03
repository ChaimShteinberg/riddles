import "../styles/Play.css";
import Level from "../components/Level.tsx";
import Riddle from "../components/Riddle.tsx";
import { useState } from "react";

function Play() {
  const [type, setType] = useState("level");
  const [level, setLevel] = useState("null");

  return (
    <main id="playMain">
      <h1 id="playHeader">Play</h1>
      {type === "level" ? <Level setLevel={setLevel} setType={setType}/> : <Riddle level={level} />}
    </main>
  );
}

export default Play;
