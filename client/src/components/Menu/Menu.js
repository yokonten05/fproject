import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to={"/dashboard"} className="brand-link">
          <img
            src="/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Shopping</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/dist/img/avatar5.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Yo
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>หน้าแรก</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  <i className="nav-icon fas fa-box" />
                  <p>สินค้า</p>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>
                    ส่วนจัดการ
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview" style={{ display: "none" }}>
                  <li className="nav-item">
                    <Link to="/productManage" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>จัดการสินค้า</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/orderManage" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>จัดการออเดอร์</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/purchase" className="nav-link">
                  <i className="nav-icon fas fa-bag-shopping" />
                  <p>การสั่งซื้อของฉัน</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* sidebar-menu */}
        </div>
        {/* sidebar */}
      </aside>
    </div>
  );
};

export default Menu;
