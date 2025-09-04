import { useState } from "react";
import { Link } from "react-router";
import ReadRiddles from "../components/ReadRiddles.tsx";

function UserMenu() {
  const [read, setRead] = useState(false);

  return (
    <main>
      <h1>Menu</h1>
      <Link to="/play" className="btn">
        Play
      </Link>
      {read? <ReadRiddles/>
      : <button className="btn" onClick={() => setRead(true)}>
        Wiew all riddles
      </button>}
      
    </main>
  );
}

export default UserMenu;
