import { connect } from "react-redux";
import NavBar from "../component/NavBar";
import { currencyFormatter } from "../util/currencyFormatter";

const mapStateToProps = (state) => {
  const currency = state.currency.value;
  const items = state.cart;
  let total = 0;
  let quantity = 0;

  for (const item of items) {
    const price = item.product.prices.find(
      (price) => price.currency.label === state.currency.value
    );
    total += item.quantity * price.amount;
    quantity += item.quantity;
  }
  total = currencyFormatter(currency, total);

  return {
    quantity,
    total,
  };
};

export const NavBarContainer = connect(mapStateToProps)(NavBar);
