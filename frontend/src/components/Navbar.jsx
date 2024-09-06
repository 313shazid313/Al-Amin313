import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import photo from "../assets/bryan-goff-f7YQo-eYHdM-unsplash.jpg";
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
  const { carts } = useSelector((state) => state.cartR);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
  }, [dispatch]);

  console.log(carts);

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
          <Link to="/" className="navbar-brand">
            Al Amin
          </Link>

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
                    <Link className="mainLink" to={`/category/${category._id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="items">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <FaCartPlus className="cart" />
                </button>

                <div
                  className="offcanvas offcanvas-end"
                  tabIndex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                      Shopping Cart
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
                    {/*card for cart starts */}
                    <div className="added">
                      <img
                        src={photo}
                        className="img-fluid"
                        alt="..."
                        style={{ width: "45%", borderRadius: "8px" }}
                      />
                      <div style={{ padding: "10px" }}>
                        <h5>namesdfsdf</h5>
                        <h6>price $$$</h6>
                        <div style={{ display: "flex" }}>
                          <button className="increment-decrement">+</button>
                          <input
                            className="increment-decrement-input"
                            type="text"
                          />
                          <button className="increment-decrement">+</button>
                          <button className="delete-cart">Remove</button>
                        </div>
                      </div>
                    </div>
                    {/*card for cart ends*/}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MainNavbar />
      <Outlet />
    </div>
  );
};

export default Navbar;
