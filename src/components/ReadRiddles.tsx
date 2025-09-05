import "../styles/ReadRiddles.css";
import { useEffect, useState } from "react";
import { getAllRiddlesApi } from "../api/riddles.ts";
import type { RiddleInterface } from "../interface/riddle.interface.tsx";
import { deleteRiddle } from "../services/riddlesServiec.ts";

function ReadRiddles() {
  const [riddles, serRiddles] = useState([]);
  const [render, setRender] = useState(true);
  useEffect(() => {
    async function getRiddles() {
      serRiddles(await getAllRiddlesApi());
    }
    getRiddles();
  }, [render]);

  return (
    <>
    <button className="btn" onClick={()=>{}}>Add new riddle</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Task Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {riddles.map((riddle: RiddleInterface) => (
            <tr key={riddle.id}>
              <td>{riddle.name}</td>
              <td>{riddle.taskDescription}</td>
              <td>
                <button
                  className="material-symbols-outlined"
                  onClick={() => {
                    deleteRiddle(riddle.id, setRender, render);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ReadRiddles;
