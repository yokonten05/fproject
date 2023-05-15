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

// export const getOrderByIdReducer = (state = { product: {} }, action) => {
//   switch (action.type) {
//     case actionTypes.get:
//       return {
//         loading: true,
//       };
//     case actionTypes.GET_ORDERS_DETAILS_REQUEST:
//       return {
//         loading: false,
//         order: action.payload,
//       };
//     case actionTypes.GET_ORDERS_DETAILS_SUCCESS:
//       return {
//         loading: false,
//         error: action.payload,
//       };
//     case actionTypes.GET_ORDERS_DETAILS_FAIL:
//       return {
//         order: {},
//       };
//     default:
//       return state;
//   }
// };

export const addOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER_REQUEST:
      return { loading: true };
    case actionTypes.ADD_ORDER_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.ADD_ORDER_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.ADD_ORDER_RESET:
      return {};
    default:
      return state;
  }
};
