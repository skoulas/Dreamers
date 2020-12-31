import { convertStringToArray, convertArrayToString } from './strings';

describe('convertArrayToString function', () => {
  test('it should return a string from an array', () => {
    expect(convertArrayToString(['i', 'love', 'tacos'])).toBe(['i love tacos']);
  });
});

describe('convertStringToArray function', () => {
  test('it should return a string from an array', () => {
    expect(convertStringToArray('i love tacos')).toBe([['i', 'love', 'tacos']]);
  });
});
