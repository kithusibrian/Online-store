import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export default function CartItem(props) {
  const { cartItems, removeFromCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);
  const { id, producName, price, productImage } = props.data;
  return (
    <div className="cartItem">
      <img src={productImage} alt="picha ya kitu umechagua" />
      <div className="description">
        <b>
          <p>{producName}</p>
        </b>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          ></input>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}
