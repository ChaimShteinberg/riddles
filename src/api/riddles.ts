const serverPath = import.meta.env.VITE_SERVER_PATH;

export async function getRiddlersByLevelApi(level: string) {
  const res = await fetch(`${serverPath}/riddles/getRiddlesByLevel/${level}`, {
    credentials: "include",
  });
  const riddles = await res.json();
  return riddles;
}

export async function getAllRiddlesApi() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`${serverPath}/riddles/getAll`, {
    credentials: "include",
  });
  const riddles = await res.json();
  return riddles;
}

export async function deleteRiddleApi(id: string) {
  const res = await fetch(`${serverPath}/riddles/delete/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return await res.text();
}
