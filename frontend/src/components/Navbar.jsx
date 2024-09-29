import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCartProducts } from "../../slices/cartSlice";

const Navbar = () => {
  //for category
  const { categories } = useSelector((state) => state.categoryR);
  // console.log(categories);
  // for cart


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);



  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <button
            className="manuButton"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            <GiHamburgerMenu className="manu" />
          </button>
          <NavLink to="/" className="navbar-brand">
            Al Amin
          </NavLink>

          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasWithBothOptionsLabel"
              >
                Backdrop with scrolling
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="list-group">
                {categories.map((category) => (
                  <li key={category._id} className="list-group-item">
                    <NavLink
                      className="mainLink"
                      to={`/category/${category._id}`}
                    >
                      {category.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NavLink to="/my-cart">
            <FaCartPlus className="cart" />
          </NavLink>
        </div>
      </nav>
      <MainNavbar />
      <Outlet />
    </div>
  );
};

export default Navbar;
