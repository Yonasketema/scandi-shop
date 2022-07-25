import { connect } from "react-redux";
import ProductPage from "../page/ProductPage";
import { addToCart } from "../store/carts/action";

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
  };
};

export const ProductPageContainer = connect(
  null,
  mapDispatchToProps
)(ProductPage);
