import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Dinogame from "../pages/Dinogame.jsx";
import Menu from "../pages/Menu.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dinogame",
    element: <Dinogame />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default router;
