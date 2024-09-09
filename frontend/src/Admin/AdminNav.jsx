import { Link, Outlet } from "react-router-dom";


const AdminNav = () => {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to="existing-products">Existing Product</Link>
        </li>
        <li>
          {" "}
          <Link to="add-new-product">Add product</Link>
        </li>
        <li>
          {" "}
          <Link to="add-new-category">Add new product category</Link>
        </li>
        <li>
          {" "}
          <Link to="user-cart">View user Cart</Link>
        </li>
        <li>
          {" "}
          <Link to="add-new-poster">add new poster</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default AdminNav;
