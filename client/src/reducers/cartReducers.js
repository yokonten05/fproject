import * as actionTypes from "../constants/cartConstants";

export const getCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CARTS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_CARTS_SUCCESS:
      return {
        loading: false,
        cartItems: action.payload,
      };
    case actionTypes.GET_CARTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        loading: false,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export const removeCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_FROM_CART:
      return { loading: false, success: true };
    default:
      return state;
  }
};
