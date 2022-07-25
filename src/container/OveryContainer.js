import { connect } from "react-redux";
import Overy from "../component/Overy";
import { addQuantity, minQuantity } from "../store/carts/action";

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (ProductId) => dispatch(addQuantity(ProductId)),
    minQuantity: (ProductId) => dispatch(minQuantity(ProductId)),
  };
};

export const OverlayContainer = connect(null, mapDispatchToProps)(Overy);
