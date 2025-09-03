const serverPath = import.meta.env.VITE_SERVER_PATH;

export async function loginApi(user_pass: {
  username: string | null;
  password: string | null;
}) {
  const res = await fetch(`${serverPath}/players/register`, {
    method: "POST",
    body: JSON.stringify(user_pass),
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await res.text();
  return result;
}
