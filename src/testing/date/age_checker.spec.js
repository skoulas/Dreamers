import { isAgeValidBasedOnYear } from './age_checker';

describe('is age correct based on birthyear', () => {
  test('it should return true if age and birthyear are valid', () => {
    expect(isAgeValidBasedOnYear(1992, 28)).toBe(true);
    expect(isAgeValidBasedOnYear(1992, 27)).toBe(true);
  });

  test('it should return false if age and birthyear are not valid', () => {
    expect(isAgeValidBasedOnYear(1992, 26)).toBe(false);
    expect(isAgeValidBasedOnYear(1992, 29)).toBe(false);
  });
});
