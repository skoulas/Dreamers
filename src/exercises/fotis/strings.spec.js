import { convertStringToAnArray } from './strings';

describe('convertArrayToString function', () => {
  test('it should return a string from an array', () => {
    expect(convertStringToAnArray('i love tacos')).toBe([
      ['i', 'love', 'tacos'],
    ]);
  });
});
