import axios from "axios";
import { Link } from "react-router-dom";
import React, { Component } from "react";

import "../../App.css";

export default class ProductOverviewScreen extends Component {
  state = {
    loadedProducts: null,
    qty: 0,
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.state);

    if (this.props.match.params.id) {
      if (
        !this.state.loadedProducts ||
        this.state.loadedProducts.id !== this.props.match.params.id
      ) {
        axios
          .get(
            "http://localhost:5000/api/products/" + this.props.match.params.id
          )
          .then((response) => {
            console.log(response);
            this.setState({
              loadedProducts: response.data,
            });
          });
      }
    }
  }

  setnewCount(mynewvalue) {
    console.log("vlaue change function");
    return mynewvalue;
  }

  addToCartHandler = () => {
    console.log("add to cartHandler");
  };

  render() {
    let prodOverview = <p style={{ textAlign: "center" }}>please wait</p>;

    if (this.state.loadedProducts) {
      prodOverview = (
        <div className="product-overviewer">
          <Link
            to="/products"
            style={{ textDecoration: "none", fontSize: "25px" }}
          >
            Back to products
          </Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="product-image"
                src={this.state.loadedProducts.image}
                alt="health product"
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1 style={{ textAlign: "left" }}>
                    {this.state.loadedProducts.name}
                  </h1>
                </li>
                <li>Price : ${this.state.loadedProducts.price}</li>
                <li>
                  Description : <p>{this.state.loadedProducts.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">
                        ${this.state.loadedProducts.price}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {this.state.loadedProducts.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="error"> out of Stock</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {this.state.loadedProducts.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              className="form-control"
                              value={this.state.qty}
                              onChange={(event) =>
                                this.setState({
                                  qty: parseInt(event.target.value),
                                })
                              }
                            >
                              <option>Select</option>
                              {[
                                ...Array(
                                  this.state.loadedProducts.countInStock
                                ).keys(),
                              ].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          className="primary block"
                          onClick={this.addToCartHandler}
                        >
                          Add to cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>{prodOverview}</div>;
  }
}
