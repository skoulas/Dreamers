const isPersonAdult = require('./example');

describe('isPersonAdult function', () => {
  test('it should return true if the personAge is adult', () => {
    expect(isPersonAdult(18)).toBe(true);
    expect(isPersonAdult(25)).toBe(true);
  });

  test('it should return false if the personAge is not adult', () => {
    expect(isPersonAdult(14)).toBe(false);
    expect(isPersonAdult(17)).toBe(false);
  });
});
