import Navbar from "./components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import MainNavbar from "./components/MainNavbar";
import AdminHome from "./Admin/AdminHome";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainNavbar /> <Navbar /> <Home />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <AdminHome />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
