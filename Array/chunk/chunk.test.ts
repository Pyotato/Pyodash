import { expect, test } from 'vitest';
import chunk from './chunk';

test('1. Basic Case : chunk([1,2,3,4],2)은 [[1,2],[3,4]]이다.', () => {
  const expected = [
    [1, 2],
    [3, 4],
  ];
  console.time('1. Basic Case : chunk');
  expect(chunk([1, 2, 3, 4], 2)).toEqual(expected);
  console.timeLog('1. Basic Case : chunk');
});

test('2. Odd Number of Elements: chunk([[1, 2, 3, 4, 5], 2)은 [[1, 2], [3, 4], [5]]이다.', () => {
  const expected = [[1, 2], [3, 4], [5]];
  console.time('2. Odd Number of Elements: chunk');
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual(expected);
  console.timeLog('2. Odd Number of Elements: chunk');
});

test('3. Single Element Array: chunk([1], 1)은 [[1]]이다.', () => {
  const expected = [[1]];
  console.time('3. Single Element Array');
  expect(chunk([1], 1)).toEqual(expected);
  console.timeLog('3. Single Element Array');
});

test('4. Chunk Size Larger Than Array: chunk([1, 2], 5)은 [[1, 2]]이다.', () => {
  const expected = [[1, 2]];
  console.time('4. Chunk Size Larger Than Array');
  expect(chunk([1, 2], 5)).toEqual(expected);
  console.timeLog('4. Chunk Size Larger Than Array');
});

test('5. Chunk Size of 1: chunk([1, 2, 3, 4], 1)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  console.time('5. Chunk Size of 1');
  expect(chunk([1, 2, 3, 4], 1)).toEqual(expected);
  console.timeLog('5. Chunk Size of 1');
});

test('6. Non-Integer Chunk Size: chunk([1, 2, 3, 4], 1.5)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  console.time('6. Non-Integer Chunk Size');
  expect(chunk([1, 2, 3, 4], 1.5)).toEqual(expected);
  console.timeLog('6. Non-Integer Chunk Size');
});
/**
 * 1. Basic Case : chunk: 0.624ms
  2. Odd Number of Elements: chunk: 0.122ms
  3. Single Element Array: 0.03ms
  4. Chunk Size Larger Than Array: 0.021ms
  5. Chunk Size of 1: 0.07ms
  6. Non-Integer Chunk Size: 0.025ms     
*/
