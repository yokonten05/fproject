import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import {
//   Container,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
//   NavDropdown,
// } from "react-bootstrap";

//CSS
import "./Header.css";

//Actions
import { logout } from "../../actions/userActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const LogoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  const getAllCartCount = () => {
    return cartItems.length;
  };

  const getCartSubTotal = (el) => {
    return el.price * el.qty.value;
  };

  const viewCartHandLer = (e) => {
    e.preventDefault();

    history.push("/cart");
  };
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link" onClick={LogoutHandler}>
              Logout
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ paddingRight: 22, fontSize: 17 }}
            >
              <i className="fas fa-shopping-cart" />
              <span className="badge badge-danger navbar-badge">
                {getAllCartCount()}
              </span>
            </Link>

            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
              aria-labelledby="dropdownMenuButton"
              style={{ left: "inherit", right: 0 }}
            >
              {cartItems.length === 0
                ? ""
                : cartItems.map((el, index) => (
                    <div key={el.product}>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <img
                            src={el.imageUrl}
                            alt="User Avatar"
                            className="img-size-50 img-circle mr-3"
                          />
                          <div className="media-body">
                            <h3 className="dropdown-item-title">
                              {el.name}
                              <span className="float-right text-sm text-warning">
                                {getCartSubTotal(el).toFixed(2)} บาท
                              </span>
                            </h3>
                            {/* <p className="text-sm">The subject goes here</p> */}
                            <p className="text-sm text-muted">
                              <i className="far fa-clock mr-1" /> 4 Hours Ago
                            </p>
                          </div>
                        </div>
                      </a>
                      <div className="dropdown-divider" />
                    </div>
                  ))}
              <a
                href="#"
                className="dropdown-item dropdown-footer"
                onClick={viewCartHandLer}
              >
                {cartItems.length === 0 ? (
                  <div>ไม่มีสินค้าในตะกร้า</div>
                ) : (
                  <div>ดูสินค้าในตะกร้าของคุณ</div>
                )}
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
