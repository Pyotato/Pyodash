import { expect, test } from 'vitest';
import compact from './compact';

type EmptyArray = Array<any>;

test(`1. Basic Test with Falsy Values : compact([0, 1, false, 2, '', 3])은 [[1, 2, 3]]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('1. Basic Test with Falsy Values');
  expect(compact([0, 1, false, 2, '', 3])).toEqual(expected);
  console.timeLog('1. Basic Test with Falsy Values');
});

test(`2. No Falsy Values : compact([1, 2, 3])은 [1, 2, 3]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('2. No Falsy Values');
  expect(compact([0, 1, false, 2, '', 3])).toEqual(expected);
  console.timeLog('2. No Falsy Values');
});

test(`3. All Falsy Values : compact([false, null, 0, "", undefined, NaN])은 []]이다.`, () => {
  const expected: EmptyArray = [];
  console.time('3. All Falsy Values');
  expect(compact([false, null, 0, '', undefined, NaN])).toEqual(expected);
  console.timeLog('3. All Falsy Values');
});

test(`4. Empty Array : compact([])은 []이다.`, () => {
  const expected: EmptyArray = [];
  console.time('4. Empty Array');
  expect(compact([])).toEqual(expected);
  console.timeLog('4. Empty Array');
});

test(`5. Array with Nested Arrays (lodash.compact doesn't recursively flatten arrays) : compact([1, 2, [false, 3], null])은 [1, 2, [false, 3]]이다.`, () => {
  const expected = [1, 2, [false, 3]];
  console.time('5. Array with Nested Arrays');
  expect(compact([1, 2, [false, 3], null])).toEqual(expected);
  console.timeLog('5. Array with Nested Arrays');
});

test(`6. Array with Objects and Values : compact([0, { a: 1 }, false, 3, ""])은 [{ a: 1 }, 3]이다.`, () => {
  const expected = [{ a: 1 }, 3];
  console.time('6. Array with Objects and Values');
  expect(compact([0, { a: 1 }, false, 3, ''])).toEqual(expected);
  console.timeLog('6. Array with Objects and Values');
});

test(`7. Array with Different Types : compact([null, 2, 'string', undefined, true, NaN, 5])은 [2, 'string', true, 5]이다.`, () => {
  const expected = [2, 'string', true, 5];
  console.time('7. Array with Different Types');
  expect(compact([null, 2, 'string', undefined, true, NaN, 5])).toEqual(expected);
  console.timeLog('7. Array with Different Types');
});
/**
  1. Basic Test with Falsy Values: 0.441ms
  2. No Falsy Values: 0.073ms
  3. All Falsy Values: 0.025ms
  4. Empty Array: 0.017ms
  5. Array with Nested Arrays: 0.099ms
  6. Array with Objects and Values: 0.035ms
  7. Array with Different Types: 0.016ms
 */
