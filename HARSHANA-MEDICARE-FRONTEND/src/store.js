import {createStore, combineReducers} from 'redux'
import { productDetailsReducer, productListReducer } from './store/reducres/ProductReducer';

const initialState = {};

const reducers = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer
})

const store = createStore(reducers,initialState);

export default store;