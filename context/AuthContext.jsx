import { createContext, useContext, useState } from "react";
import { register, loginUser } from "../src/API/books";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  async function login(credentials) {
    const result = await loginUser(credentials);
    setToken(result.token);
  }

  async function signup(credentials) {
    const result = await register(credentials);
    setToken(result);
    console.log(token);
  }

  function logout() {
    setToken(null);
  }

  const value = {
    token,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside the AuthProvider");
  }
  return context;
}
