function AdminRiddle(props: {
  level: string;
  name: string;
  taskDescription: string;
  correctAnswer: string;
  hint: string;
}) {
  return (
    <section>
      <p>level: {props.level}</p>
      <p>name: {props.name}</p>
      <p>taskDescription: {props.taskDescription}</p>
      <p>correctAnswer: {props.correctAnswer}</p>
      <p>hint: {props.hint}</p>

      <button className="btn">update</button>
      <button className="btn">delete</button>
    </section>
  );
}

export default AdminRiddle;
