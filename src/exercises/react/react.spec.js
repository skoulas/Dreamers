import { getListHtml } from './elementList';

describe('getListHtml function', () => {
  test('it should return a string from an array', () => {
    const array = ['1', '2', '3'];
    const array2 = [
      'Re-sizing services',
      'Cleaning and Polishing',
      'Stone Fastering Check',
      'Repair Services',
      'Gold Replating',
    ];

    let result = `<ul><li>1</li><li>2</li><li>3</li></ul>`;
    let result2 = `<ul><li>${array2[0]}</li><li>${array2[1]}</li><li>${array2[2]}</li><li>${array2[3]}</li><li>${array2[4]}</li></ul>`;
    expect(getListHtml(array)).toBe(result);
    expect(getListHtml(array2)).toBe(result2);
  });
});
