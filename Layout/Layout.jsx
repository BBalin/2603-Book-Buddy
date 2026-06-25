import { NavLink, Outlet } from "react-router";
import "./Layout.css";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { token, logout } = useAuth();
  return (
    <>
      <nav>
        <section className="header">
          <NavLink to="/">
            <figure id="book-logo">
              <img src="../public/books.png" alt="Books Logo" />
              <p>Book Buddy</p>
            </figure>
          </NavLink>

          <figure>
            <NavLink className="nav-icon" to="/">
              Books
            </NavLink>
            {!token ? (
              <>
                <NavLink className="nav-icon" to="/users/login">
                  Log In
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-icon" to="/users/me">
                  Account
                </NavLink>
                <NavLink className="nav-icon" to="/" onClick={logout}>
                  Log Out
                </NavLink>
              </>
            )}
          </figure>
        </section>
      </nav>

      <main className="app">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
