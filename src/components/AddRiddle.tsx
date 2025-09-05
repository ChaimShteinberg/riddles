import { useRef } from "react";
import { addRiddleApi } from "../api/riddles.ts";

function AddRiddle(props: { render: boolean; setRender: Function, id:number }) {
  const level = useRef("");
  const name = useRef("");
  const taskDescription = useRef("");
  const correctAnswer = useRef("");
  const hint = useRef("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          async function create() {
            await addRiddleApi({
              id: `${props.id}`,
              level: level.current,
              name: name.current,
              taskDescription: taskDescription.current,
              correctAnswer: correctAnswer.current,
              hint: hint.current,
            });
          }
          create();
          props.setRender(!props.render);
        }}
      >
        <label htmlFor="level">Level</label>
        <select
          name="level"
          id="level"
          onChange={(e) => {
            level.current = e.target.value;
          }}
          required
        >
          <option value="">select</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <label htmlFor="name">name</label>
        <input
          type="text"
          id="name"
          required
          onChange={(e) => {
            name.current = e.target.value;
          }}
        />
        <label htmlFor="taskDescription">taskDescription</label>
        <input
          type="text"
          id="taskDescription"
          required
          onChange={(e) => {
            taskDescription.current = e.target.value;
          }}
        />
        <label htmlFor="correctAnswer">correctAnswer</label>
        <input
          type="text"
          id="correctAnswer"
          required
          onChange={(e) => {
            correctAnswer.current = e.target.value;
          }}
        />
        <label htmlFor="hint">hint</label>
        <input
          type="text"
          id="hint"
          required
          onChange={(e) => {
            hint.current = e.target.value;
          }}
        />
        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </>
  );
}

export default AddRiddle;
