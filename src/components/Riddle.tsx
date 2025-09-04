import { useRef, useState } from "react";
import type { RiddlePlayInterface } from "../interface/riddlePlay.interface.tsx";
import { handleAnswer } from "../services/ansverService.ts";

function Riddle(props: RiddlePlayInterface) {
  const answer = useRef("");
  const [hint, setHint] = useState(false);
  const [finish, setFinish] = useState(false);

  return finish ? (
    <h3>You have successfully completed the game!</h3>
  ) : (
    <section>
      <h3>{props.riddle.name}</h3>
      <p>{props.riddle.taskDescription}</p>
      <input
        type="text"
        id="answer"
        onChange={(e) => {
          answer.current = e.target.value;
        }}
      />

      {hint ? (
        <p>{props.riddle.hint}</p>
      ) : (
        <button className="btn" onClick={() => setHint(true)}>
          Hint
        </button>
      )}

      <button
        className="btn"
        onClick={() => {
          handleAnswer(props, answer.current, setFinish);
        }}
      >
        submit
      </button>
    </section>
  );
}

export default Riddle;
