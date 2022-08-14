import { connect } from "react-redux";
import ImageSlider from "../component/ImageSlider";
import { addQuantity, minQuantity } from "../store/carts/action";

const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (ProductId) => dispatch(addQuantity(ProductId)),
    minQuantity: (ProductId) => dispatch(minQuantity(ProductId)),
  };
};

export const ImageSliderContainer = connect(
  null,
  mapDispatchToProps
)(ImageSlider);
