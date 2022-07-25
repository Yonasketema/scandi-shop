export const ADDTOCART = "ADDTOCART";
export const ADDQUANTITY = "ADDQUANTITY";
export const MINQUANTITIY = "MINQUANTITIY";

// name, brand, price, gallery, attributes

export const addToCart = (product) => ({
  type: ADDTOCART,
  payload: {
    product,
  },
});

export const addQuantity = (id) => ({
  type: ADDQUANTITY,
  payload: id,
});

export const minQuantity = (id) => ({
  type: MINQUANTITIY,
  payload: id,
});
