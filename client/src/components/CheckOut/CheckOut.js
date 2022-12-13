import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";

//Actions
import { addOrder as addedOrder } from "../../actions/orderActions";

//CSS
import "./CheckOut.css";
import "react-toastify/dist/ReactToastify.css";

//Components
import Loading from "../../components/Loading";

const MySwal = withReactContent(Swal);

const CheckOutScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  //crete
  const addOrder = useSelector((state) => state.addOrder);
  const { loading, error, success } = addOrder;

  useEffect(() => {
    clearState();
  }, [dispatch, success]);

  const initialState = {
    senderTel: "",
    senderFirstName: "",
    senderLastName: "",
    senderAddress: "",
    beneficiaryTel: "",
    beneficiaryFirstName: "",
    beneficiaryLastName: "",
    beneficiaryAddress: "",
    beneficiarySubdistrict: "",
    beneficiaryDistrict: "",
    beneficiaryCountry: "",
    beneficiaryPostcode: "",
  };

  const [
    {
      senderTel,
      senderFirstName,
      senderLastName,
      senderAddress,
      beneficiaryTel,
      beneficiaryFirstName,
      beneficiaryLastName,
      beneficiaryAddress,
      beneficiarySubdistrict,
      beneficiaryDistrict,
      beneficiaryCountry,
      beneficiaryPostcode,
    },
    setState,
  ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = (e) => {
    const target = e.target ? e.target : e;
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(error);
    console.log(success);
    dispatch(
      addedOrder(
        senderTel,
        senderFirstName,
        senderLastName,
        senderAddress,
        beneficiaryTel,
        beneficiaryFirstName,
        beneficiaryLastName,
        beneficiaryAddress,
        beneficiarySubdistrict,
        beneficiaryDistrict,
        beneficiaryCountry,
        beneficiaryPostcode,
        cartItems
      )
    );
console.log(loading)
    // if (error) {
    //   MySwal.fire({
    //     text: "กรุณากรอกข้อมูลให้ครบถ้วน",
    //     icon: "error",
    //     showCancelButton: false,
    //     confirmButtonText: "ตกลง",
    //   });
    // } else {
    //   MySwal.fire({
    //     text: "การสั่งซื้อสำเร็จ\nไปที่จัดการสินค้า",
    //     icon: "success",
    //     showCancelButton: false,
    //     confirmButtonText: "ตกลง",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       history.push("/dashboard");
    //     }
    //   });
    // }
  };

  return (
    <>
      {loading && <Loading />}
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="form-group">
              <label className="col-form-label">
                เบอร์โทร <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="senderTel"
                value={senderTel}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                ชื่อ <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="senderFirstName"
                value={senderFirstName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                นามสกุล <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="senderLastName"
                value={senderLastName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                ที่อยู่ <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="senderAddress"
                value={senderAddress}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="form-group">
              <label className="col-form-label">
                เบอร์โทร <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiaryTel"
                value={beneficiaryTel}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                ชื่อ <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiaryFirstName"
                value={beneficiaryFirstName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                นามสกุล <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiaryLastName"
                value={beneficiaryLastName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                ที่อยู่ <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiaryAddress"
                value={beneficiaryAddress}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                ตำบล <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiarySubdistrict"
                value={beneficiarySubdistrict}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                อำเภอ <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiaryDistrict"
                value={beneficiaryDistrict}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                จังหวัด <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiaryCountry"
                value={beneficiaryCountry}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label className="col-form-label">
                รหัสไปรษณีย์ <span className="required">*</span>
              </label>
              <input
                className="form-control"
                type="text"
                name="beneficiaryPostcode"
                value={beneficiaryPostcode}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          ยืนยัน
        </button>
      </form>
    </>
  );
};

export default CheckOutScreen;
