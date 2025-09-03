import "../styles/level.css";

function Level(props: {setLevel: Function, setType: Function}) {
  return (
    <section>
      <h2>Choose difficulty</h2>

      <section id="level" onClick={(e: React.MouseEvent<HTMLButtonElement>)=>{
        props.setLevel((e.target as HTMLButtonElement).value)
        props.setType("riddle")
      }}>
        <button className="btn" value="Easy">Easy</button>
        <button className="btn" value="Medium">Medium</button>
        <button className="btn" value="Hard">Hard</button>
      </section>
    </section>
  );
}

export default Level;
