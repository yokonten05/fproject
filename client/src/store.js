import { configureStore } from "@reduxjs/toolkit";

//Reducers
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
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

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: { cartItems: cartFromStorage },
};

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    addProduct: addProductReducer,
    updateProduct: updateProductReducer,
    deleteProduct: deleteProductReducer,
    getCategories: getCategoriesReducer,
    getOrders: getOrdersReducer,
    addOrder: addOrderReducer,
  },
  initialState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers], //applyMiddleware, devToolsExtension
});

export default store;
