import React from "react";
import { Link } from "react-router-dom";

import "./Products.css";

export default function Product(props) {
  //objet deconstruction
  const { product } = props;

  return (
    //Since we're calling a list of product it's importent to call the key
    //define the product card
    <div key={product._id} className="profile-card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>

      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2 className="card-body-name">{product.name}</h2>
        </Link>

        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}
