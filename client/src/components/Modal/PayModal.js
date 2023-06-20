import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

//Components
import ImageResize from "../../components/ImageResize/ImageResize";
import CurrencyFormatter from "../../components/CurrencyFormatter";

const PayModal = ({ modalData, show, onClose }) => {
  if (!modalData) {
    return null; // Return null if no modal is selected
  }

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
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header>
        <Modal.Title>ชำระเงิน</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="col-12">
              {modalData.cartItems.map((el, i) => (
                <div className="post" key={i}>
                  <div className="table-responsive">
                    <table className="table shoping-cart-table">
                      <colgroup>
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "45%" }} />
                        <col style={{ width: "45%" }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td className="">
                            <div className="cart-product-imitation">
                              <ImageResize
                                imageUrl={el.imageUrl}
                                width="50"
                                height="50"
                              />
                            </div>
                          </td>
                          <td className="desc">
                            <h5>
                              <Link to="#" className="text-navy">
                                {el.name}
                              </Link>
                            </h5>
                            <div className="m-t-sm">
                              <span className="text-muted">
                                จำนวน: {el.qty.value} ชิ้น
                              </span>
                            </div>
                          </td>
                          <td style={{ textAlign: "right" }}>
                            <h5>
                              {
                                <CurrencyFormatter
                                  value={getOrderTotal(el.price, el.qty.value)}
                                />
                              }{" "}
                              บาท
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12">
              <Form>
                <fieldset>
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">
                      ชื่อ-นามสกุล:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="ชื่อ-นามสกุล"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">
                      เวลาที่ชำระเงิน:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="datetime-local"
                        name="payTime"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">จำนวน:</label>
                    <div className="col-sm-8">
                      <input
                        type="number"
                        name="amount"
                        className="form-control"
                        placeholder="จำนวน"
                        value={getSummaryTotal(modalData.cartItems)}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">
                      สลิปการโอนเงิน:
                    </label>
                    <div className="col-sm-8">
                      <div className="custom-file mb-3">
                        <input
                          type="file"
                          accept=".jpg, .jpeg, .png"
                          className="custom-file-input"
                          id="customFile"
                          name="imageUrl"
                        />
                        <label
                          className="custom-file-label"
                          htmlFor="customFile"
                          name="imageName"
                        >
                          {""}
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </Form>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="card card-primary">
              <div className="card-body">
                <div className="col-12 text-center">
                  <ImageResize imageUrl="/dist/img/promptPay.png" width="60%" />
                </div>
                <div className="col-12 text-center">
                  <ImageResize imageUrl="/dist/img/QR_code.png" width="60%" />
                </div>
              </div>
              <div className="card-footer text-center">
                <p>ชื่อร้านค้า: test</p>
                <p>ชื่อ นามสกุล: test test</p>
                <p>หมายเลขพร้อมเพย์: 1234567890</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onClose}>
          ยืนยันการชำระเงิน
        </Button>
        <Button variant="secondary" onClick={onClose}>
          ปิด
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PayModal;
