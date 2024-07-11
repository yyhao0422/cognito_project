import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../components/Home";
import ConfirmationPage from "../components/ConfirmationPage";

const isAuthenticated = () => {
  const accessToken = sessionStorage.getItem("accessToken");
  return !!accessToken;
};

function Homepage() {
  return isAuthenticated() ? <Home /> : <Login />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "confirm",
    element: <ConfirmationPage />,
  },
]);
