import { carculator } from './carculator';

test('it should return the amount of taxes', () => {
  expect(carculator(14000)).toEqual(560);
  expect(carculator(16000)).toEqual(1080);
  expect(carculator(19000)).toEqual(2400);
  expect(carculator(25000)).toEqual(6030);
  expect(carculator(30000)).toEqual(9580);
  expect(carculator(50000)).toEqual(15580);
});
