import { expect, test } from 'vitest';
import { EmptyArray } from '../compact/_compact.test';
import differenceBy from './differenceBy';

test(`1. Basic Example with Numbers Using Math.floor : differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)은 [1.2]이다.`, () => {
  const expected = [1.2];
  console.time('1. differenceBy: Basic Example with Numbers Using Math.floor');
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual(expected);
  console.timeLog('1. differenceBy: Basic Example with Numbers Using Math.floor');
});

test(`2. Using a Property Name as the Iteratee (Objects) : differenceBy([{ 'x': 1 }, { 'x': 2 }], [{ 'x': 1 }], 'x')은 [{ 'x': 2 }]이다.`, () => {
  const expected = [{ x: 2 }];
  console.time('2. differenceBy: Using a Property Name as the Iteratee (Objects)');
  expect(differenceBy([{ x: 1 }, { x: 2 }], [{ x: 1 }], 'x')).toEqual(expected);
  console.timeLog('2. differenceBy: Using a Property Name as the Iteratee (Objects)');
});

test(`3. Using a Custom Iteratee Function : differenceBy([1, 2, 3, 4], [2, 3], value => value * 2)은 [1, 4]이다.`, () => {
  const expected = [1, 4];
  console.time('3. differenceBy: Using a Custom Iteratee Function');
  expect(differenceBy([1, 2, 3, 4], [2, 3], value => value * 2)).toEqual(expected);
  console.timeLog('3. differenceBy: Using a Custom Iteratee Function');
});

test(`4. Empty First Array : differenceBy([], [1.2, 3.4], Math.floor)은 []이다.`, () => {
  const expected = [] as EmptyArray;
  console.time('4. differenceBy: Empty First Array');
  expect(differenceBy([], [1.2, 3.4], Math.floor)).toEqual(expected);
  console.timeLog('4. differenceBy: Empty First Array');
});

test(`5. Empty Second Array : differenceBy([], [1.2, 3.4], Math.floor)은 [1.5, 2.5, 3.5]이다.`, () => {
  const expected = [1.5, 2.5, 3.5];
  console.time('5. differenceBy: Empty Second Array');
  expect(differenceBy([1.5, 2.5, 3.5], [], Math.floor)).toEqual(expected);
  console.timeLog('5. differenceBy: Empty Second Array');
});

test(`6. Difference with null and undefined Using Identity : differenceBy([null, 1, 2], [undefined, 1], (val) => val)은 [null, 2]이다.`, () => {
  const expected = [null, 2];
  console.time('6. differenceBy: Difference with null and undefined Using Identity');
  expect(differenceBy([null, 1, 2], [undefined, 1], val => val)).toEqual(expected);
  console.timeLog('6. differenceBy: Difference with null and undefined Using Identity');
});

test(`7. Custom Iteratee on Complex Objects : differenceBy([{ 'a': 1 }, { 'a': 2 }], [{ 'a': 2 }, { 'a': 3 }],  o => o.a))은 [{ 'a': 1 }]이다.`, () => {
  const expected = [{ a: 1 }];
  console.time('7. differenceBy: Custom Iteratee on Complex Objects');
  expect(differenceBy([{ a: 1 }, { a: 2 }], [{ a: 2 }, { a: 3 }], o => o.a)).toEqual(expected);
  console.timeLog('7. differenceBy: Custom Iteratee on Complex Objects');
});

test(`8. Using String as Iteratee for String Representation : differenceBy([1, '2', 3], [1, 2], String)은 [3]이다.`, () => {
  const expected = [3];
  console.time('8. differenceBy: Using String as Iteratee for String Representation');
  expect(differenceBy([1, '2', 3], [1, 2], String)).toEqual(expected);
  console.timeLog('8. differenceBy: Using String as Iteratee for String Representation');
});

/**
  1. difference: Basic Example with Numbers:: 0.511ms
  2. difference: No Common Elements: 0.034ms
  3. difference: All Elements in First Array Are in Second Array: 0.022ms
  4. difference: First Array is Empty: 0.02ms
  5. difference: Second Array is Empty: 0.098ms
  6. difference: rrays with Mixed Data Types: 0.028ms
  7. difference:Multiple Arrays (Difference with More than One Array): 0.019ms
  9. difference: Difference Between Arrays with Duplicates: 0.107ms
 */
