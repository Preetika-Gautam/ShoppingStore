import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartPanel from "./CartPanel";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="ui fixed menu">
      <div className="header-container">
        <h2>Shop!Shop!</h2>
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          <ShoppingCartIcon fontSize="large" color="yellow" />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </div>
      </div>
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Header;
