import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/shop-context";

import CartItem from "./cart-item";

import { useNavigate } from "react-router-dom";

import "./cart.css";
export default function Cart() {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>The Items you Ordered MF!</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> SUBTOTAL: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Proceed to Pay</button>
        </div>
      ) : (
        <div className="checkout">
          <h1>Hey MotherFucker Your Cart is Empty</h1>
          <button onClick={() => navigate("/")}>Return To Shop</button>
        </div>
      )}
    </div>
  );
}
