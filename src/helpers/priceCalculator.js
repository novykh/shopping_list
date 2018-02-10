const calculators = {
  NO_OFFER: (amount, price) => amount * price,

  '3FOR2': (amount, price) => {
    const offerPrice = parseInt(amount / 3, 10) * 2 * price;
    const noOfferPrice = (amount % 3) * price;

    return offerPrice + noOfferPrice;
  }
};

export default offerType => {
  const calculateTotalPrice = calculators[offerType] || calculators.NO_OFFER;

  return (amount, price) => calculateTotalPrice(amount, price);
};
