import {
  data,
  dataSameValue,
} from '../fixtures/data';
import { sortOptions } from '../fixtures/options';
import {
  expectedResultSortFirstAsc,
  expectedResultSortFirstDesc,
  expectedResultSortFirstDescWithSameValue,
  expectedResultSortFirstAscWithSameValue,
} from '../fixtures/expected-results';
import { sortArrayByKey as sort } from '../../src';

test('check if data.first sorted asc', () => {
  const expectedAsc = [...expectedResultSortFirstAsc];
  const result = sort(data, sortOptions(true));

  expect(result).toEqual(expectedAsc);
});

test('check if data.first sorted desc', () => {
  const expectedDesc = [...expectedResultSortFirstDesc];
  const result = sort(data, sortOptions(false));

  expect(result).toEqual(expectedDesc);
});

test('check if numbers are sorting correctly', () => {
  const result = sort(
    [{ number: 2 }, { number: 1 }, { number: 5 }],
    { active: 'number', number: { asc: false } },
  );

  expect(result).toEqual([
    { number: 5 },
    { number: 2 },
    { number: 1 },
  ]);
});

test('check if falsy values are sorted to the end', () => {
  const result = sort(
    [{ number: 2 }, { number: null }, { number: 5 }, { number: 0 }],
    { active: 'number', number: { asc: true } },
  );

  expect(result).toEqual([
    { number: null },
    { number: 0 },
    { number: 2 },
    { number: 5 },
  ]);
});

test('check if data.first sorted asc when two rows in a column have the same value', () => {
  const expectedAsc = [...expectedResultSortFirstAscWithSameValue];
  const result = sort(dataSameValue, sortOptions(true));

  expect(result).toEqual(expectedAsc);
});

test('check if data.first sorted desc when two rows in a column have the same value', () => {
  const expectedDesc = [...expectedResultSortFirstDescWithSameValue];
  const result = sort(dataSameValue, sortOptions(false));

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
