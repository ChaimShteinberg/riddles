import { Link } from "react-router";
import AdminRiddle from "../components/AdminReddle.tsx";

function AdminMenu() {
  return (
    <main>
        <h1>Menu</h1>
      <Link to="/play" className="btn">
        Play
      </Link>
      <button className="btn">Wiew all riddles</button>

      <button className="btn">add reddle</button>
      <article>
        <AdminRiddle level="easy" name="Addition" taskDescription="What is 7 + 6." correctAnswer="13" hint="Think of 7 plus something small."/>
        <AdminRiddle level="easy" name="Addition" taskDescription="What is 7 + 6." correctAnswer="13" hint="Think of 7 plus something small."/>
      </article>
    </main>
  );
}

export default AdminMenu;
