// import React from "react";

// const Header = () => {
//   return (
//     <div className="ui fixed menu">
//       <div className="ui container center">
//         <h2>FakeShop</h2>
//       </div>
//     </div>
//   );
// };

// export default Header;

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
        <h2>FakeShop</h2>
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          <ShoppingCartIcon fontSize="large" color="primary" />
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
