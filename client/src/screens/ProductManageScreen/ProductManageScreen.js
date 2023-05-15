import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toast, ToastContainer } from "react-toastify";

//CSS
import "./ProductManageScreen.css";
import "react-toastify/dist/ReactToastify.css";

//Components
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import TableComponent from "../../components/Table/ProductTable";
import ProductEditModal from "../../components/Modal/ProductEditModal";

//Actions
import {
  getProducts as listProducts,
  addProduct as addedProduct,
  deleteProduct as deletedProduct,
} from "../../actions/productActions";
import { getCategories as listCategories } from "../../actions/categoryActions";
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

const ProductManageScreen = () => {
  const initialState = {
    name: "",
    price: "",
    description: "",
    countInStock: "",
    category: "",
    imageUrl: "",
    imageName: "กรุณาเลือกรูปภาพ",
  };
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  //list
  const getProducts = useSelector((state) => state.getProducts);
  const { loading, error, products } = getProducts;

  //crete
  const addProduct = useSelector((state) => state.addProduct);
  const {
    loading: loadingAdd,
    error: errorAdd,
    success: successAdd,
  } = addProduct;

  //update
  const updateProduct = useSelector((state) => state.updateProduct);
  const {
    // loading: loadingUpdate,
    // error: errorUpdate,
    success: successUpdate,
  } = updateProduct;

  //delete
  const deleteProduct = useSelector((state) => state.deleteProduct);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = deleteProduct;

  const getCategories = useSelector((state) => state.getCategories);
  const { categories } = getCategories;

  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listCategories());
    clearState();
    inputRef.current.value = null;
  }, [dispatch, successAdd, successDelete, successUpdate]);

  const [
    { name, price, description, countInStock, category, imageUrl, imageName },
    setState,
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = (e) => {
    const target = e.target ? e.target : e;
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onChangeImage = (e) => {
    const files = e.target.files[0];
    if (files.size > 75000) {
      inputRef.current.value = null;
      return toast.error("โปรดเลือกรูปภาพที่มีขนาดต่ำกว่า 75kb");
    }
    const name = e.target.name;
    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files);

      reader.onload = (e) => {
        setState((prevState) => ({
          ...prevState,
          [name]: e.target.result,
          ["imageName"]: files.name,
        }));
      };
    }
  };
  
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addedProduct(name, price, description, countInStock, category, imageUrl)
    );
  };

  const deleteHandler = (e, id) => {
    e.preventDefault();

    MySwal.fire({
      text: "คุณแน่ใจหรือว่าต้องการจะลบสินค้าชิ้นนี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ตกลง",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletedProduct(id));
        MySwal.fire("ลบสินค้าเรียบร้อย", "", "success");
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
      <Link
        to="#"
        className="text-primary"
        onClick={(e) => modalHandler(e, row.original)}
      >
        <i className="fa fa-pencil"></i>
      </Link>
    );
  };

  const MyCellDelete = (id) => {
    return (
      <Link
        to="#"
        className="text-danger"
        data-id={id}
        onClick={(e) => deleteHandler(e, id)}
      >
        <i className="fa fa-trash"></i>
      </Link>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: "CreateAt",
        accessor: "createdAt", // accessor is the "key" in the data
        Filter: [],
        width: "20%",
      },
      {
        Header: "Name",
        accessor: "name",
        Filter: [],
        width: "20%",
      },
      {
        Header: "Price",
        accessor: "price",
        Filter: [],
        width: "20%",
      },
      {
        Header: "Categories",
        accessor: "category",
        Filter: [],
        filter: "includes",
        width: "20%",
      },
      {
        Header: "",
        // accessor: "_id",
        id: "editProduct",
        Filter: [],
        width: "10%",
        Cell: ({ row }) => (
          <div style={{ textAlign: "center" }}>{MyCellEdit(row)}</div>
        ),
      },
      {
        Header: "",
        accessor: "_id",
        id: "deleteProduct",
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
        {errorAdd && <ErrorMessage variant="danger">{errorAdd}</ErrorMessage>}
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
        />
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">จัดการสินค้า</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="card card-primary collapsed-card">
              <div className="card-header">
                <h3 className="card-title">เพิ่มสินค้า</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool collapseAddProduct"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <Form onSubmit={submitHandler}>
                      <fieldset>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            ชื่อ:
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="ชื่อสินค้า"
                              value={name}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            ราคา:
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="number"
                              name="price"
                              className="form-control"
                              placeholder="ระบุราคา"
                              value={price}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            รายละเอียดสินค้า:
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              name="description"
                              id="inputDescription"
                              className="form-control"
                              rows={4}
                              style={{ height: 76 }}
                              value={description}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            จำนวน:
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="number"
                              name="countInStock"
                              className="form-control"
                              placeholder="ระบุจำนวน"
                              value={countInStock}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            หมวดหมู่:
                          </label>
                          <div className="col-sm-10">
                            <select
                              name="category"
                              className="form-control"
                              id="category"
                              value={category}
                              onChange={onChange}
                            >
                              <option value="" disabled>
                                กรุณาเลือกหมวดหมู่
                              </option>
                              {categories &&
                                categories.map((option, index) => (
                                  <option key={index} value={option.name}>
                                    {option.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">
                            รูปภาพ:
                          </label>
                          <div className="col-sm-10">
                            <div className="custom-file mb-3">
                              <input
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                className="custom-file-input"
                                id="customFile"
                                name="imageUrl"
                                ref={inputRef}
                                onChange={onChangeImage}
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="customFile"
                                name="imageName"
                              >
                                {imageName}
                              </label>
                            </div>
                            {imageUrl && (
                              <img
                                alt=""
                                className="img-thumbnail mt-3"
                                src={imageUrl}
                                width={250}
                                height={250}
                              />
                            )}
                          </div>
                        </div>
                      </fieldset>
                      <button
                        type="submit"
                        className="btn btn-primary float-right"
                      >
                        เพิ่มสินค้า
                      </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {loading ? (
                  <Loading />
                ) : error ? (
                  <ErrorMessage variant="danger">{error}</ErrorMessage>
                ) : (
                  <div className="card card-solid">
                    <div className="card-body">
                      <TableComponent columns={columns} data={products} />
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

export default ProductManageScreen;
