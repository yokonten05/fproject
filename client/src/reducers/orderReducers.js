import * as actionTypes from "../constants/orderConstants";

export const getOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ORDER_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.GET_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_REQUEST:
      return { loading: true };
    case actionTypes.ADD_ORDER_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.ADD_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
