import { data } from '../fixtures/data';
import { sortOptions } from '../fixtures/options';
import { expectedResultSortFirst } from '../fixtures/expected-results';
import { sortArrayByKey as sort } from '../../lib';

test('check if data.first sorted asc', () => {
  const expectedAsc = [...expectedResultSortFirst];
  const result = sort(data, sortOptions(true));

  expect(result).toEqual(expectedAsc.reverse());
});

test('check if data.first sorted desc', () => {
  const expectedDesc = [...expectedResultSortFirst];
  const result = sort(data, sortOptions(false));

  expect(result).toEqual(expectedDesc);
});

test('throw error: data has to be array', () => {
  const result = () => sort({}, sortOptions(false));

  expect(result).toThrow('data has to be typeof: object data instanceof Array: true but got typeof: object data instanceof Array: false');
});

test('throw error: data has to contain objects', () => {
  const result = () => sort([0], sortOptions);

  expect(result).toThrow('data has to be an array of objects but data[0] got typeof: number');
});
