import { connect } from "react-redux";
import DropDown from "../component/DropDown";
import { currencySwitcher } from "../store/currencySwitcher/action";

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};
const mapDispatchToProps = (dispatch) => ({
  switchCurrency: (value) => dispatch(currencySwitcher(value)),
});

export const CurrencySwitcherContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropDown);
