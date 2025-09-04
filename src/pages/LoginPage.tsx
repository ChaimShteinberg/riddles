import "../styles/Login.css";
import { useState } from "react";
import FormSection from "../components/FormSection";
import { useNavigate, useParams } from "react-router";
import { handleSubmit } from "../services/authService";

function Login() {
  let params = useParams();

  const navigate = useNavigate();
  const [currentForm, setCurrentForm] = useState(params.form || "Login");
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

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

      <form
        onSubmit={async (e) =>
          handleSubmit(e, { username, password }, currentForm, navigate)
        }
      >
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
