import { difference } from 'lodash';
import { expect, test } from 'vitest';
import { EmptyArray } from '../compact/_compact.test';

test(`1. Basic Example with Numbers: _.difference([2, 1], [2, 3])은 [1]이다.`, () => {
  const expected = [1];
  console.time('1. _.difference: Basic Example with Numbers:');
  expect(difference([2, 1], [2, 3])).toEqual(expected);
  console.timeLog('1. _.difference: Basic Example with Numbers:');
});
test(`2. No Common Elements: _.difference([1, 2, 3], [4, 5, 6])은 [1]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('2. _.difference: No Common Elements');
  expect(difference([1, 2, 3], [4, 5, 6])).toEqual(expected);
  console.timeLog('2. _.difference: No Common Elements');
});

test(`3. All Elements in First Array Are in Second Array: _.difference([1, 2, 3], [1, 2, 3])은 []이다.`, () => {
  const expected = [] as EmptyArray;
  console.time('3. _.difference: All Elements in First Array Are in Second Array');
  expect(difference([1, 2, 3], [1, 2, 3])).toEqual(expected);
  console.timeLog('3. _.difference: All Elements in First Array Are in Second Array');
});
test(`4. First Array is Empty: _.difference([], [1, 2, 3])은 []이다.`, () => {
  const expected = [] as EmptyArray;
  console.time('4. _.difference: First Array is Empty');
  expect(difference([], [1, 2, 3])).toEqual(expected);
  console.timeLog('4. _.difference: First Array is Empty');
});
test(`5. Second Array is Empty: _.difference([1, 2, 3], [])은 [1, 2, 3]이다.`, () => {
  const expected = [1, 2, 3];
  console.time('5. _.difference: Second Array is Empty');
  expect(difference([1, 2, 3], [])).toEqual(expected);
  console.timeLog('5. _.difference: Second Array is Empty');
});
test(`6. Arrays with Mixed Data Types: _.difference([1, 'a', true], [1, 'b', false])은 ['a', true]이다.`, () => {
  const expected = ['a', true];
  console.time('6. _.difference: rrays with Mixed Data Types');
  expect(difference([1, 'a', true], [1, 'b', false])).toEqual(expected);
  console.timeLog('6. _.difference: rrays with Mixed Data Types');
});
test(`7. Multiple Arrays (Difference with More than One Array): _.difference([1, 'a', true], [1, 'b', false])은 ['a', true]이다.`, () => {
  const expected = [1];
  console.time('7. _.difference:Multiple Arrays (Difference with More than One Array)');
  expect(difference([1, 2, 3, 4], [2, 3], [4, 5])).toEqual(expected);
  console.timeLog('7. _.difference:Multiple Arrays (Difference with More than One Array)');
});

test(`8. Arrays with Objects (Objects are Compared by Reference, Not Value): _.difference([1, 'a', true], [1, 'b', false])은 ['a', true]이다.`, () => {
  const expected = [{ a: 1 }, { b: 2 }];
  const obj1 = { a: 1 };
  const obj2 = { b: 2 };
  console.time('8. _.difference: Arrays with Objects (Objects are Compared by Reference, Not Value)');
  expect(difference([obj1, obj2], [{ a: 1 }])).toEqual(expected);
  console.timeLog('8. _.difference:Arrays with Objects (Objects are Compared by Reference, Not Value)');
});

test(`9. _.difference Between Arrays with Duplicates: _.difference([1, 2, 2, 3], [2])은 [1, 3]이다.`, () => {
  const expected = [1, 3];
  console.time('9. _.difference: _.difference Between Arrays with Duplicates');
  expect(difference([1, 2, 2, 3], [2])).toEqual(expected);
  console.timeLog('9. _.difference: _.difference Between Arrays with Duplicates');
});

test(`10. Using undefined and nulls: _.difference([undefined, null, 1], [null, 2])은 [undefined, 1]이다.`, () => {
  const expected = [undefined, 1];
  console.time('10. _.difference:Using undefined and null');
  expect(difference([undefined, null, 1], [null, 2])).toEqual(expected);
  console.timeLog('10. _.difference: Using undefined and null');
});

/**
    1. _.difference: Basic Example with Numbers:: 0.599ms
    2. _.difference: No Common Elements: 0.076ms
    3. _.difference: All Elements in First Array Are in Second Array: 0.074ms
    4. _.difference: First Array is Empty: 0.024ms
    5. _.difference: Second Array is Empty: 0.106ms
    6. _.difference: rrays with Mixed Data Types: 0.032ms
    7. _.difference:Multiple Arrays (Difference with More than One Array): 0.024ms
    9. _.difference: _.difference Between Arrays with Duplicates: 0.065ms
 */
