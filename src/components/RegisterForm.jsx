function RegisterForm() {
  return (
    <form action="" className="auth-form">
      <h2>Create an Account</h2>
      <label>
        First Name:
        <input type="text" />
      </label>
      <label>
        Last name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="text" />
      </label>
    </form>
  );
}

export default RegisterForm;
