import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {
  productDetailsReducer,
  productListReducer,
} from "./store/reducres/ProductReducer";
import thunk from "redux-thunk";
import { cartReducer } from "./store/reducres/cartReducer";
import { userSigninReducer } from "./store/reducres/userReducer";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {},
  },
  cart: {
    cartItems: [],
  },
};

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
