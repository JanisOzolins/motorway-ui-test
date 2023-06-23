export const currencyFormatter = (amount: number): string => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};
