import { useAuth } from "../../context/AuthContext";
import "./auth.css";
import { NavLink } from "react-router";

function LoginPage() {
  const { login } = useAuth();

  const handleLogin = async (FormData) => {
    const credentials = {
      email: FormData.get("email"),
      password: FormData.get("password"),
    };

    try {
      await login(credentials);
    } catch (error) {
      console.error("THERE WAS AN ISSUE WITH HANDLELOGIN", error);
    }
  };

  return (
    <section>
      <h1>Log in to your account</h1>
      <form action={handleLogin}>
        <label>
          Email:
          <input type="email" name="email" placeholder="Email" required />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
        </label>
        <button>Login</button>
      </form>
      <NavLink to="/users/register">Need an account? Register here.</NavLink>
    </section>
  );
}
export default LoginPage;
