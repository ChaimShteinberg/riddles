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
  }, [render]);

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
                      const result = await deleteRiddleApi(riddle.id);
                      result === "1"
                        ? setRender(!render)
                        : alert(
                            "You do not have permission to perform this action"
                          );
                    }
                    deleteRiddle();
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
