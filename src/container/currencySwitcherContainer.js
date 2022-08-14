import { connect } from "react-redux";
import CurrencySwitcher from "../component/CurrencySwitcher";
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
)(CurrencySwitcher);
