const isPersonAdult = require('./example');

describe('isPersonAdult function', () => {
  test('it should return true if the personAge is adult', () => {
    expect(isPersonAdult(18)).toBeTruthy();
    expect(isPersonAdult(25)).toBeTruthy();
  });

  test('it should return false if the personAge is not adult', () => {
    expect(isPersonAdult(14)).toBeFalsy();
    expect(isPersonAdult(17)).toBeFalsy();
  });
});
