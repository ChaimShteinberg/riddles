import { deleteRiddleApi } from "../api/riddles";

export async function deleteRiddle(
  id: string,
  setRender: Function,
  render: boolean
) {
  const result = await deleteRiddleApi(id);
  result === "1"
    ? setRender(!render)
    : alert("You do not have permission to perform this action");
}
