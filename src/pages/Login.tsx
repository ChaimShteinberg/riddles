import "../styles/Login.css";
import { useState } from "react";
import FormSection from "../components/FormSection";
import { Link, useParams } from "react-router";

function Login() {
  let params = useParams();
  const [currentForm, setCurrentForm] = useState(params.form);
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
        onSubmit={(e) => {
          e.preventDefault(), console.log(username, password);
        }}
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

        <Link to="/userMenu" className={username && password ? "btn submit" : "btn submitTransparent"}>
          Submit
        </Link>
      </form>
    </main>
  );
}

export default Login;
