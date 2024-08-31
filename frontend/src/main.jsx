import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/Cards.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteDoesNotExist from "./components/RouteDoesNotExist.jsx";
import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import store from "../app/store.js";
import CategoryBasedProducts from "./pages/CategoryBasedProducts.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import AdminHome from "./Admin/AdminHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      //! dynamic routing
      {
        path: "/category/:id",
        element: <CategoryBasedProducts />,
      },
      {
        path: "/category/:id/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "*",
    element: <RouteDoesNotExist />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
