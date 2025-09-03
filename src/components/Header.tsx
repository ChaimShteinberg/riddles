import { Link } from "react-router";
import "../styles/Header.css";

function Header() {
  return (
    <header id="mainHeader">
      <Link to="/">
        <img src="src/assets/icon.riddles.png" alt="logo riddles" />
        <h1> Riddles</h1>
      </Link>
    </header>
  );
}

export default Header;
