import * as actionTypes from "../constants/categoryConstants";

export const getCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_REQUEST:
      return {
        loading: true,
        categories: [],
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case actionTypes.GET_CATEGORIES_FAIL:
      return {
        loading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
};
