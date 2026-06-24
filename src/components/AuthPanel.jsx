import { useAuth } from "../../context/AuthContext";
import RegisterForm from "./RegisterForm";
import "./auth.css";

function AuthPanel() {
  const { token, user, logout } = useAuth();
  return (
    <section className="auth-panel">
      <h2>Auth Panel</h2>
      {!token ? (
        <RegisterForm />
      ) : (
        <div className="auth-card">
          <p>You have a token</p>

          <button onClick={logout}>Logout</button>

          {user && <p>Logged in as: {user.username}</p>}
        </div>
      )}
    </section>
  );
}

export default AuthPanel;
