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

export const getAllFavorites = () => {
  if (typeof window !== 'undefined' && localStorage) {
    return Object.keys(localStorage).filter((vacancy) => vacancy.slice(0, 8) === 'favorite');
  }

  return {};
};

export const getInitialFavoriteState = (vacancyId) =>
  Object.keys(localStorage).some((vacancy) => vacancy.slice(8) === vacancyId.toString());
