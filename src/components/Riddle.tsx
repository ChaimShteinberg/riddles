import { useRef, useState } from "react";

function Riddle(props: {
  name: string;
  taskDescription: string;
  correctAnswer: string;
  hint: string;
  setReddleNum: Function;
  riddleNum: number;
}) {
  const answer = useRef("");
  const [hint, setHint] = useState(false);
  return (
    <section>
      <h3>{props.name}</h3>
      <p>{props.taskDescription}</p>
      <input
        type="text"
        id="answer"
        onChange={(e) => {
          answer.current = e.target.value;
        }}
      />
      <section id="buttonSection">
        {hint ? (
          <p>{props.hint}</p>
        ) : (
          <button className="btn" onClick={() => setHint(true)}>
            Hint
          </button>
        )}
        <button
          className="btn"
          onClick={() => {
            answer.current === props.correctAnswer ? (
              props.setReddleNum(props.riddleNum + 1)
            ) : (
              alert("Wrong, Try again")
            );
          }}
        >
          submit
        </button>
      </section>
    </section>
  );
}

export default Riddle;
