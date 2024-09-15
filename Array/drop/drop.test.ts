import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import drop from './drop';

testWithTimeLog('1. drop: Dropping Without Specifying n (Default is 1)', expect(drop([1, 2, 3])).toEqual([2, 3]));
testWithTimeLog('2. drop: Dropping When Array is Empty', expect(drop([], 2)).toEqual([]));
testWithTimeLog('3. drop: Dropping More Elements than Array Length', expect(drop([1, 2, 3], 5)).toEqual([]));
testWithTimeLog('4. drop: Dropping Zero Elements', expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]));
testWithTimeLog('5. drop: Dropping Two Elements', expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]));
testWithTimeLog('6. drop: Dropping All Elements', expect(drop([1, 2, 3], 3)).toEqual([]));
testWithTimeLog('7. drop: Dropping from a Mixed-Type Array', expect(drop([1, 'b', true], 1)).toEqual(['b', true]));
testWithTimeLog('8. drop: Dropping No Elements from a Single-Element', expect(drop([1], 0)).toEqual([1]));

/**
  1. drop: Dropping Without Specifying n (Default is 1): 0.041ms
  2. drop: Dropping When Array is Empty: 0.002ms
  3. drop: Dropping More Elements than Array Length: 0.001ms
  4. drop: Dropping Zero Elements: 0.001ms
  5. drop: Dropping Two Elements: 0.002ms
  6. drop: Dropping All Elements: 0.002ms
  7. drop: Dropping from a Mixed-Type Array: 0.001ms
  8. drop: Dropping No Elements from a Single-Element: 0.001ms
  ✓ Array/drop/drop.test.ts  (8 tests) 2ms
 */
