import { getRiddlersByLevelApi } from "../api/riddles";
import "../styles/level.css";

function Level(props: {
  setType: Function;
  setReddles: Function;
}) {
  return (
    <section>
      <h2>Choose difficulty</h2>

      <section
        id="level"
        onClick={async(e: React.MouseEvent<HTMLButtonElement>) => {
          props.setReddles(await getRiddlersByLevelApi((e.target as HTMLButtonElement).value))
          props.setType("riddle");
        }}
      >
        <button className="btn" value="easy">
          Easy
        </button>
        <button className="btn" value="medium">
          Medium
        </button>
        <button className="btn" value="hard">
          Hard
        </button>
      </section>
    </section>
  );
}

export default Level;
