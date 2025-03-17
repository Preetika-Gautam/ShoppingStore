import { ActionTypes } from "../constants/action-types";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};
