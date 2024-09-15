import { drop } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog('1. _.drop: Dropping Without Specifying n (Default is 1)', expect(drop([1, 2, 3])).toEqual([2, 3]));
testWithTimeLog('2. _.drop: Dropping When Array is Empty', expect(drop([], 2)).toEqual([]));
testWithTimeLog('3. _.drop: Dropping More Elements than Array Length', expect(drop([1, 2, 3], 5)).toEqual([]));
testWithTimeLog('4. _.drop: Dropping Zero Elements', expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]));
testWithTimeLog('5. _.drop: Dropping Two Elements', expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]));
testWithTimeLog('6. _.drop: Dropping All Elements', expect(drop([1, 2, 3], 3)).toEqual([]));
testWithTimeLog('7. _.drop: Dropping from a Mixed-Type Array', expect(drop([1, 'b', true], 1)).toEqual(['b', true]));
testWithTimeLog('8. _.drop: Dropping No Elements from a Single-Element', expect(drop([1], 0)).toEqual([1]));

/**
  1. _.drop: Dropping Without Specifying n (Default is 1): 0.038ms
  2. _.drop: Dropping When Array is Empty: 0.002ms
  3. _.drop: Dropping More Elements than Array Length: 0.001ms
  4. _.drop: Dropping Zero Elements: 0.001ms
  5. _.drop: Dropping Two Elements: 0.002ms
  6. _.drop: Dropping All Elements: 0.003ms
  7. _.drop: Dropping from a Mixed-Type Array: 0.001ms
  8. _.drop: Dropping No Elements from a Single-Element: 0.001ms
  ✓ Array/drop/_drop.test.ts  (8 tests) 2ms
 */
