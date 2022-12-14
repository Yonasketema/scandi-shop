import { connect } from "react-redux";
import Summary from "../component/Summary";
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

  let tax = total * (21 / 100);
  tax = currencyFormatter(currency, tax);
  total = currencyFormatter(currency, total);

  return {
    total,
    quantity,
    tax,
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
