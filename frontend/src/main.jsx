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
import ProductTable from "./admin/admin-component/product/ProductTable.jsx";
import AddProduct from "./admin/admin-component/product/AddProduct.jsx";
import AddCategory from "./admin/admin-component/product/product-additionals/category/addCategory.jsx";
import Poster from "./admin/admin-component/Poster.jsx";
import Cart from "./component/Cart.jsx";
import Orders from "./admin/admin-component/Orders.jsx";
import BrandTable from "./admin/admin-component/product/product-additionals/brand/BrandTable.jsx";
import BrandForm from "./admin/admin-component/product/product-additionals/brand/BrandForm.jsx";
import BrandUpdate from "./admin/admin-component/product/product-additionals/brand/BrandUpdate.jsx";
import UnitTable from "./admin/admin-component/product/product-additionals/unit/UnitTable.jsx";
import UnitForm from "./admin/admin-component/product/product-additionals/unit/UnitForm.jsx";
import UnitUpdate from "./admin/admin-component/product/product-additionals/unit/UnitUpdate.jsx";

import { Toaster } from "react-hot-toast";

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
        element: (
          <>
            <CategoryBasedProducts />
            <Footer />
          </>
        ),
      },
      {
        path: "/category/:id/:id",
        element: (
          <>
            <ProductDetailPage />
            <Footer />
          </>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <>
            <Cart />
            <Footer />
          </>
        ),
      },
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
        path: "product-table",
        element: <ProductTable />,
      },
      {
        path: "product-table/add-new-product",
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
        element: <Orders />,
      },
      {
        path: "brand-table",
        element: <BrandTable />,
      },
      {
        path: "brand-table/brand-form",
        element: <BrandForm />,
      },
      {
        path: "brand-table/brand-update/:id",
        element: <BrandUpdate />,
      },
      {
        path: "unit-table",
        element: <UnitTable />,
      },
      {
        path: "unit-table/unit-form",
        element: <UnitForm />,
      },
      {
        path: "unit-table/unit-update/:id",
        element: <UnitUpdate />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </Provider>
);
