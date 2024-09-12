import _ from 'lodash';
import { expect, test } from 'vitest';

test('1. Basic Case : _.chunk([1,2,3,4],2)은 [[1,2],[3,4]]이다.', () => {
  const expected = [
    [1, 2],
    [3, 4],
  ];
  console.time('1. Basic Case : _.chunk');
  expect(_.chunk([1, 2, 3, 4], 2)).toEqual(expected);
  console.timeLog('1. Basic Case : _.chunk');
});

test('2. Odd Number of Elements: _.chunk([[1, 2, 3, 4, 5], 2)은 [[1, 2], [3, 4], [5]]이다.', () => {
  const expected = [[1, 2], [3, 4], [5]];
  console.time('2. Odd Number of Elements : _.chunk');
  expect(_.chunk([1, 2, 3, 4, 5], 2)).toEqual(expected);
  console.timeLog('2. Odd Number of Elements : _.chunk');
});

test('3. Single Element Array: _.chunk([1], 1)은 [[1]]이다.', () => {
  const expected = [[1]];
  console.time('3. Single Element Array chunk');
  expect(_.chunk([1], 1)).toEqual(expected);
  console.timeLog('3. Single Element Array chunk');
});

test('4. Chunk Size Larger Than Array: _.chunk([1, 2], 5)은 [[1, 2]]이다.', () => {
  const expected = [[1, 2]];
  console.time('4. Chunk Size Larger Than Array');
  expect(_.chunk([1, 2], 5)).toEqual(expected);
  console.timeLog('4. Chunk Size Larger Than Array');
});

test('5. Chunk Size of 1: _.chunk([1, 2, 3, 4], 1)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  console.time('5. Chunk Size of 1');
  expect(_.chunk([1, 2, 3, 4], 1)).toEqual(expected);
  console.timeLog('5. Chunk Size of 1');
});

test('6. Non-Integer Chunk Size: _.chunk([1, 2, 3, 4], 1.5)은 [[1], [2], [3], [4]]이다.', () => {
  const expected = [[1], [2], [3], [4]];
  console.time('6. Non-Integer Chunk Size');
  expect(_.chunk([1, 2, 3, 4], 1.5)).toEqual(expected);
  console.timeLog('6. Non-Integer Chunk Size');
});

/**
 * 1. Basic Case : _.chunk: 0.791ms
2. Odd Number of Elements : _.chunk: 0.147ms
3. Single Element Array chunk: 0.031ms
4. Chunk Size Larger Than Array: 0.025ms
5. Chunk Size of 1: 0.084ms
6. Non-Integer Chunk Size: 0.07ms  
 */
