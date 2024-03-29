import React from "react";
import "../Components/navbar.css";

import { Link } from "react-router-dom";

import { ShoppingCart } from "phosphor-react";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/developer">Developer</Link>
        <Link to="/about">About Us</Link>

        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
