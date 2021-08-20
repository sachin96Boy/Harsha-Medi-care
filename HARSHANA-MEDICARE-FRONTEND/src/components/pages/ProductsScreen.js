import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../parts/Products";
import { listProducts } from "../../store/actions/productActions";
import { Loader } from '../Loader';

import "../../App.css";
import "../parts/Products.css";



function ProductScreen()  {

  const dispatch = useDispatch();
  const productList = useSelector((state)=> state.productList);
  const { loading, error, products } = productList;

  useEffect(()=> {
    dispatch(listProducts())
  },[dispatch]);

  return(
    <div>
      {loading ? <Loader /> :(
        <div className="row center">
          {products.map((product)=>(
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );

  
}

export default ProductScreen;
