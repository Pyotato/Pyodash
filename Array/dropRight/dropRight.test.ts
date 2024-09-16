import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import dropRight from './dropRight';

testWithTimeLog(
  '1 dropRight: Basic Dropping of One Element from the Right',
  expect(dropRight([1, 2, 3])).toEqual([1, 2])
);
testWithTimeLog('2 dropRight: Dropping More Elements than Array Length', expect(dropRight([1, 2, 3], 5)).toEqual([]));
testWithTimeLog('3 dropRight: Dropping Zero Elements', expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]));
testWithTimeLog(
  '4 dropRight: Dropping Two Elements from the Right',
  expect(dropRight([1, 2, 3, 4], 2)).toEqual([1, 2])
);
testWithTimeLog('5 dropRight: Dropping When Array is Empty', expect(dropRight([], 2)).toEqual([]));
testWithTimeLog('6 dropRight: Dropping All Elements', expect(dropRight([1, 2, 3], 3)).toEqual([]));
testWithTimeLog(
  '7 dropRight: Dropping Without Specifying n (Default is 1)',
  expect(dropRight([1, 2, 3])).toEqual([1, 2])
);
testWithTimeLog('8 dropRight: Dropping from a Non-Numeric Array', expect(dropRight(['a', 'b', 'c'], 2)).toEqual(['a']));
testWithTimeLog(
  '9 dropRight: Dropping from a Mixed-Type Array',
  expect(dropRight([1, 'b', true], 1)).toEqual([1, 'b'])
);
testWithTimeLog(
  '10 dropRight: Dropping No Elements from a Single-Element Array',
  expect(dropRight([[1], 0])).toEqual([[1]])
);

/**
  1 dropRight: Basic Dropping of One Element from the Right: 0.041ms
  2 dropRight: Dropping More Elements than Array Length: 0.002ms
  3 dropRight: Dropping Zero Elements: 0.001ms
  4 dropRight: Dropping Two Elements from the Right: 0.001ms
  5 dropRight: Dropping When Array is Empty: 0.003ms
  6 dropRight: Dropping All Elements: 0.003ms
  7 dropRight: Dropping Without Specifying n (Default is 1): 0.001ms
  8 dropRight: Dropping from a Non-Numeric Array: 0.001ms
  9 dropRight: Dropping from a Mixed-Type Array: 0.002ms
  10 dropRight: Dropping No Elements from a Single-Element Array: 0.002ms
 */
