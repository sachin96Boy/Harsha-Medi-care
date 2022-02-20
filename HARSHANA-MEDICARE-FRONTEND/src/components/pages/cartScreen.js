import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";

import "./CartScreen.css";

export default function CartScreen(props) {
  const productId = props.match.params.id;

  console.log(productId);
  
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  console.log(qty);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    //implement remove from cart handler
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push("/sign-up?redirect=shipping");
  };

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Order Section</h1>
        {cartItems.length === 0 ? (
          <h1>
            Cart is Empty. <Link to="/">Go to Home</Link>
          </h1>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  {/* show product image */}
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  {/* show product name */}
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  {/* show select box */}
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {/* show option selection */}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items):$
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
