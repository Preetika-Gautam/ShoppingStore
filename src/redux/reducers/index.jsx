// import { combineReducers } from "redux";
// import { productsReducer, selectedProductsReducer } from "./productReducer";
// const reducers = combineReducers({
//   allProducts: productsReducer,
//   product: selectedProductsReducer,
// });
// export default reducers;

import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: cartReducer,
});
export default reducers;
