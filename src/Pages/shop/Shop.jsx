import React from "react";

import { PRODUCTS } from "../../Products";

import Product from "./product";

import "./Shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Brian's Store</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
