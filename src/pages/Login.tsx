import FormSection from "../components/FormSection";

function Login() {
  return (
    <main>
      <h1>login</h1>
      <form>
        <FormSection label="Username" id="Username" type="text" />
        <FormSection label="Password" id="Password" type="password" />
        <button>submit</button>
      </form>
    </main>
  );
}

export default Login;
