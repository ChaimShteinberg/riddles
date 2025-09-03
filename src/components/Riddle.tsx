function Riddle(props: {level: string}) {
  return (
    <section>
      <h1>{props.level}</h1>
      <label htmlFor="answer">Riddle</label>
      <input type="text" id="answer" />
      <button className="btn">submit</button>
    </section>
  );
}

export default Riddle;
