import React, { useEffect } from "react";
import Select from "react-select";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//CSS
import "./CartScreen.css";

//Components
import CartItem from "../../components/CartItem/CartItem";
import CheckOut from "../../components/CheckOut/CheckOut";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//Actions
import { addToCart, removeFromCart } from "../../actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((pre, cur) => pre + cur.qty.value, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((pre, cur) => cur.price * cur.qty.value + pre, 0);
  };

  const getCartSubTotal = (item) => {
    return item.price * item.qty.value;
  };

  const goToCheckOut = (e) => {
    e.preventDefault();

    history.push("/checkout");
  };
  return (
    <div>
      <Menu />
      <Header />
      <div className="content-wrapper" style={{ minHeight: "1604.44px" }}>
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <section className="content-header">
              <div className="container-fluid">
                <h1>สินค้า</h1>
                <hr />
              </div>
            </section>

            <section className="content">
              <div className="container-fluid">
                {cartItems.length === 0 ? (
                  <div>
                    Your cart is empty <Link to="/dashboard">Go Back</Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <CartItem
                      key={item.product}
                      item={item}
                      qtyChangeHandler={qtyChangeHandler}
                      removeHandler={removeHandler}
                    />
                  ))
                )}
                <div className="mt-4 back-to-shop">
                  <Link to="/product">
                    <span className="text-muted">← Back to shop</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <div className="col-sm-12 col-lg-4 summary">
            <section className="content-header">
              <div className="container-fluid">
                <h1>สรุปรายการสินค้า</h1>
                <hr />
              </div>
            </section>
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <b>ชื่อสินค้า</b>
                  </div>
                  <div className="col text-right">
                    <b>ราคา</b>
                  </div>
                </div>

                {cartItems.length === 0 ? (
                  <div className="row">
                    <div className="col">ไม่มีสินค้าที่ถูกเพิ่ม</div>
                    <div className="col text-right">00.00 ฿</div>
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                    <div className="row" key={index}>
                      <div className="col">- {item.name}</div>
                      <div className="col text-right">
                        {getCartSubTotal(item).toFixed(2)} ฿
                      </div>
                    </div>
                  ))
                )}

                <div className="row my-3">
                  <div className="col">
                    <b>จำนวนสินค้ารวม</b>
                  </div>
                  <div className="col text-right">
                    <b>{getCartCount()} ชิ้น</b>
                  </div>
                </div>
                {/* <div className="row my-3">
                  <div className="col">
                    <form>
                      <h4 className="mt-3">SHIPPING</h4>
                      <Select options={[]}></Select>
                      <h4 className="mt-3">GIVE CODE</h4>
                      <input
                        className="form-control"
                        id="code"
                        placeholder="Enter your code"
                      />
                    </form>
                  </div>
                </div> */}
                <hr />
                <div className="row my-3">
                  <h4 className="col">ราคารวม</h4>
                  <h4 className="col text-right">
                    {getCartTotal().toFixed(2)} ฿
                  </h4>
                </div>
                {/* <div className="">
                  <button
                    className="btn btn-primary btn-lg w-100"
                    id="checkOutButton"
                    onClick={goToCheckOut}
                  >
                    สั่งซื้อสินค้า
                  </button>
                </div> */}
              </div>
            </section>
          </div>
        </div>

        <hr></hr>
        {/* checkout */}
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-12">
                    <h1 className="m-0">Checkout</h1>
                  </div>
                </div>
              </div>
            </section>

            <section className="content">
              <div className="container-fluid">
                <CheckOut />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartScreen;
