import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";

//CSS
import "./OrderManageScreen.css";
import "react-toastify/dist/ReactToastify.css";

//Components
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import TableComponent from "../../components/Table/OrderTable";
import ProductEditModal from "../../components/Modal/ProductEditModal";

//Actions
import {
  getOrders as listOrders,
  //   deletedProduct as deletedProduct,
} from "../../actions/orderActions";

const MySwal = withReactContent(Swal);

const OrderManageScreen = () => {
  const dispatch = useDispatch();

  //list
  const getOrders = useSelector((state) => state.getOrders);
  const { loading, error, orders } = getOrders;

  //   //update
  //   const updateProduct = useSelector((state) => state.updateProduct);
  //   const {
  //     // loading: loadingUpdate,
  //     // error: errorUpdate,
  //     success: successUpdate,
  //   } = updateProduct;

  //   //delete
  //   const deleteProduct = useSelector((state) => state.deleteProduct);
  //   const {
  //     loading: loadingDelete,
  //     error: errorDelete,
  //     success: successDelete,
  //   } = deleteProduct;

  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  const deleteHandler = (e, id) => {
    e.preventDefault();

    MySwal.fire({
      text: "คุณแน่ใจหรือว่าต้องการจะลบออเดอร์นี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        //   dispatch(deletedProduct(id));
        MySwal.fire("ลบออเดอร์เรียบร้อย", "", "success");
      }
    });
  };

  const modalHandler = (e, row) => {
    e.preventDefault();
    setShow(true);
    setEditData(row);
  };

  const MyCellEdit = (row) => {
    return (
      <a
        href="#"
        className="text-primary"
        onClick={(e) => modalHandler(e, row.original)}
      >
        <i className="fa fa-pencil"></i>
      </a>
    );
  };

  const MyCellDelete = (id) => {
    return (
      <a
        href="#"
        className="text-danger"
        data-id={id}
        onClick={(e) => deleteHandler(e, id)}
      >
        <i className="fa fa-trash"></i>
      </a>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "เลขออเดอร์",
        accessor: "_id", // accessor is the "key" in the data
        Filter: [],
        width: "20%",
      },
      {
        Header: "ชื่อ",
        accessor: "beneficiaryFirstName",
        Filter: [],
        width: "20%",
      },
      {
        Header: "สถานะ",
        accessor: "status",
        Filter: [],
        width: "20%",
      },
      {
        Header: "ระยะเวลาการโอนเงิน",
        accessor: "expireTime",
        Filter: [],
        width: "20%",
      },
      {
        Header: "",
        // accessor: "_id",
        id: "editOrder",
        Filter: [],
        width: "10%",
        Cell: ({ row }) => (
          <div style={{ textAlign: "center" }}>{MyCellEdit(row)}</div>
        ),
      },
      {
        Header: "",
        accessor: "_id",
        id: "deleteOrder",
        Filter: [],
        width: "10%",
        Cell: (row) => (
          <div style={{ textAlign: "center" }}>{MyCellDelete(row.value)}</div>
        ),
      },
    ],
    []
  );

  return (
    <div>
      <Menu />
      <Header />
      <div className="content-wrapper">
        
        {/* {errorAdd && <ErrorMessage variant="danger">{errorAdd}</ErrorMessage>}
        {loadingAdd && <Loading />}
        {errorDelete && (
          <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}
        {loadingDelete && <Loading />}
        <ToastContainer />
        <ProductEditModal
          show={show}
          setShow={(bool) => setShow(bool)}
          editData={editData}
          setEditData={(param) => setEditData(param)}
          category={categories}
        /> */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">จัดการออเดอร์</h1>
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
                  <div className="card card-solid">
                    <div className="card-body">
                      <TableComponent columns={columns} data={orders} />
                    </div>
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

export default OrderManageScreen;
