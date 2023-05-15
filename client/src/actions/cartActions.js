import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const getCartById = (userId) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CARTS_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/carts/get`,
      { userId: userId },
      config
    );

    dispatch({
      type: actionTypes.GET_CARTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CARTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addToCart = (userId, id, qty) => async (dispatch, getState) => {
  const product = await axios.get(`/api/products/${id}`);

  const productData = {
    userId: userId,
    productId: product.data._id,
    name: product.data.name,
    price: product.data.price,
    countInStock: product.data.countInStock,
    imageUrl: product.data.imageUrl,
    qty,
  };

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const { data } = await axios.post(`/api/carts/`, productData, config);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: data,
  });
};

export const removeFromCart = (productId, userId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const { data } = await axios.post(`/api/carts/delete`, { productId, userId }, config);

  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: data,
  });
};
