import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { signUp } from "../authService";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp(event) {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      return alert("Please fill in all fields.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }
    try {
      await signUp(email, password);
      navigate("/confirm", { state: { email } });
    } catch (error) {
      alert(`Sign up failed: ${error}`);
    }
  }

  return (
    <div className="w-screen h-screen flex">
      <Card className="m-auto p-5">
        <div className="p-3">
          <h1 className="text-3xl text-bold">Sign Up Now !</h1>
        </div>
        <div className="flex flex-wrap">
          <TextField
            id="outlined-basic"
            label="Username"
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
          <TextField
            id="outlined-basic"
            label="Confirm password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="outlined" onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
        <div className="flex">
          <p className="mr-5"> Already have an account? </p>
          <NavLink to="/login" className="text-blue-400">
            Login
          </NavLink>
        </div>
      </Card>
    </div>
  );
}

export default Signup;
