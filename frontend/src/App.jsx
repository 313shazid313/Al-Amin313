import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MainNavbar from "./components/MainNavbar";
import AdminHome from "./Admin/AdminHome";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Protected from "./Admin/Protected";




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
        <Protected protectedComponent = {AdminHome} />
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
