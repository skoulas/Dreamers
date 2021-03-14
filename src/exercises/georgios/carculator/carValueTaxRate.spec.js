import {
  getCarTaxFromTaxableValue,
  carTaxableBandDetails,
} from './carValueTaxRate';

import { carculator } from '../../../testing/carculator/carculator';

describe('getCarTaxFromTaxableValue function', () => {
  test('it should return correct getCarTaxFromTaxableValue', () => {
    const testCases = [
      {
        taxableValue: carTaxableBandDetails.bandOne.value,
        result: carTaxableBandDetails.bandOne.totalBandCarTax,
      },
      {
        taxableValue: carTaxableBandDetails.bandTwo.value,
        result: carTaxableBandDetails.bandTwo.totalBandCarTax,
      },
      {
        taxableValue: carTaxableBandDetails.bandThree.value,
        result: carTaxableBandDetails.bandThree.totalBandCarTax,
      },
      {
        taxableValue: carTaxableBandDetails.bandFour.value,
        result: carTaxableBandDetails.bandFour.totalBandCarTax,
      },
      {
        taxableValue: carTaxableBandDetails.bandFive.value,
        result: carTaxableBandDetails.bandFive.totalBandCarTax,
      },
      {
        taxableValue: carTaxableBandDetails.bandOne.value + 1000,
        result:
          carTaxableBandDetails.bandOne.totalBandCarTax +
          carTaxableBandDetails.bandTwo.rate * 1000,
      },
      {
        taxableValue: carTaxableBandDetails.bandTwo.value + 1000,
        result:
          carTaxableBandDetails.bandTwo.totalBandCarTax +
          carTaxableBandDetails.bandThree.rate * 1000,
      },
      {
        taxableValue: carTaxableBandDetails.bandThree.value + 1000,
        result:
          carTaxableBandDetails.bandThree.totalBandCarTax +
          carTaxableBandDetails.bandFour.rate * 1000,
      },
      {
        taxableValue: carTaxableBandDetails.bandFour.value + 1000,
        result:
          carTaxableBandDetails.bandFour.totalBandCarTax +
          carTaxableBandDetails.bandFive.rate * 1000,
      },
      {
        taxableValue: carTaxableBandDetails.bandFive.value + 1000,
        result:
          carTaxableBandDetails.bandFive.totalBandCarTax +
          carTaxableBandDetails.bandSix.rate * 1000,
      },
    ];

    testCases.forEach((testCase) => {
      expect(carculator(testCase.taxableValue)).toBe(testCase.result);
    });
  });
});
