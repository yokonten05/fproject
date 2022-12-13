import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

//CSS
import "./CartItem.css"

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const getCartSubTotal = () => {
    return item.price * item.qty.value
  };

  return (
    <div className="cart">
      <div className="row main align-items-center">
        <div className="col-3">
          <img alt="" className="img-fluid img-thumbnail rounded" src={item.imageUrl} />
        </div>
        <div className="col-3">
          {/* <h4 className="row">
            <small>{item.name}</small>
          </h4> */}
          <div className="row">{item.name}</div>
        </div>
        <div className="col-3">
          <Select
            value={item.qty}
            onChange={(e) => qtyChangeHandler(item.product, e)}
            options={[...Array(item.countInStock).keys()].map((el) => ({
              value: el + 1,
              label: el + 1,
            }))}
          ></Select>
        </div>
        <div className="col-2 text-center">{item.price} ฿</div>
        <div
          className="col-1 text-center"
          onClick={() => removeHandler(item.product)}
        >
          <Link to="#">
            <i className="fa fa-trash text-danger"></i>
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CartItem;
