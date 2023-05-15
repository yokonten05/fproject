import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

//CSS
import "./PurchaseScreen.css";

//Components
import Product from "../../components/Product/Product";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ImageResize from "../../components/ImageResize/ImageResize";
import { Link } from "react-router-dom";

//Actions
import {
  getOrders as listOrders,
  //   deletedProduct as deletedProduct,
} from "../../actions/orderActions";

const PurchaseScreen = () => {
  const dispatch = useDispatch();

  //list
  const getOrders = useSelector((state) => state.getOrders);
  const { loading, error, orders } = getOrders;
  console.log(orders);

  useEffect(() => {
    dispatch(listOrders());
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
                <h1 className="m-0">การสั่งซื้อของฉัน</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {/* <div className>
                  <div className="table-responsive">
                    <p>test</p>
                    <table className="table project-list-table table-nowrap align-middle table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Position</th>
                          <th scope="col">Email</th>
                          <th scope="col">Projects</th>
                          <th scope="col" style={{ width: 200 }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="highlighted">
                          <td>
                            <img
                              src="https://bootdey.com/img/Content/avatar/avatar1.png"
                              alt=""
                              className="avatar-sm rounded-circle me-2"
                            />
                            <Link to="#" className="text-body">
                              Simon Ryles
                            </Link>
                          </td>
                          <td>
                            <span className="badge badge-soft-success mb-0">
                              Full Stack Developer
                            </span>
                          </td>
                          <td>SimonRyles@minible.com</td>
                          <td>125</td>
                          <td>
                            <ul className="list-inline mb-0">
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Edit"
                                  className="px-2 text-primary"
                                >
                                  <i className="bx bx-pencil font-size-18" />
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Delete"
                                  className="px-2 text-danger"
                                >
                                  <i className="bx bx-trash-alt font-size-18" />
                                </Link>
                              </li>
                              <li className="list-inline-item dropdown">
                                <Link
                                  className="text-muted dropdown-toggle font-size-18 px-2"
                                  to="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                >
                                  <i className="bx bx-dots-vertical-rounded" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <hr></hr>
                </div> */}
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
                          <div className="card-header p-2">
                            <ul className="nav nav-pills" style={{justifyContent: "space-between"}}>
                              <button type="button" class="btn btn-primary">
                                เลขออเดอร์: {item._id}
                              </button>
                              <button type="button" class="btn btn-warning">
                                สถานะการสั่งซื้อ: {item.status}
                              </button>
                            </ul>
                          </div>
                          <div className="card-body">
                            <div className="tab-content">
                              {item.cartItems.map((el, i) => (
                                <div className="post" key={i}>
                                  <div className="table-responsive">
                                    <table className="table shoping-cart-table">
                                      <col style={{ width: "10%" }} />
                                      <col style={{ width: "70%" }} />
                                      <col style={{ width: "20%" }} />
                                      <tbody>
                                        <tr>
                                          <td className="">
                                            <div className="cart-product-imitation">
                                              <ImageResize
                                                imageUrl={el.imageUrl}
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
                                              <dt>Description lists</dt>
                                              <dd>
                                                A description list is perfect
                                                for defining terms.
                                              </dd>
                                            </dl>
                                            <div className="m-t-sm">
                                              <Link
                                                to="#"
                                                className="text-muted"
                                              >
                                                จำนวน: {el.qty.value}
                                              </Link>
                                              |
                                              <Link
                                                to="#"
                                                className="text-muted"
                                              >
                                                {" "}
                                                ราคา: {el.price}
                                              </Link>
                                            </div>
                                          </td>
                                          <td>
                                            <h4>{el.price}</h4>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              ))}
                            </div>
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
