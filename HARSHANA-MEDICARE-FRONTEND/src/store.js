import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import { productDetailsReducer, productListReducer } from './store/reducres/ProductReducer';
import thunk from 'redux-thunk' 

const initialState = {};

const reducers = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer
})

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,initialState, applyMiddleware((thunk)));

export default store;