import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCTS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCTS_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_REQUEST:
      return { loading: true };
    case actionTypes.ADD_PRODUCT_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.ADD_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT_REQUEST:
      return { loading: true };
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.UPDATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT_REQUEST:
      return { loading: true };
    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
