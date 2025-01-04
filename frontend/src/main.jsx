import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
import Poster from "./admin/admin-component/Poster.jsx";
import Cart from "./component/Cart.jsx";
import Orders from "./admin/admin-component/Orders.jsx";
import BrandTable from "./admin/admin-component/product/product-additionals/brand/BrandTable.jsx";
import BrandForm from "./admin/admin-component/product/product-additionals/brand/BrandForm.jsx";
import BrandUpdate from "./admin/admin-component/product/product-additionals/brand/BrandUpdate.jsx";
import UnitTable from "./admin/admin-component/product/product-additionals/unit/UnitTable.jsx";
import UnitForm from "./admin/admin-component/product/product-additionals/unit/UnitForm.jsx";
import UnitUpdate from "./admin/admin-component/product/product-additionals/unit/UnitUpdate.jsx";
import TypeTable from "./admin/admin-component/product/product-additionals/type/TypeTable.jsx";
import TypeForm from "./admin/admin-component/product/product-additionals/type/TypeForm.jsx";
import TypeUpdate from "./admin/admin-component/product/product-additionals/type/TypeUpdate.jsx";
import OriginTable from "./admin/admin-component/product/product-additionals/origin/OriginTable.jsx";
import OriginForm from "./admin/admin-component/product/product-additionals/origin/OriginForm.jsx";
import OriginUpdate from "./admin/admin-component/product/product-additionals/origin/OriginUpdate.jsx";
import CategoryTable from "./admin/admin-component/product/product-additionals/category/CategoryTable.jsx";
import CategoryForm from "./admin/admin-component/product/product-additionals/category/CategoryForm.jsx";
import CategoryUpdate from "./admin/admin-component/product/product-additionals/category/CategoryUpdate.jsx";

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
      {
        path: "type-table",
        element: <TypeTable />,
      },
      {
        path: "type-table/type-form",
        element: <TypeForm />,
      },
      {
        path: "type-table/type-update/:id",
        element: <TypeUpdate />,
      },
      {
        path: "origin-table",
        element: <OriginTable />,
      },
      {
        path: "origin-table/origin-form",
        element: <OriginForm />,
      },
      {
        path: "origin-table/origin-update/:id",
        element: <OriginUpdate />,
      },
      {
        path: "category-table",
        element: <CategoryTable />,
      },
      {
        path: "category-table/category-form",
        element: <CategoryForm />,
      },
      {
        path: "category-table/category-update/:id",
        element: <CategoryUpdate />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </Provider>
);
