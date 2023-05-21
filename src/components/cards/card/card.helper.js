export const getSalaryRange = (paymentFrom, paymentTo) => {
  if (paymentFrom === paymentTo) {
    return paymentFrom;
  }

  if (paymentTo === 0) {
    return `от ${paymentFrom}`;
  }

  if (paymentFrom === 0) {
    return `до ${paymentTo}`;
  }

  return `${paymentFrom} - ${paymentTo}`;
};
