const serverPath = import.meta.env.VITE_SERVER_PATH;

export async function registerApi(user_pass: {
  username: string | null;
  password: string | null;
}) {
  const res = await fetch(`${serverPath}/players/register`, {
    method: "POST",
    body: JSON.stringify(user_pass),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  const result = await res.json();
  return {
    bool: result.message === "new user created successfully",
    message: result.message,
  };
}

export async function loginApi(user_pass: {
  username: string | null;
  password: string | null;
}) {
  const res = await fetch(`${serverPath}/players/login`, {
    method: "POST",
    body: JSON.stringify(user_pass),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  const result = await res.json();
    return {
    bool: result.message === "you have successfully logged in",
    message: result.message,
  };
}
