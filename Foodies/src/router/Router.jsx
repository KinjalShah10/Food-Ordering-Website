
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Main from "../layout/Main";
  import Home from "../pages/home/Home.jsx";
  import Menu from "../pages/shop/Menu.jsx"
  import Signup from "../components/Signup.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
        path: "/",
        element: <Home/>,
      },
        {
        path: "/menu",
        element: <Menu/>,
      },

      {
        path: "/signup",
        element: <Signup/>,
      }
    ]
    },
  ]);

export default router;