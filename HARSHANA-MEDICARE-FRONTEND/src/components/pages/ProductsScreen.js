import React, { Component, useEffect, useState } from "react";
import axios from "axios";

import Product from "../parts/Products";

import "../../App.css";
import "../parts/Products.css";



function ProductScreen()  {
  // state = {
  //   products: [],
  // };

  var _isInit = true;

  const[products, setProducts] = useState([]);



  useEffect({
    console
  },[])

  componentDidMount() {
    console.log("[screen:product.js] componentDidMount");

    axios.get("http://localhost:5000/api/products").then((response) => {
      // this.setState({
      //   products: response.data,
      // });
      products.push(response.data);
      console.log(response);
    });
  }

  render() {
    const products = this.state.products.map((product) => {
      return <Product key={product._id} product={product} />;
    });
    return (
      <div className="row center">
        {/* <h5 className='products'>PRODUCTS</h5> */}
        {products}
      </div>
    );
  }
}

export default ProductScreen;
