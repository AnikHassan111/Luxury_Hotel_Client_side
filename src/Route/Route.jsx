import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Page/MainPage/MainPage";
import Login from "../Page/Login/Login";
import Error from "../Error/Error";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
