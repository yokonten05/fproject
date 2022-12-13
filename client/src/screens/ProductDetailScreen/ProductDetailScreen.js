import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

//CSS
import "react-toastify/dist/ReactToastify.css";

//Components
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

//Actions
import { getProductDetails } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";

const ProductDetailScreen = () => {
  const [qty, setQty] = useState({ label: "เลือกจำนวน", value: 0 });
  console.log(qty)
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, useParams]);

  const addToCartHandLer = (e) => {
    e.preventDefault();

    if (qty?.value == 0) return toast.error("โปรดเลือกจำนวนของสินค้า");
    dispatch(addToCart(product._id, qty));
    toast.success("เพิ่มสินค้าในตะกร้าเรียบร้อยแล้ว");
    // history.push("/cart");
  };

  return (
    <div>
      <Menu />
      <Header />
      <div className="content-wrapper" style={{ minHeight: "1604.44px" }}>
        <ToastContainer />
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Product</h1>
              </div>
            </div>
          </div>
        </section>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage variant="danger">{error}</ErrorMessage>
        ) : (
          <>
            <section className="content">
              <div className="card card-solid">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <h3 className="d-inline-block d-sm-none">
                        {product.name}
                      </h3>
                      <div className="col-12">
                        <img
                          src={product.imageUrl}
                          className="product-image"
                          alt="test"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <h3 className="my-3">{product.name}</h3>
                      <p>{product.description}</p>
                      <hr />
                      {/* <h4 className="mt-3">
                        Size <small>Please select one</small>
                      </h4>
                      <div
                        className="btn-group btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-default text-center">
                          <input
                            type="radio"
                            name="color_option"
                            id="color_option_b1"
                            autoComplete="off"
                          />
                          <span className="text-xl">S</span>
                          <br />
                          Small
                        </label>
                        <label className="btn btn-default text-center">
                          <input
                            type="radio"
                            name="color_option"
                            id="color_option_b2"
                            autoComplete="off"
                          />
                          <span className="text-xl">M</span>
                          <br />
                          Medium
                        </label>
                        <label className="btn btn-default text-center">
                          <input
                            type="radio"
                            name="color_option"
                            id="color_option_b3"
                            autoComplete="off"
                          />
                          <span className="text-xl">L</span>
                          <br />
                          Large
                        </label>
                        <label className="btn btn-default text-center">
                          <input
                            type="radio"
                            name="color_option"
                            id="color_option_b4"
                            autoComplete="off"
                          />
                          <span className="text-xl">XL</span>
                          <br />
                          Xtra-Large
                        </label>
                      </div> */}
                      <h4 className="mt-3">
                        จำนวน |{" "}
                        {product.countInStock > 0 ? "มีสินค้า" : "สินค้าหมด"}
                      </h4>
                      <div className="text-center">
                        <Select
                          value={qty}
                          onChange={(e) => setQty(e)}
                          options={[...Array(product.countInStock).keys()].map(
                            (el) => ({ value: el + 1, label: el + 1 })
                          )}
                        ></Select>
                      </div>
                      <div className="bg-gray py-2 px-3 mt-4">
                        <h2 className="mb-0">ราคา {product.price} บาท</h2>
                      </div>
                      <div className="mt-4">
                        <button
                          className="btn btn-primary btn-lg btn-flat"
                          onClick={addToCartHandLer}
                        >
                          <i className="fas fa-cart-plus fa-lg mr-2" />
                          Add to Cart
                        </button>
                        {/* <div className="btn btn-default btn-lg btn-flat">
                          <i className="fas fa-heart fa-lg mr-2" />
                          Add to Wishlist
                        </div> */}
                      </div>
                      {/* <div className="mt-4 product-share">
                        <Link to="#" className="text-gray">
                          <i className="fab fa-facebook-square fa-2x" />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <nav className="w-100">
                      <div
                        className="nav nav-tabs"
                        id="product-tab"
                        role="tablist"
                      >
                        <a
                          className="nav-item nav-link active"
                          id="product-desc-tab"
                          data-toggle="tab"
                          href="#product-desc"
                          role="tab"
                          aria-controls="product-desc"
                          aria-selected="true"
                        >
                          Description
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="product-comments-tab"
                          data-toggle="tab"
                          href="#product-comments"
                          role="tab"
                          aria-controls="product-comments"
                          aria-selected="false"
                        >
                          Comments
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="product-rating-tab"
                          data-toggle="tab"
                          href="#product-rating"
                          role="tab"
                          aria-controls="product-rating"
                          aria-selected="false"
                        >
                          Rating
                        </a>
                      </div>
                    </nav>
                    <div className="tab-content p-3" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="product-desc"
                        role="tabpanel"
                        aria-labelledby="product-desc-tab"
                      >
                        {" "}
                        {product.description}{" "}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="product-comments"
                        role="tabpanel"
                        aria-labelledby="product-comments-tab"
                      >
                        {" "}
                        {product.description}{" "}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="product-rating"
                        role="tabpanel"
                        aria-labelledby="product-rating-tab"
                      >
                        {" "}
                        {product.description}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailScreen;
