import { carculator } from './carculator';

test('it should return the amount of taxes', () => {
  expect(carculator(14000)).toEqual(560);
  expect(carculator(16000)).toEqual(4160);
  expect(carculator(19000)).toEqual(10070);
  expect(carculator(25000)).toEqual(15500);
  expect(carculator(30000)).toEqual(21300);
  expect(carculator(50000)).toEqual(15000);
});
