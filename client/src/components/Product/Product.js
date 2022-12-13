import React from "react";
import { Link } from "react-router-dom";

const Product = ({ productId, name, price, descripton, imageUrl }) => {
  return (
    <div className="col-lg-3 col-6">
      <div className="card">
        {/* <div className="card" style={{ width: "18rem" }}> */}
        <img className="card-img-top" src={imageUrl} alt={name} height={250} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{descripton}</p>
          <h3 className="card-price">${price}</h3>
          <Link to={`/product/${productId}`} className="btn btn-primary">
            ดูสินค้า
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
