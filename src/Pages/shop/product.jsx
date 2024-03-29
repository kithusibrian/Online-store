import React, { useContext } from "react";

import { ShopContext } from "../../context/shop-context";

export default function Product(props) {
  const { id, productName, price, productImage, quantity } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  let badgeText;

  if (quantity === 0) {
    badgeText = "SOLD OUT";
  } else {
    badgeText = "IN STOCK";
  }

  return (
    <div className="product">
      <img src={productImage} alt="Picha ya goods" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="stock--indicator">{badgeText}</div>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>{cartItemAmount}</>}
      </button>
    </div>
  );
}
