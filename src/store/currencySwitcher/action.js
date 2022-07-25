export const SWITCHCURRENCY = "SWITCHCURRENCY";

export const currencySwitcher = (currency) => ({
  type: SWITCHCURRENCY,
  payload: currency,
});
