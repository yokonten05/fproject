import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Product from "../../components/Product/Product";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

//Actions
import { getProducts as listProducts } from "../../actions/productActions";

const ProductScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Menu />
      <Header />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">สินค้า</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {loading ? (
                <Loading />
              ) : error ? (
                <ErrorMessage variant="danger">{error}</ErrorMessage>
              ) : (
                products.map((product) => (
                  <Product
                    key={product._id}
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    descripton={product.descripton}
                    imageUrl={product.imageUrl}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductScreen;
