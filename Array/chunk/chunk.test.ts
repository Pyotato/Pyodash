import { expect, test } from 'vitest';
import chunk from './chunk';

test('1. Basic Case : chunk([1,2,3,4],2)은 [[1,2],[3,4]]이다.', () => {
  const expected = [
    [1, 2],
    [3, 4],
  ];
  expect(chunk([1, 2, 3, 4], 2)).toEqual(expected);
});

test('2. Odd Number of Elements: chunk([[1, 2, 3, 4, 5], 2)은 [[1, 2], [3, 4], [5]]이다.', () => {
  const expected = [[1, 2], [3, 4], [5]];
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual(expected);
});

test('3. Single Element Array: chunk([1], 1)은 [[1]]이다.', () => {
  const expected = [[1]];
  expect(chunk([1], 1)).toEqual(expected);
});

test('4. Chunk Size Larger Than Array: chunk([1, 2], 5)은 [[1, 2]]이다.', () => {
  const expected = [[1, 2]];
  expect(chunk([1, 2], 5)).toEqual(expected);
});

test('5. Chunk Size of 1: chunk([1, 2, 3, 4], 1)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  expect(chunk([1, 2, 3, 4], 1)).toEqual(expected);
});

test('6. Non-Integer Chunk Size: chunk([1, 2, 3, 4], 1.5)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  expect(chunk([1, 2, 3, 4], 1.5)).toEqual(expected);
});
