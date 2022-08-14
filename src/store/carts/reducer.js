import { ADDQUANTITY, ADDTOCART, MINQUANTITIY } from "./action";
import _ from "lodash";

let id = 1;

export const initialProducts = [];

export const reducer = (state = initialProducts, action) => {
  if (action.type === ADDTOCART) {
    //check if the item is in the cart
    let found = false;
    //check if the alt is equal
    let isAttributesEqual = false;

    if (state.length > 0) {
      const newcart = state.map((product) => {
        if (action.payload.product.product.id === product.product.id) {
          found = true;
          //check if the order attributes is equal to the item in the cart
          const check = _.isEqual(action.payload.product.order, product.order);

          if (check) {
            isAttributesEqual = true;
            return { ...product, quantity: product.quantity + 1 };
          }
        }

        return product;
      });

      //if the item is not in the cart or
      //if the order item  attributes is not equal
      //create new item and add to the cart
      if (found === false || isAttributesEqual === false) {
        const product = { id: id++, ...action.payload.product, quantity: 1 };
        return [...state, product];
      } else {
        return newcart;
      }
    } else {
      const product = { id: id++, ...action.payload.product, quantity: 1 };
      return [...state, product];
    }
  }

  if (action.type === ADDQUANTITY) {
    return state.map((product) => {
      if (product.id === action.payload) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
  }

  if (action.type === MINQUANTITIY) {
    const products = state.map((product, i) => {
      if (product.id === action.payload) {
        if (product.quantity <= 1) {
          return { ...product, quantity: 0 };
        }
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    return products.filter((product) => product.quantity !== 0);
  }
  return state;
};

export default reducer;
