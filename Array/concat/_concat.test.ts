import _ from 'lodash';
import { expect, test } from 'vitest';

test(`1. _.concatenating Arrays: _.concat([1], [2], [3, 4]])은 [1, 2, 3, 4]]이다.`, () => {
  const expected = [1, 2, 3, 4];
  console.time('1. _.concatenating Arrays');
  expect(_.concat([1], [2], [3, 4])).toEqual(expected);
  console.timeLog('1. _.concatenating Arrays');
});

test(`2. _.concatenating Values to an Array: _.concat([1, 2], 3, 4)은 [1, 2, 3, 4]이다.`, () => {
  const expected = [1, 2, 3, 4];
  console.time('2. _.concatenating Values to an Array');
  expect(_.concat([1, 2], 3, 4)).toEqual(expected);
  console.timeLog('2. _.concatenating Values to an Array');
});

test(`3. _.concatenating with an Empty Array: _.concat([], 1, 2, [3, 4])은 [1, 2, 3, 4]이다.`, () => {
  const expected = [1, 2, 3, 4];
  console.time('3. _.concatenating with an Empty Array');
  expect(_.concat([], 1, 2, [3, 4])).toEqual(expected);
  console.timeLog('3. _.concatenating with an Empty Array');
});

test(`4. _.concatenating Arrays with Different Types: _.concat([1, 'a'], true, null, undefined, [5])은 [1, 'a', true, null, undefined, 5]이다.`, () => {
  const expected = [1, 'a', null, undefined, 5];
  console.time('4. _.concatenating Arrays with Different Types');
  expect(_.concat([1, 'a'], null, undefined, [5])).toEqual(expected);
  console.timeLog('4. _.concatenating Arrays with Different Types');
});
test(`5. _.concatenating Nested Arrays (lodash._.concat doesn't flatten arrays): _.concat([1, [2]], [3, [4]])은 [1, [2], 3, [4]]이다.`, () => {
  const expected = [1, [2], 3, [4]];
  console.time("5. _.concatenating Nested Arrays (lodash._.concat doesn't flatten arrays)");
  expect(_.concat([1, [2]], [3, [4]])).toEqual(expected);
  console.timeLog("5. _.concatenating Nested Arrays (lodash._.concat doesn't flatten arrays)");
});

test(`6. _.concatenating an Array with No Additional Values: _.concat([1, 2, 3])은 [1, 2, 3]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('6. _.concatenating an Array with No Additional Values');
  expect(_.concat([1, 2, 3])).toEqual(expected);
  console.timeLog('6. _.concatenating an Array with No Additional Values');
});

test(`7. _.concatenating Multiple Values of the Same Type: _.concat([10], 20, 30, 40)은 [1, 2, 3]이다.`, () => {
  const expected = [10, 20, 30, 40];
  console.time('7. _.concatenating Multiple Values of the Same Type');
  expect(_.concat([10], 20, 30, 40)).toEqual(expected);
  console.timeLog('7. _.concatenating Multiple Values of the Same Type');
});
