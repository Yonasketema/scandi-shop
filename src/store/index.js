import { combineReducers, createStore } from "redux";

import cartReducer from "./carts/reducer.js";
import currencyReducer from "./currencySwitcher/reducer";

const reducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
