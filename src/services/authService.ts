import type { NavigateFunction } from "react-router";
import { loginApi, registerApi } from "../api/auth.ts";

export async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  user_pass: {
    username: string | null;
    password: string | null;
  },
  currentForm: string,
  navigate: NavigateFunction
) {
  e.preventDefault();
  if (currentForm === "Login") {
    const result = await loginApi(user_pass);
    if (result.bool) {
      navigate("/userMenu");
    } else {
      alert(result.message);
    }
  } else if (currentForm === "Register") {
    const result = await registerApi(user_pass);
    if (result.bool) {
      navigate("/userMenu");
    } else {
      alert(result.message);
    }
  }
}
