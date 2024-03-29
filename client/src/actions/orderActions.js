import * as actionTypes from "../constants/orderConstants";
import axios from "axios";

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDER_REQUEST });

    const { data } = await axios.get("/api/orders");

    dispatch({
      type: actionTypes.GET_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const getOrderById = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.GET_ORDERS_DETAILS_REQUEST });

//     const { data } = await axios.get(`/api/orders/${id}`);

//     dispatch({
//       type: actionTypes.GET_ORDERS_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: actionTypes.GET_ORDERS_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const addOrder =
  (
    userId,
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
    cartItems,
    expireTime = new Date().addHours(6)
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionTypes.ADD_ORDER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/orders/`,
        {
          userId,
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
          cartItems,
          expireTime,
        },
        config
      );

      dispatch({ type: actionTypes.ADD_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: actionTypes.ADD_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h);
  return this;
};
