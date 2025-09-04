import "../styles/ReadRiddles.css"
import { useEffect, useState } from "react";
import { getAllRiddlesApi } from "../api/riddles.ts";
import type { RiddleInterface } from "../interface/riddle.interface.tsx";

function ReadRiddles() {
  const [riddles, serRiddles] = useState([]);
  useEffect(() => {
    async function getRiddles() {
      serRiddles(await getAllRiddlesApi());
    }
    getRiddles();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {riddles.map((riddle: RiddleInterface) => (
            <tr key={riddle.name}>
              <td>{riddle.name}</td>
              <td>{riddle.taskDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ReadRiddles;
