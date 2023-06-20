import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

//CSS
import "./PurchaseScreen.css";

//Components
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ImageResize from "../../components/ImageResize/ImageResize";
import CurrencyFormatter from "../../components/CurrencyFormatter";
import DateFormatter from "../../components/DateFormatter";
import PayModal from "../../components/Modal/PayModal";

//Actions
import {
  getOrders as listOrders,
  //   deletedProduct as deletedProduct,
} from "../../actions/orderActions";

const PurchaseScreen = () => {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (item) => {
    setModalOpen(true);
    setSelectedModal(item);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //list
  const getOrders = useSelector((state) => state.getOrders);
  const { loading, error, orders } = getOrders;

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  const getOrderTotal = (price, value) => {
    return price * value;
  };

  const getSummaryTotal = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.qty.value,
      0
    );
  };

  return (
    <div>
      <Menu />
      <Header />
      <div className="content-wrapper">
        <PayModal
          modalData={selectedModal}
          show={modalOpen}
          onClose={closeModal}
          item={orders}
        />
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">การสั่งซื้อของฉัน</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {loading ? (
                  <Loading />
                ) : error ? (
                  <ErrorMessage variant="danger">{error}</ErrorMessage>
                ) : (
                  <div id="accordion">
                    {!orders || orders.length === 0 ? (
                      <p>ไม่พบออเดอร์</p>
                    ) : (
                      orders.map((item, index) => (
                        <div className="card" key={index}>
                          <div className="card-header">
                            <ul className="nav nav-pills">
                              <div className="card-title">
                                <span className="text-muted">
                                  วันที่ทำรายการ:&nbsp;
                                </span>
                                <span>
                                  <DateFormatter date={item.createdAt} />
                                </span>
                              </div>
                              <div className="card-title">
                                <span className="text-muted">ราคารวม: </span>
                                {
                                  <span>
                                    <CurrencyFormatter
                                      value={getSummaryTotal(item.cartItems)}
                                    />
                                  </span>
                                }{" "}
                                บาท
                              </div>
                              {/* <h4
                                className="float-right"
                                style={{ marginBottom: 0 }}
                              >
                                ราคารวม:{" "}
                                {
                                  <b>
                                    <CurrencyFormatter
                                      value={getSummaryTotal(item.cartItems)}
                                    />
                                  </b>
                                }{" "}
                                บาท
                              </h4> */}
                            </ul>
                          </div>
                          <div className="card-body">
                            <div className="tab-content">
                              {item.cartItems.map((el, i) => (
                                <div className="post" key={i}>
                                  <div className="table-responsive">
                                    <table className="table shoping-cart-table">
                                      <colgroup>
                                        <col style={{ width: "10%" }} />
                                        <col style={{ width: "70%" }} />
                                        <col style={{ width: "20%" }} />
                                      </colgroup>
                                      <tbody>
                                        <tr>
                                          <td className="">
                                            <div className="cart-product-imitation">
                                              <ImageResize
                                                imageUrl={el.imageUrl}
                                                width="80"
                                                height="80"
                                              />
                                            </div>
                                          </td>
                                          <td className="desc">
                                            <h3>
                                              <Link
                                                to="#"
                                                className="text-navy"
                                              >
                                                {el.name}
                                              </Link>
                                            </h3>
                                            <dl className="small m-b-none">
                                              <dt>รายละเอียดสินค้า</dt>
                                              <dd>
                                                {el.description ? (
                                                  el.description
                                                ) : (
                                                  <p>ไม่มี</p>
                                                )}
                                              </dd>
                                            </dl>
                                            <div className="m-t-sm">
                                              <span className="text-muted">
                                                จำนวน: {el.qty.value} ชิ้น
                                              </span>
                                              |
                                              <span className="text-muted">
                                                ราคาต่อชิ้น:{" "}
                                                <CurrencyFormatter
                                                  value={el.price}
                                                />{" "}
                                                บาท
                                              </span>
                                            </div>
                                          </td>
                                          <td style={{ textAlign: "right" }}>
                                            <h4>
                                              {
                                                <CurrencyFormatter
                                                  value={getOrderTotal(
                                                    el.price,
                                                    el.qty.value
                                                  )}
                                                />
                                              }{" "}
                                              บาท
                                            </h4>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="card-footer">
                            <button
                              type="submit"
                              className="btn btn-danger float-right"
                            >
                              ยกเลิก
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary float-right"
                              style={{ marginRight: 5 }}
                              onClick={() => openModal(item)}
                            >
                              ชำระเงิน
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default PurchaseScreen;
