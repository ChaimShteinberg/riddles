import FormSection from "./FormSection";

function Login() {
  return (
    <main>
      <h1>login</h1>
      <form>
        <FormSection label="Username" id="Username" type="text" />
        <FormSection label="Password" id="Password" type="password" />
      </form>
    </main>
  );
}

export default Login;
