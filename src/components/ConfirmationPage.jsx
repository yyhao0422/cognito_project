import { useState } from "react";
import { TextField } from "@mui/material";
import { confirmSignUp } from "../authService";
import { useNavigate, useLocation } from "react-router-dom";

function ConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location.state.email || "");
  const [confirmationCode, setConfirmationCode] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await confirmSignUp(email, confirmationCode);
      alert("Sign up successful!\nSign in to continue.");
      navigate("/login");
    } catch (error) {
      alert(`Sign up failed: ${error}`);
    }
  }
  return (
    <div>
      <h1>Verification Code have been sent to your email !</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Confirmation Code"
          variant="outlined"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default ConfirmationPage;
