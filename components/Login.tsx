"use client";
import { useState, useContext } from "react";
import UserContext from "@/context/UserContext";
const Login = () => {
  const { setUser, user } = useContext(UserContext);
  const [username, setUsername] = useState(user?.username ?? "");
  const [password, setPassword] = useState(user?.password ?? "");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="user name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="user password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Login;
