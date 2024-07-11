import { useState } from "react";
import { NavLink } from "react-router-dom";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signIn } from "../authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    if (!email || !password) return alert("Please fill in all fields.");
    try {
      const session = await signIn(email, password);

      if (session) {
        sessionStorage.setItem("accessToken", session.AccessToken);
        if (sessionStorage.getItem("accessToken")) {
          window.location.href = "/";
        } else {
          console.error("Session token was not set properly.");
        }
      } else {
        console.error("Session token was not set properly.");
      }
    } catch (error) {
      alert(`Sign in failed: ${error}`);
    }
  }

  return (
    <div className="w-screen h-screen flex">
      <Card className="m-auto p-5">
        <div className="p-3">
          <h1 className="text-3xl text-bold">Welcome Back !</h1>
        </div>
        <div className="flex flex-wrap">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outlined" onClick={handleLogin}>
            Login
          </Button>
        </div>
        <div className="flex">
          <p className="mr-5">Do not have an account? </p>
          <NavLink to="/Signup" className="text-blue-400">
            Sign up
          </NavLink>
        </div>
      </Card>
    </div>
  );
}

export default Login;
