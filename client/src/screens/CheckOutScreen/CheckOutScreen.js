import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//CSS
import "./CheckOutScreen.css";

//Components
import CartItem from "../../components/CartItem/CartItem";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//Actions
import { addOrder as addedOrder } from "../../actions/orderActions";
import { addToCart, removeFromCart } from "../../actions/cartActions";

const MySwal = withReactContent(Swal);

const CheckOutScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  //crete
  const addOrder = useSelector((state) => state.addOrder);
  const { loading, error, success } = addOrder;

  useEffect(() => {
    clearState();
  }, [dispatch]);

  const initialState = {
    senderTel: "",
    senderFirstName: "",
    senderLastName: "",
    senderAddress: "",
    beneficiaryTel: "",
    beneficiaryFirstName: "",
    beneficiaryLastName: "",
    beneficiaryAddress: "",
    beneficiarySubdistrict: "",
    beneficiaryDistrict: "",
    beneficiaryCountry: "",
    beneficiaryPostcode: "",
  };

  const [
    {
      senderTel,
      senderFirstName,
      senderLastName,
      senderAddress,
      beneficiaryTel,
      beneficiaryFirstName,
      beneficiaryLastName,
      beneficiaryAddress,
      beneficiarySubdistrict,
      beneficiaryDistrict,
      beneficiaryCountry,
      beneficiaryPostcode,
    },
    setState,
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = (e) => {
    const target = e.target ? e.target : e;
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addedOrder(
        senderTel,
        senderFirstName,
        senderLastName,
        senderAddress,
        beneficiaryTel,
        beneficiaryFirstName,
        beneficiaryLastName,
        beneficiaryAddress,
        beneficiarySubdistrict,
        beneficiaryDistrict,
        beneficiaryCountry,
        beneficiaryPostcode,
        cartItems
      )
    );

    // if (error) {
    //   MySwal.fire({
    //     text: "กรุณากรอกข้อมูลให้ครบถ้วน",
    //     icon: "error",
    //     showCancelButton: false,
    //     confirmButtonText: "ตกลง",
    //   });
    // } else if (success) {
    //   MySwal.fire({
    //     text: "การสั่งซื้อสำเร็จ\nไปที่จัดการสินค้า",
    //     icon: "success",
    //     showCancelButton: false,
    //     confirmButtonText: "ตกลง",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       history.push("/dashboard");
    //     }
    //   });
    // }
  };

  //cart
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
                <hr />
                <div className="row my-3">
                  <h4 className="col">ราคารวม</h4>
                  <h4 className="col text-right">
                    {getCartTotal().toFixed(2)} ฿
                  </h4>
                </div>
              </div>
            </section>
          </div>
        </div>

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
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-sm-12 col-lg-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          เบอร์โทร <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="senderTel"
                          value={senderTel}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          ชื่อ <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="senderFirstName"
                          value={senderFirstName}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          นามสกุล <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="senderLastName"
                          value={senderLastName}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          ที่อยู่ <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="senderAddress"
                          value={senderAddress}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                      <div className="form-group">
                        <label className="col-form-label">
                          เบอร์โทร <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiaryTel"
                          value={beneficiaryTel}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          ชื่อ <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiaryFirstName"
                          value={beneficiaryFirstName}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          นามสกุล <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiaryLastName"
                          value={beneficiaryLastName}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          ที่อยู่ <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiaryAddress"
                          value={beneficiaryAddress}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          ตำบล <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiarySubdistrict"
                          value={beneficiarySubdistrict}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          อำเภอ <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiaryDistrict"
                          value={beneficiaryDistrict}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          จังหวัด <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiaryCountry"
                          value={beneficiaryCountry}
                          onChange={onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          รหัสไปรษณีย์ <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="beneficiaryPostcode"
                          value={beneficiaryPostcode}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                    ยืนยัน
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOutScreen;
