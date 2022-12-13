import * as actionTypes from "../constants/categoryConstants";
import axios from "axios";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CATEGORIES_REQUEST });

    const { data } = await axios.get("/api/categories");

    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
