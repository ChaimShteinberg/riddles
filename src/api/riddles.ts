const serverPath = import.meta.env.VITE_SERVER_PATH;

export async function getRiddlersByLevelApi(level: string) {
  const res = await fetch(`${serverPath}/riddles/getRiddlesByLevel/${level}`, {
    credentials: "include",
  });
  const riddles = await res.json();
  return riddles;
}
