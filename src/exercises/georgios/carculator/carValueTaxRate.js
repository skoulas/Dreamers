// αυτοκίνητο με Αξία Λιανικής προ Φόρων έως 14.000 ευρώ το Τέλος Ταξινόμησης φορολογείται με συντελεστή 4%
// αυτοκίνητο με Αξία Λιανικής προ Φόρων από 14.000 και μέχρι τις 16.999 ευρώ το Τέλος Ταξινόμησης φορολογείται με συντελεστή 26%
// αυτοκίνητο με Αξία Λιανικής προ Φόρων από 17.001 έως 19.999 ευρώ το Τέλος Ταξινόμησης φορολογείται με συντελεστή 53%
// αυτοκίνητο με Αξία Λιανικής προ Φόρων από 20.001 έως 24.999 ευρώ το Τέλος Ταξινόμησης φορολογείται με συντελεστή 62%
// αυτοκίνητο με Αξία Λιανικής προ Φόρων από 25.001 έως 29.999 ευρώ το Τέλος Ταξινόμησης φορολογείται με συντελεστή 71%
// αυτοκίνητο με Αξία Λιανικής προ Φόρων πάνω από 30.001 ευρώ το Τέλος Ταξινόμησης φορολογείται με συντελεστή 30%

export const carTaxableBandDetails = {
  bandOne: {
    rate: 0.04,
    value: 14000,
    totalBandCarTax: 560,
  },
  bandTwo: {
    rate: 0.26,
    value: 17000,
    totalBandCarTax: 1340,
  },
  bandThree: {
    rate: 0.53,
    value: 20000,
    totalBandCarTax: 2930,
  },
  bandFour: {
    rate: 0.62,
    value: 25000,
    totalBandCarTax: 6030,
  },
  bandFive: {
    rate: 0.71,
    value: 30000,
    totalBandCarTax: 9580,
  },
  bandSix: {
    rate: 0.3,
    value: 10000000,
  },
};

export const getCarTaxBandIndexFromTaxableValue = (taxableValue) => {
  return Object.entries(carTaxableBandDetails).findIndex(
    ([bandName, { rate, value }]) => taxableValue <= value
  );
};

export const getCarTaxFromTaxableValue = (taxableValue) => {
  const carTaxBands = Object.entries(carTaxableBandDetails);
  const carTaxBandIndexFromTaxableValue = getCarTaxBandIndexFromTaxableValue(
    taxableValue
  );

  return carTaxBandIndexFromTaxableValue === 0
    ? carTaxBands[0][1]['rate'] * taxableValue
    : carTaxBands[carTaxBandIndexFromTaxableValue - 1][1]['totalBandCarTax'] +
        carTaxBands[carTaxBandIndexFromTaxableValue][1]['rate'] *
          (taxableValue -
            carTaxBands[carTaxBandIndexFromTaxableValue - 1][1]['value']);
};
