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
import Protected from "./Admin/Protected.jsx";
import ViewProduct from "./Admin/admin component/ViewProducts.jsx";
import AddProduct from "./Admin/admin component/AddProduct.jsx"
import AddCategory from "./Admin/admin component/AddCategory.jsx"
import Poster from "./Admin/admin component/Poster.jsx";
import ViewUserCart from "./Admin/admin component/ViewUserCart.jsx";
import Cart from "./components/Cart.jsx";

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
      {
        path:"/my-cart",
        element :<Cart/>
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
        path:"user-cart",
        element:<ViewUserCart/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
