import { SWITCHCURRENCY } from "./action";

export const initialCurrency = { label: "$", value: "USD" };

const reducer = (state = initialCurrency, action) => {
  if (action.type === SWITCHCURRENCY) {
    return action.payload;
  }
  return state;
};

export default reducer;
