import { useState } from "react";
import FormSection from "../components/FormSection";

function Register() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <main>
      <h1>Register</h1>
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
        <button>submit</button>
      </form>
    </main>
  );
}

export default Register;
