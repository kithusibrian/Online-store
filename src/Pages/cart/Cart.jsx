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
      <header>
        <h1>The Items you Ordered MF!</h1>
      </header>
      <main className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </main>
      {Object.values(cartItems).some((quantity) => quantity !== 0) ? (
        <footer className="checkout">
          <p>SUBTOTAL: ${totalAmount}</p>
          <button className="continue-shopping" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button className="proceed-to-pay">Proceed to Pay</button>
        </footer>
      ) : (
        <footer className="checkout">
          <h1>Hey MotherFucker Your Cart is Empty</h1>
          <button className="return-to-shop" onClick={() => navigate("/")}>
            Return To Shop
          </button>
        </footer>
      )}
    </div>
  );
}
