import { convertStringToArray, convertArrayToString } from './strings';

describe('convertArrayToString function', () => {
  test('it should return a string from an array', () => {
    expect(convertArrayToString(['i', 'love', 'tacos'])).toEqual(
      'i love tacos'
    );
  });
});

describe('convertStringToArray function', () => {
  test('it should return an array from a string', () => {
    expect(convertStringToArray('i love tacos')).toEqual([
      'i',
      'love',
      'tacos',
    ]);
  });
});
