import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

//CSS
import "react-toastify/dist/ReactToastify.css";

//Actions
import { getCategories as listCategories } from "../../actions/categoryActions";
import { updateProduct as updatedProduct } from "../../actions/productActions";

const ProductManageModal = ({ show, setShow, editData, setEditData }) => {
  const dispatch = useDispatch();
  // const inputRef = useRef(null);
  const getCategories = useSelector((state) => state.getCategories);
  const { categories } = getCategories;

  const initialState = {
    name: "",
    price: "",
    description: "",
    countInStock: "",
    category: "",
    imageUrl: "",
    imageName: "",
  };

  const [
    { name, price, description, countInStock, category, imageUrl, imageName },
    setState,
  ] = useState(initialState);

  const onShow = () => {
    setState({...editData, imageName: "กรุณาเลือกรูปภาพ"});
    dispatch(listCategories());
    // inputRef.current.value = null;
  };

  const onChange = (e) => {
    e.preventDefault();
    const target = e.target ? e.target : e;
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const onChangeImage = (e) => {
    const files = e.target.files[0];
    if (files.size > 75000) {
      // inputRef.current.value = null;
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
      updatedProduct(
        editData._id,
        name,
        price,
        description,
        countInStock,
        category,
        imageUrl
      )
    );
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    setEditData(null);
    setState({ ...initialState });
  };

  return (
    <div>
      <ToastContainer />
      {show && (
        <Modal
          onShow={onShow}
          size="lg"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>แก้ไขสินค้า | {name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler} id="editForm">
              <fieldset>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">ชื่อ:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="ชื่อสินค้า"
                      defaultValue={name}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">ราคา:</label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      placeholder="ระบุราคา"
                      defaultValue={price}
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
                      defaultValue={description}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">จำนวน:</label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      name="countInStock"
                      className="form-control"
                      placeholder="ระบุจำนวน"
                      defaultValue={countInStock}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">หมวดหมู่:</label>
                  <div className="col-sm-10">
                    <select
                      name="category"
                      className="form-control"
                      id="category"
                      defaultValue={category}
                      onChange={onChange}
                    >
                      <option defaultValue="" disabled>
                        กรุณาเลือกหมวดหมู่
                      </option>
                      {categories &&
                        categories.map((option, index) => (
                          <option key={index} defaultValue={option.name}>
                            {option.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">รูปภาพ:</label>
                  <div className="col-sm-10">
                    <div className="custom-file mb-3">
                      <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        className="custom-file-input"
                        id="customFile"
                        name="imageUrl"
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
                hidden
              ></button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              ยกเลิก
            </Button>
            <input
              type="submit"
              form="editForm"
              value="แก้ไขสินค้า"
              className="btn btn-primary"
            />
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ProductManageModal;
