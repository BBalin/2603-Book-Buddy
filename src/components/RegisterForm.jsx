import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function RegisterForm() {
  const { signup } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    event.preventDefault();

    const credentials = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    await signup(credentials);
    console.log("CREDENTIALS", credentials);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <label>
        First Name:
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
      </label>
      <label>
        Last name:
        <input type="text" onChange={handleLastNameChange} value={lastName} />
      </label>
      <label>
        Email:
        <input type="text" onChange={handleEmailChange} value={email} />
      </label>
      <label>
        Password:
        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <button>Create Account</button>
    </form>
  );
}

export default RegisterForm;
