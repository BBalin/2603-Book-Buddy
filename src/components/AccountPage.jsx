import { NavLink } from "react-router";
import { getAccount } from "../API/books";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import ReservationList from "../Reservations/ReservationList";

function AccountPage() {
  const { token } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      console.log(token);
      const accountDetails = await getAccount(token);
      setUser(accountDetails);
    }
    loadUser();
  }, [token]);

  console.log(user);

  if (!user) {
    return <p>Loading account ... </p>;
  }

  return (
    <section>
      <h1>Welcome</h1>
      <p>Your email on file with us is {user.email}</p>
      <h2>Your Reservations</h2>
      {user.reservation >= 1 ? (
        <ReservationList />
      ) : (
        <p>
          You have not reserved any books yet. Browse{" "}
          <NavLink to="/">
            our <strong>catalog</strong>
          </NavLink>
          !
        </p>
      )}
    </section>
  );
}

export default AccountPage;
