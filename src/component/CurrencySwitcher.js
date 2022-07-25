export const CurrencySwitcher = () => {
  return (
    <>
      <select
        id=""
        value={Currency}
        onChange={(event) => switchCurrency(event.target.value)}
      >
        <option value="USD"></option>
        <option value=""></option>
        <option value="AUD">A$</option>
        <option value="">¥</option>
        <option value=""></option>
      </select>
    </>
  );
};

export default CurrencySwitcher;
