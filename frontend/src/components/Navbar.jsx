import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div>
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
          </div>

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
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <p>
                Try scrolling the rest of the page to see this option in action.
              </p>
            </div>
          </div>

          <div className="items">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  <FaCartPlus className="cart" />
                </a> */}

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
                      Offcanvas right
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">...</div>
                </div>
              </li>
              <li className="nav-item">
                <button
                  className="signUp"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@mdo"
                >
                  Sign In
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          New message
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <label
                              htmlFor="recipient-name"
                              className="col-form-label"
                            >
                              Recipient:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="recipient-name"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="message-text"
                              className="col-form-label"
                            >
                              Message:
                            </label>
                            <textarea
                              className="form-control"
                              id="message-text"
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Send message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
