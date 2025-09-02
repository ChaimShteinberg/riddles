import { Link } from "react-router";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <h1>Riddle Game</h1>
      <p>Challenge Your Mind with Epic Riddles</p>
      <nav>
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
        <Link to="/play" className="btn">
          Play
        </Link>
      </nav>
    </main>
  );
}

export default Home;
