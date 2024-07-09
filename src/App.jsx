import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <Card className="m-auto">
          <div className="p-3">
            <h1 className="text-3xl text-bold">Welcome</h1>
          </div>
          <div className="flex flex-wrap">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
            />
            <Button variant="outlined">Login</Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
