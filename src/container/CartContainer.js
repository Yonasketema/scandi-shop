import { connect } from "react-redux";
import CartPage from "../page/CartPage";

const mapStateProps = (state) => {
  return {
    data: state.cart,
  };
};

export const CartContainer = connect(mapStateProps)(CartPage);
