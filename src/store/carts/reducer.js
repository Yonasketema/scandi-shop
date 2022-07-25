import { ADDQUANTITY, ADDTOCART, MINQUANTITIY } from "./action";

let id = 1;

export const initialProducts = [];

export const reducer = (state = initialProducts, action) => {
  if (action.type === ADDTOCART) {
    const product = { id: id++, ...action.payload.product, quantity: 1 };
    return [...state, product];
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
    return state.map((product) => {
      if (product.id === action.payload) {
        if (product.quantity <= 1) {
          return { ...product, quantity: "🥴" };
        }
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
  }

  return state;
};

export default reducer;
