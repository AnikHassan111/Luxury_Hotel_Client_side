import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Page/MainPage/MainPage";
import Login from "../Page/Login/Login";
import Error from "../Error/Error";
import Register from "../Register/Register";
import Home from "../Page/Home/Home/Home";
import Room from "../Page/Room/Room";
import SIngleRoomDetails from "../Page/Room/SIngleRoomDetails";
import MyBooking from "../Page/MyBooking/MyBooking";
import PriventRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/room",
        element: <Room></Room>,
      },
      {
        path: "/mybooking",
        element: (
          <PriventRoute>
            <MyBooking></MyBooking>
          </PriventRoute>
        ),
      },
      {
        path: "/roomshowDetails/:id",
        element: <SIngleRoomDetails></SIngleRoomDetails>,
      },
    ],
  },
]);

export default router;
