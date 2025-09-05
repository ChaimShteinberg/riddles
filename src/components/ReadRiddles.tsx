import "../styles/ReadRiddles.css";
import { useEffect, useState } from "react";
import { getAllRiddlesApi } from "../api/riddles.ts";
import type { RiddleInterface } from "../interface/riddle.interface.tsx";
import { deleteRiddle } from "../services/riddlesServiec.ts";
import AddRiddle from "./AddRiddle.tsx";

function ReadRiddles() {
  const [riddles, serRiddles] = useState([]);
  const [render, setRender] = useState(true);
  const [create, setCreate] = useState(false);
  useEffect(() => {
    async function getRiddles() {
      serRiddles(await getAllRiddlesApi());
    }
    getRiddles();
  }, [render]);

  return (
    <>
      {create ? (
        <AddRiddle render={render} setRender={setRender} id={riddles.length} />
      ) : (
        <button className="btn" onClick={() => setCreate(true)}>
          Create new riddle
        </button>
      )}
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
