import { expect, test } from 'vitest';
import concat from './concat';

test(`1. concatenating Arrays: concat([1], [2], [3, 4]])은 [1, 2, 3, 4]]이다.`, () => {
  const expected = [1, 2, 3, 4];
  console.time('1. concatenating Arrays');
  expect(concat([1], [2], [3, 4])).toEqual(expected);
  console.timeLog('1. concatenating Arrays');
});

test(`2. concatenating Values to an Array: concat([1, 2], 3, 4)은 [1, 2, 3, 4]이다.`, () => {
  const expected = [1, 2, 3, 4];
  console.time('2. concatenating Values to an Array');
  expect(concat([1, 2], 3, 4)).toEqual(expected);
  console.timeLog('2. concatenating Values to an Array');
});

test(`3. concatenating with an Empty Array: concat([], 1, 2, [3, 4])은 [1, 2, 3, 4]이다.`, () => {
  const expected = [1, 2, 3, 4];
  console.time('3. concatenating with an Empty Array');
  expect(concat([], 1, 2, [3, 4])).toEqual(expected);
  console.timeLog('3. concatenating with an Empty Array');
});

test(`4. concatenating Arrays with Different Types: concat([1, 'a'], true, null, undefined, [5])은 [1, 'a', true, null, undefined, 5]이다.`, () => {
  const expected = [1, 'a', null, undefined, 5];
  console.time('4. concatenating Arrays with Different Types');
  expect(concat([1, 'a'], null, undefined, [5])).toEqual(expected);
  console.timeLog('4. concatenating Arrays with Different Types');
});
test(`5. concatenating Nested Arrays (lodash.concat doesn't flatten arrays): concat([1, [2]], [3, [4]])은 [1, [2], 3, [4]]이다.`, () => {
  const expected = [1, [2], 3, [4]];
  console.time("5. concatenating Nested Arrays (lodash.concat doesn't flatten arrays)");
  expect(concat([1, [2]], [3, [4]])).toEqual(expected);
  console.timeLog("5. concatenating Nested Arrays (lodash.concat doesn't flatten arrays)");
});

test(`6. concatenating an Array with No Additional Values: concat([1, 2, 3])은 [1, 2, 3]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('6. concatenating an Array with No Additional Values');
  expect(concat([1, 2, 3])).toEqual(expected);
  console.timeLog('6. concatenating an Array with No Additional Values');
});

test(`7. concatenating Multiple Values of the Same Type: concat([10], 20, 30, 40)은 [1, 2, 3]이다.`, () => {
  const expected = [10, 20, 30, 40];
  console.time('7. concatenating Multiple Values of the Same Type');
  expect(concat([10], 20, 30, 40)).toEqual(expected);
  console.timeLog('7. concatenating Multiple Values of the Same Type');
});
