import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return <RouterProvider router={router} basename="/" />;
}

export default App;
