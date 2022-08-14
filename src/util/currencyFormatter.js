export function currencyFormatter(currency, value) {
  const userLanguages = window.navigator.languages;

  const formatter = new Intl.NumberFormat(userLanguages, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(value);
}
