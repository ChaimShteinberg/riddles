function Riddle(props: {
  name: string;
  taskDescription: string;
  correctAnswer: string;
  hint: string;
}) {
  return (
    <section>
      <h3>{props.name}</h3>
      <p>{props.taskDescription}</p>
      <input type="text" id="answer" />
      <section id="buttonSection">
        <button className="btn">Hint</button>
        <button className="btn">submit</button>
      </section>
    </section>
  );
}

export default Riddle;
