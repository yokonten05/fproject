import React, { useEffect } from "react";
import Select from "react-select";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

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

  //get
  const userId = JSON.parse(localStorage.getItem("userInfo"))._id;

  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  const getCartById = useSelector((state) => state.getCarts);
  const { loading, error, cartItems } = getCartById;

  const qtyChangeHandler = (productId, qty) => {
    dispatch(addToCart(userId, productId, qty));
  };

  const removeHandler = (productId) => {
    dispatch(removeFromCart(productId, userId));
  };

  const getCartCount = () => {
    return cartItems
      ? cartItems.reduce((pre, cur) => pre + cur.qty.value, 0)
      : 0;
  };

  const getCartTotal = () => {
    return cartItems
      ? cartItems.reduce((pre, cur) => cur.price * cur.qty.value + pre, 0)
      : 0;
  };

  const getCartSubTotal = (item) => {
    return item.price * item.qty.value;
  };

  const goToCheckOut = (e) => {
    e.preventDefault();

    if (!cartItems || cartItems.length === 0)
      return Swal.fire({
        text: "คุณยังไม่มีสินค้าในตะกร้า",
        icon: "error",
        confirmButtonText: "ตกลง",
      });
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
                {!cartItems || cartItems.length === 0 ? (
                  <div>
                    Your cart is empty <Link to="/dashboard">Go Back</Link>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <CartItem
                      key={item.productId}
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

                {!cartItems || cartItems.length === 0 ? (
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
                <hr />
                <div className="row my-3">
                  <h4 className="col">ราคารวม</h4>
                  <h4 className="col text-right">
                    {getCartTotal().toFixed(2)} ฿
                  </h4>
                </div>
                <div className="">
                  <button
                    className="btn btn-primary btn-lg w-100"
                    id="checkOutButton"
                    onClick={goToCheckOut}
                  >
                    สั่งซื้อสินค้า
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CartScreen;
