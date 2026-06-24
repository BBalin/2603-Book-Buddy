import { NavLink, Outlet } from "react-router";
import "./Layout.css";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { token } = useAuth();
  return (
    <>
      <nav>
        <NavLink to="/">
          <section className="header">
            <figure id="book-logo">
              <img src="../public/books.png" alt="Books Logo" />
              <p>Book Buddy</p>
            </figure>
            <figure>
              <NavLink className="nav-icon" to="/">
                Books
              </NavLink>
              {!token ? (
                <NavLink className="nav-icon" to="/users/login">
                  Log In
                </NavLink>
              ) : (
                <NavLink className="nav-icon" to="/">
                  Log Out
                </NavLink>
              )}
            </figure>
          </section>
        </NavLink>
      </nav>

      <main className="app">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
