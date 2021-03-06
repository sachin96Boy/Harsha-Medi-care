import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (productID, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${productID}`);
    console.log(data);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        qty,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (productId) => (dispatch)=> {
    try{
        dispatch({
            type:CART_REMOVE_ITEM,
            payload:productId
        });
    }catch(error){
        console.log(error);
    }
}
