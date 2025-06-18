import React from 'react'
import './Loginpage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginpage() {
  
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
    const response = await axios.post("http://192.168.0.245:9090/api/auth/login", {
      usernameOrEmail: email,
      password: password
    });
    console.log("Login response:", response.data);
    const token = response.data.accessToken;
    if (token) {
      sessionStorage.setItem("token", token);
      console.log("Token stored:", token);
      navigate("/");
      console.log("Navigation triggered");
    } else {
      console.log("No token received");
      setError("Login failed: No token received");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  }
  };
    return (
  <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  </div>
);
  
}

export default Loginpage