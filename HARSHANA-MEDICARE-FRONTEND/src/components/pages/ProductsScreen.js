import React, { Component } from 'react';
import axios from 'axios';

import Product from '../parts/Products'

import '../../App.css';
import '../parts/Products.css'

class ProductScreen extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    console.log('[screen:product,js] componentDidMount');

    axios.get('http://localhost:5000/api/products').then(response => {
      this.setState({
        products: response.data
      });
      console.log(response)
    });

  }

  render() {
    const products = this.state.products.map(
      product => {
        return <Product
          key={product._id}
          product={product}
        />
      }
    );
    return (

      <div className="row center">
        {/* <h5 className='products'>PRODUCTS</h5> */}
        {products}
      </div>


    );
  }
}

export default ProductScreen;