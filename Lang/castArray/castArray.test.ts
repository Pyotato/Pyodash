import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import castArray from './castArray';

testWithTimeLog(
  '1. [castArray] Casting a Number to an Array: castArray(1)는 [1]다.',
  expect(castArray(1)).toEqual([1])
);

testWithTimeLog(
  '2. [castArray] Casting an Object to an Array: castArray({ a: 1 })는 [[{ a: 1 }]다.',
  expect(castArray(1)).toEqual([1])
);

testWithTimeLog(
  '3. [castArray] Casting a String to an Array: castArray("hello")는 ["hello"]다.',
  expect(castArray('hello')).toEqual(['hello'])
);
testWithTimeLog(
  '4. [castArray] Passing an Array (Should Return the Array as Is): castArray([1, 2, 3])은 [1, 2, 3]이다.',
  expect(castArray([1, 2, 3])).toEqual([1, 2, 3])
);

testWithTimeLog(
  '5. [castArray] Casting null to an Array: castArray(null))은 [null]이다.',
  expect(castArray(null)).toEqual([null])
);

testWithTimeLog(
  '6. [castArray] Casting undefined to an Array: castArray(undefined))은 [undefined]이다.',
  expect(castArray(undefined)).toEqual([undefined])
);

testWithTimeLog(
  '7. [castArray] Casting a Boolean Value to an Array: castArray(true))은 [true]이다.',
  expect(castArray(true)).toEqual([true])
);

testWithTimeLog(
  '8. [castArray] Casting a NaN Value to an Array: castArray(NaN))은 [NaN]이다.',
  expect(castArray(NaN)).toEqual([NaN])
);

testWithTimeLog(
  '9. [castArray] Casting an Empty String to an Array: castArray(""))은 [""]이다.',
  expect(castArray('')).toEqual([''])
);

testWithTimeLog('10. [castArray] No Arguments Passed : castArray())은 []]이다.', expect(castArray()).toEqual([]));

/**

*/
