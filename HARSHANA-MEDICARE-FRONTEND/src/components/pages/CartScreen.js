import React, { Component } from "react";

export default class ProductOverviewScreen extends Component {
  state = {
    cart: {
      cartItems: [],
    },

    productId: null,
    qty: null,
  };

  componentDidMount() {}

  render() {
    return (
      <div className="row-top">
        <div className="col-2">
          <h1>Order Section</h1>
        </div>
      </div>
    );
  }
}
