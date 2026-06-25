import "./auth.css";
import { NavLink } from "react-router";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }

    const credentials = {
      email,
      password,
    };

    console.log("CREDENTIALS", credentials);

    try {
      const loginCreds = await login(credentials);
      console.log("LOGIN CREDS", loginCreds);
    } catch (error) {
      console.error("THERE WAS AN ISSUE WITH HANDLELOGIN", error);
    }
  };

  return (
    <section>
      <h1>Log in to your account</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          ></input>
        </label>
        <NavLink to="/">
          <button
            className="login-btn"
            onClick={() => handleLogin({ email, password })}
          >
            Login
          </button>
        </NavLink>
      </form>
      <NavLink to="/users/register">Need an account? Register here.</NavLink>
    </section>
  );
}
export default LoginPage;
