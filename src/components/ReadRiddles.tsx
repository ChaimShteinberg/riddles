import "../styles/ReadRiddles.css";
import { useEffect, useState } from "react";
import { deleteRiddleApi, getAllRiddlesApi } from "../api/riddles.ts";
import type { RiddleInterface } from "../interface/riddle.interface.tsx";

function ReadRiddles() {
  const [riddles, serRiddles] = useState([]);
  const [render, setRender] = useState(true);
  useEffect(() => {
    async function getRiddles() {
      serRiddles(await getAllRiddlesApi());
    }
    getRiddles();
  });

  return (
    <>
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
                    async function deleteRiddle() {
                      await deleteRiddleApi(riddle.id);
                    }
                    deleteRiddle();
                    setRender(!render);
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
