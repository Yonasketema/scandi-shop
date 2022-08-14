import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./carts/reducer.js";
import currencyReducer from "./currencySwitcher/reducer";

const reducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
});

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composedEnhancer = compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(persistedReducer, composedEnhancer);

export const persistor = persistStore(store);
