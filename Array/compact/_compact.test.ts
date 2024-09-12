import _ from 'lodash';
import { expect, test } from 'vitest';

export type EmptyArray = Array<any>;

test(`1. Basic Test with Falsy Values : _.compact([0, 1, false, 2, '', 3])은 [[1, 2, 3]]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('1. Basic Test with Falsy Values');
  expect(_.compact([0, 1, false, 2, '', 3])).toEqual(expected);
  console.timeLog('1. Basic Test with Falsy Values');
});

test(`2. No Falsy Values : _.compact([1, 2, 3])은 [1, 2, 3]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('2. No Falsy Values');
  expect(_.compact([0, 1, false, 2, '', 3])).toEqual(expected);
  console.timeLog('2. No Falsy Values');
});

test(`3. All Falsy Values : _.compact([false, null, 0, "", undefined, NaN])은 []]이다.`, () => {
  const expected: EmptyArray = [];
  console.time('3. All Falsy Values');
  expect(_.compact([false, null, 0, '', undefined, NaN])).toEqual(expected);
  console.timeLog('3. All Falsy Values');
});

test(`4. Empty Array : _.compact([])은 []이다.`, () => {
  const expected: EmptyArray = [];
  console.time('4. Empty Array');
  expect(_.compact([])).toEqual(expected);
  console.timeLog('4. Empty Array');
});

test(`5. Array with Nested Arrays (lodash.compact doesn't recursively flatten arrays) : _.compact([1, 2, [false, 3], null])은 [1, 2, [false, 3]]이다.`, () => {
  const expected = [1, 2, [false, 3]];
  console.time('5. Array with Nested Arrays');
  expect(_.compact([1, 2, [false, 3], null])).toEqual(expected);
  console.timeLog('5. Array with Nested Arrays');
});

test(`6. Array with Objects and Values : _.compact([0, { a: 1 }, false, 3, ""])은 [{ a: 1 }, 3]이다.`, () => {
  const expected = [{ a: 1 }, 3];
  console.time('6. Array with Objects and Values');
  expect(_.compact([0, { a: 1 }, false, 3, ''])).toEqual(expected);
  console.timeLog('6. Array with Objects and Values');
});

test(`7. Array with Different Types : _.compact([null, 2, 'string', undefined, true, NaN, 5])은 [2, 'string', true, 5]이다.`, () => {
  const expected = [2, 'string', true, 5];
  console.time('7. Array with Different Types');
  expect(_.compact([null, 2, 'string', undefined, true, NaN, 5])).toEqual(expected);
  console.timeLog('7. Array with Different Types');
});
/**
  1. Basic Test with Falsy Values: 0.459ms
  2. No Falsy Values: 0.027ms
  3. All Falsy Values: 0.023ms
  4. Empty Array: 0.022ms
  5. Array with Nested Arrays: 0.091ms
  6. Array with Objects and Values: 0.031ms
  7. Array with Different Types: 0.02ms 
*/
