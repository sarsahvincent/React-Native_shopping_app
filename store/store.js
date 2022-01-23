import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/products";
import cartReducer from "./reducers/cart";
import ordersReducer from "./reducers/orders";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

export default store;
