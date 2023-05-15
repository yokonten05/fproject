import { configureStore } from "@reduxjs/toolkit";

//Reducers
import {
  getUserReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
import {
  getCartReducer,
  cartReducer,
  removeCartReducer,
} from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
  addProductReducer,
  updateProductReducer,
  deleteProductReducer,
} from "./reducers/productReducers";
import { getCategoriesReducer } from "./reducers/categoryReducers";
import { addOrderReducer, getOrdersReducer } from "./reducers/orderReducers";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: {
    getUser: getUserReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    getCarts: getCartReducer,
    addCart: cartReducer,
    deleteCart: removeCartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    addProduct: addProductReducer,
    updateProduct: updateProductReducer,
    deleteProduct: deleteProductReducer,
    getCategories: getCategoriesReducer,
    getOrders: getOrdersReducer,
    addOrder: addOrderReducer,
  },
  preloadedState: initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers], //applyMiddleware, devToolsExtension
});

export default store;
