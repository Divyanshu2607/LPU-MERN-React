const currencyFormatter = new Intl.NumberFormat("en-IN", {
  currency: "INR",
  style: "currency"
});

export const currencyFormat = (value) => currencyFormatter.format(value);
