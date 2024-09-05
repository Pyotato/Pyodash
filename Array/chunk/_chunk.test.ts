import _ from 'lodash';
import { expect, test } from 'vitest';

test('1. Basic Case : _.chunk([1,2,3,4],2)은 [[1,2],[3,4]]이다.', () => {
  const expected = [
    [1, 2],
    [3, 4],
  ];
  expect(_.chunk([1, 2, 3, 4], 2)).toEqual(expected);
});

test('2. Odd Number of Elements: _.chunk([[1, 2, 3, 4, 5], 2)은 [[1, 2], [3, 4], [5]]이다.', () => {
  const expected = [[1, 2], [3, 4], [5]];
  expect(_.chunk([1, 2, 3, 4, 5], 2)).toEqual(expected);
});

test('3. Single Element Array: _.chunk([1], 1)은 [[1]]이다.', () => {
  const expected = [[1]];
  expect(_.chunk([1], 1)).toEqual(expected);
});

test('4. Chunk Size Larger Than Array: _.chunk([1, 2], 5)은 [[1, 2]]이다.', () => {
  const expected = [[1, 2]];
  expect(_.chunk([1, 2], 5)).toEqual(expected);
});

test('5. Chunk Size of 1: _.chunk([1, 2, 3, 4], 1)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  expect(_.chunk([1, 2, 3, 4], 1)).toEqual(expected);
});

test('6. Non-Integer Chunk Size: _.chunk([1, 2, 3, 4], 1.5)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  expect(_.chunk([1, 2, 3, 4], 1.5)).toEqual(expected);
});
