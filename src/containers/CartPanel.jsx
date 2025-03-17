import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/productActions";

const CartPanel = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className={`cart-panel ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPanel;
