import { Link } from "react-router";

function UserMenu() {
  return (
    <main>
        <h1>Menu</h1>
      <Link to="/play" className="btn">
        Play
      </Link>
      <button className="btn">Wiew all riddles</button>
    </main>
  );
}

export default UserMenu;
