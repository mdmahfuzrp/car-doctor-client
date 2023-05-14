import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../pages/Home/Services/ServiceDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import MyBookings from "../pages/MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <h1>Error Message</h1>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: 'service/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'checkout/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: 'checkout',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      }
    ]
  }
]);

export default router;