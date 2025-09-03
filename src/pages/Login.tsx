import "../styles/Login.css";
import { useState } from "react";
import FormSection from "../components/FormSection";
import { useNavigate, useParams } from "react-router";
import { loginApi, registerApi } from "../api/player.ts";

function Login() {
  const navigate = useNavigate();
  let params = useParams();

  const [currentForm, setCurrentForm] = useState(params.form || "Login");
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentForm === "Login") {
      const result = await loginApi({ username: username, password: password });
      if (result.bool) {
        navigate("/userMenu");
      } else {
        alert(result.message);
      }
    } else if (currentForm === "Register") {
      const result = await registerApi({
        username: username,
        password: password,
      });
      if (result.bool) {
        navigate("/userMenu");
      } else {
        alert(result.message);
      }
    }
  };

  return (
    <main id="loginForm">
      <nav id="form-toggle">
        <button
          className={currentForm === "Login" ? "active" : ""}
          onClick={() => setCurrentForm("Login")}
        >
          Login
        </button>
        <button
          className={currentForm === "Register" ? "active" : ""}
          onClick={() => setCurrentForm("Register")}
        >
          Register
        </button>
      </nav>

      <form onSubmit={handleSubmit}>
        <FormSection
          label="Username"
          id="Username"
          type="text"
          setInput={setUsername}
        />

        <FormSection
          label="Password"
          id="Password"
          type="password"
          setInput={setPassword}
        />

        <button
          type="submit"
          className={
            username && password ? "btn submit" : "btn submitTransparent"
          }
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default Login;
