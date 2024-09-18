import { ceil } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog('1. [._ceil] Rounding up an integer: ceil(4.006)는 5다.', expect(ceil(4.006)).toBe(5));
testWithTimeLog(
  '2. [._ceil] Casting a Number to an Array: ceil(6.004, 2)는 6.01다.',
  expect(ceil(6.004, 2)).toBe(6.01)
);
testWithTimeLog('3. [._ceil] Casting a Number to an Array: ceil(7.25, 1)는 7.3다.', expect(ceil(7.25, 1)).toBe(7.3));
testWithTimeLog(
  '4. [._ceil] Rounding up with negative precision (to nearest 10): ceil(6040, -2)는 6100다.',
  expect(ceil(6040, -2)).toBe(6100)
);

testWithTimeLog('5. [._ceil] Rounding up a negative number: ceil(-4.006)는 6100다.', expect(ceil(-4.006)).toBe(-4));
testWithTimeLog(
  '6. [._ceil] Rounding up a negative number with precision to 1 decimal place: ceil(-5.335, 1)는 -5.3다.',
  expect(ceil(-5.335, 1)).toBe(-5.3)
);
testWithTimeLog(
  '7. [._ceil] Rounding a whole number (no change): ceil(10)는 10다.',
  expect(ceil(-5.335, 1)).toBe(-5.3)
);
testWithTimeLog('8. [._ceil]Rounding with precision of 0: ceil(7.004, 0)는 8다.', expect(ceil(7.004, 0)).toBe(8));
testWithTimeLog(
  '9. [._ceil]Rounding with precision of 0: ceil(0.123456, 5)는 0.12346다.',
  expect(ceil(0.123456, 5)).toBe(0.12346)
);

/**
  1. [._ceil] Rounding up an integer: ceil(4.006)는 5다.: 0.042ms
  2. [._ceil] Casting a Number to an Array: ceil(6.004, 2)는 6.01다.: 0.002ms
  3. [._ceil] Casting a Number to an Array: ceil(7.25, 1)는 7.3다.: 0.001ms
  4. [._ceil] Rounding up with negative precision (to nearest 10): ceil(6040, -2)는 6100다.: 0.001ms
  5. [._ceil] Rounding up a negative number: ceil(-4.006)는 6100다.: 0.002ms
  6. [._ceil] Rounding up a negative number with precision to 1 decimal place: ceil(-5.335, 1)는 -5.3다.: 0.002ms
  7. [._ceil] Rounding a whole number (no change): ceil(10)는 10다.: 0.001ms
  8. [._ceil]Rounding with precision of 0: ceil(7.004, 0)는 8다.: 0.001ms
  9. [._ceil]Rounding with precision of 0: ceil(0.123456, 5)는 0.12346다.: 0.002ms
 */
