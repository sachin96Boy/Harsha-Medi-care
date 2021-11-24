import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../../store/actions/productActions";

export default function ProductOverviewScreen(props) {
  const dispatch = useDispatch();
  const productID = props.match.params.id;

  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productID));
  }, [dispatch, productID]);

  // componentDidMount() {
  //   console.log(this.props);
  //   console.log(this.state);

  //   if (this.props.match.params.id) {
  //     if (
  //       !this.state.loadedProducts ||
  //       this.state.loadedProducts.id !== this.props.match.params.id
  //     ) {
  //       axios
  //         .get(
  //           "http://localhost:5000/api/products/" + this.props.match.params.id
  //         )
  //         .then((response) => {
  //           console.log(response);
  //           this.setState({
  //             loadedProducts: response.data,
  //           });
  //         });
  //     }
  //   }
  // }

  // setnewCount(mynewvalue) {
  //   console.log("vlaue change function");
  //   return mynewvalue;
  // }

  const addToCartHandler = () => {
    console.log("add to cartHandler");
    props.history.push(`/cart/${productID} ? qty=${qty}`);
  };

  return (
    <>
      {loading ? (
        <h1>Please wait</h1>
      ) : (
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
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1 style={{ textAlign: "left" }}>{product.name}</h1>
                </li>
                <li>Price : ${product.price}</li>
                <li>
                  Description : <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="error"> out of Stock</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              className="form-control"
                              value={qty}
                              onChange={(event) => setQty(event.target.value)}
                            >
                              <option>Select</option>
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          className="primary block"
                          onClick={addToCartHandler}
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
      )}
    </>
  );
}
