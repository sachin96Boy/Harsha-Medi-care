import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  productDetailsReducer,
  productListReducer,
} from "./store/reducres/ProductReducer";
import thunk from "redux-thunk";
import { cartReducer } from "./store/reducres/cartReducer";

const initialState = {
  cart: {
    cartItems: [],
  },
};

const reducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
