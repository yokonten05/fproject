import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Components
import Product from "../../components/Product/Product";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

//Actions
import { getProducts as listProducts } from "../../actions/productActions";

const Dashboard = () => {
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
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />} */}
        {/* Information */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Welcome</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>New Orders</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Bounce Rate</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-warning">
                  <div className="inner">
                    <h3>44</h3>
                    <p>User Registrations</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>
                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Information */}

        {/* Lastest Products */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Lastest Products</h1>
              </div>
            </div>
          </div>
        </div>
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
        {/* Lastest Products */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
