import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteDoesNotExist from "./component/RouteDoesNotExist.jsx";
import Navigation from "./component/Navigation.jsx";
import App from "./App.jsx";
import Footer from "./component/Footer.jsx";
import store from "./redux/store.js";
import CategoryBasedProducts from "./pages/CategoryBasedProducts.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import Protected from "./admin/Protected.jsx";
import ViewProduct from "./admin/admin-component/viewProducts.jsx";
import AddProduct from "./admin/admin-component/addProduct.jsx"
import AddCategory from "./admin/admin-component/addCategory.jsx"
import Poster from "./admin/admin-component/Poster.jsx";
import Cart from "./component/Cart.jsx";
import Orders from "./admin/admin-component/Orders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
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
        element: <><CategoryBasedProducts /><Footer /></>,
      },
      {
        path: "/category/:id/:id",
        element: <><ProductDetailPage /><Footer /></>,
      },
      {
        path: "/my-cart",
        element: <><Cart /><Footer /></>
      }
    ],
  },
  //! Route not found
  {
    path: "*",
    element: <RouteDoesNotExist />,
  },
  //! admin route
  {
    path: "/dashboard/admin",
    element: <Protected />,
    children: [
      {
        path: "existing-products",
        element: <ViewProduct />,
      },
      {
        path: "add-new-product",
        element: <AddProduct />,
      },
      {
        path: "add-new-category",
        element: <AddCategory />,
      },
      {
        path: "add-new-poster",
        element: <Poster />,
      },

      {
        path: "user-order",
        element: <Orders />
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
