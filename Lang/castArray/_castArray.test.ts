import { castArray } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog(
  '1. [_.castArray] Casting a Number to an Array: castArray(1)는 [1]다.',
  expect(castArray(1)).toEqual([1])
);

testWithTimeLog(
  '2. [_.castArray] Casting an Object to an Array: castArray({ a: 1 })는 [[{ a: 1 }]다.',
  expect(castArray(1)).toEqual([1])
);

testWithTimeLog(
  '3. [_.castArray] Casting a String to an Array: castArray("hello")는 ["hello"]다.',
  expect(castArray('hello')).toEqual(['hello'])
);
testWithTimeLog(
  '4. [_.castArray] Passing an Array (Should Return the Array as Is): castArray([1, 2, 3])은 [1, 2, 3]이다.',
  expect(castArray('hello')).toEqual(['hello'])
);

testWithTimeLog(
  '5. [_.castArray] Casting null to an Array: castArray(null))은 [null]이다.',
  expect(castArray(null)).toEqual([null])
);

testWithTimeLog(
  '6. [_.castArray] Casting undefined to an Array: castArray(undefined))은 [undefined]이다.',
  expect(castArray(undefined)).toEqual([undefined])
);

testWithTimeLog(
  '7. [_.castArray] Casting a Boolean Value to an Array: castArray(true))은 [true]이다.',
  expect(castArray(true)).toEqual([true])
);

testWithTimeLog(
  '8. [_.castArray] Casting a NaN Value to an Array: castArray(NaN))은 [NaN]이다.',
  expect(castArray(NaN)).toEqual([NaN])
);

testWithTimeLog(
  '9. [_.castArray] Casting an Empty String to an Array: castArray(""))은 [""]이다.',
  expect(castArray('')).toEqual([''])
);

testWithTimeLog('10. [_.castArray] No Arguments Passed : castArray())은 []이다.', expect(castArray()).toEqual([]));

/**
  1. [_.castArray] Casting a Number to an Array: castArray(1)는 [1]다.: 0.039ms
  2. [_.castArray] Casting an Object to an Array: castArray({ a: 1 })는 [{ a: 1 }]다.: 0.002ms
  3. [_.castArray] Casting a String to an Array: castArray("hello")는 ["hello"]다.: 0.001ms
  4. [_.castArray] Passing an Array (Should Return the Array as Is): castArray([1, 2, 3])은 [1, 2, 3]이다.: 0.001ms
  5. [_.castArray] Casting null to an Array: castArray(null))은 [null]이다.: 0.002ms
  6. [_.castArray] Casting undefined to an Array: castArray(undefined))은 [undefined]이다.: 0.003ms
  7. [_.castArray] Casting a Boolean Value to an Array: castArray(true))은 [true]이다.: 0.001ms
  8. [_.castArray] Casting a NaN Value to an Array: castArray(NaN))은 [NaN]이다.: 0.001ms
  9. [_.castArray] Casting an Empty String to an Array: castArray(""))은 [""]이다.: 0.001ms
  10. [_.castArray] No Arguments Passed : castArray())은 []이다.: 0.002ms
*/
