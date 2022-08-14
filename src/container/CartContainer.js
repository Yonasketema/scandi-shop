import { connect } from "react-redux";
import CartPage from "../page/CartPage";

const mapStateProps = (state) => {
  return {
    data: state.cart,
    currency: state.currency,
  };
};

export const CartContainer = connect(mapStateProps)(CartPage);
