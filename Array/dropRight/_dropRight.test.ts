import { dropRight } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog(
  '1. [_.dropRight] Basic Dropping of One Element from the Right: dropRight([1, 2, 3])은 [1, 2]이다.',
  expect(dropRight([1, 2, 3])).toEqual([1, 2])
);
testWithTimeLog(
  '2. [_.dropRight] Dropping More Elements than Array Length: dropRight([1, 2, 3], 5)은 []이다.',
  expect(dropRight([1, 2, 3], 5)).toEqual([])
);
testWithTimeLog(
  '3. [_.dropRight] Dropping Zero Elements: dropRight([1, 2, 3], 0)은 [1, 2, 3]이다.',
  expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3])
);
testWithTimeLog(
  '4. [_.dropRight] Dropping Two Elements from the Right: dropRight([1, 2, 3, 4], 2)은 [1, 2]이다.',
  expect(dropRight([1, 2, 3, 4], 2)).toEqual([1, 2])
);
testWithTimeLog(
  '5. [_.dropRight] Dropping When Array is Empty: dropRight([], 2)은 []이다.',
  expect(dropRight([], 2)).toEqual([])
);
testWithTimeLog(
  '6. [_.dropRight] Dropping All Elements: dropRight([1, 2, 3], 3)은 []이다.',
  expect(dropRight([1, 2, 3], 3)).toEqual([])
);
testWithTimeLog(
  '7. [_.dropRight] Dropping Without Specifying n (Default is 1): dropRight([1, 2, 3])은 [1, 2]이다.',
  expect(dropRight([1, 2, 3])).toEqual([1, 2])
);
testWithTimeLog(
  '8. [_.dropRight] Dropping from a Non-Numeric Array: dropRight(["a", "b", "c"], 2)은 ["a"]이다.',
  expect(dropRight(['a', 'b', 'c'], 2)).toEqual(['a'])
);
testWithTimeLog(
  '9. [_.dropRight] Dropping from a Mixed-Type Array: dropRight([1, "b", true], 1)은 [1, "b"]이다.',
  expect(dropRight([1, 'b', true], 1)).toEqual([1, 'b'])
);
testWithTimeLog(
  '10. [_.dropRight] Dropping No Elements from a Single-Element Array: dropRight([[1], 0])은 [[1]]이다.',
  expect(dropRight([[1], 0])).toEqual([[1]])
);
/**
  1. [_.dropRight] Basic Dropping of One Element from the Right: dropRight([1, 2, 3])은 [1, 2]이다.: 0.04ms
  2. [_.dropRight] Dropping More Elements than Array Length: dropRight([1, 2, 3], 5)은 []이다.: 0.002ms
  3. [_.dropRight] Dropping Zero Elements: dropRight([1, 2, 3], 0)은 [1, 2, 3]이다.: 0.001ms
  4. [_.dropRight] Dropping Two Elements from the Right: dropRight([1, 2, 3, 4], 2)은 [1, 2]이다.: 0.001ms
  5. [_.dropRight] Dropping When Array is Empty: dropRight([], 2)은 []이다.: 0.002ms
  6. [_.dropRight] Dropping All Elements: dropRight([1, 2, 3], 3)은 []이다.: 0.003ms
  7. [_.dropRight] Dropping Without Specifying n (Default is 1): dropRight([1, 2, 3])은 [1, 2]이다.: 0.001ms
  8. [_.dropRight] Dropping from a Non-Numeric Array: dropRight(["a", "b", "c"], 2)은 ["a"]이다.: 0.001ms
  9. [_.dropRight] Dropping from a Mixed-Type Array: dropRight([1, "b", true], 1)은 [1, "b"]이다.: 0.002ms
  10. [_.dropRight] Dropping No Elements from a Single-Element Array: dropRight([[1], 0])은 [[1]]이다.: 0.002ms
 */
