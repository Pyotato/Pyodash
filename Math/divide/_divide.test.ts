import { divide } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog('1. [._divide] Basic Division: divide(10, 2)는 5다.', expect(divide(10, 2)).toBe(5));
testWithTimeLog(
  '2. [._divide] Division with Negative Numbers: divide(-10, 2)는 -5다.',
  expect(divide(-10, 2)).toBe(-5)
);
testWithTimeLog('3. [._divide] Division by Zero: divide(10, 0)는 Infinity다.', expect(divide(10, 0)).toBe(Infinity));
testWithTimeLog('4. [._divide] Division of Zero: divide(0, 10)는 0다.', expect(divide(0, 10)).toBe(0));
testWithTimeLog(
  '6. [._divide] Division with Float Numbers: divide(5.5, 2)는 2.75다.',
  expect(divide(5.5, 2)).toBe(2.75)
);
testWithTimeLog(
  '7. [._divide] Division of Positive by Negative Number: divide(10, -2)는 -5다.',
  expect(divide(10, -2)).toBe(-5)
);
testWithTimeLog(
  '8. [._divide] Division of a Large Number: divide(1000000, 10)는 100000다.',
  expect(divide(1000000, 10)).toBe(100000)
);
testWithTimeLog('9. [._divide] Division by a Float: divide(10, 2.5)는 4다.', expect(divide(10, 2.5)).toBe(4));
testWithTimeLog('10. [._divide] Division by 1: divide(10, 1)는 1다.', expect(divide(10, 1)).toBe(10));
testWithTimeLog('11. [._divide] Division of Negative Zero: divide(-0, 10)는 -0다.', expect(divide(-0, 10)).toBe(-0));

/**
  1. [._divide] Basic Division: divide(10, 2)는 5다.: 0.04ms
  2. [._divide] Division with Negative Numbers: divide(-10, 2)는 -5다.: 0.002ms
  3. [._divide] Division by Zero: divide(10, 0)는 Infinity다.: 0.001ms
  4. [._divide] Division of Zero: divide(0, 10)는 0다.: 0.001ms
  6. [._divide] Division with Float Numbers: divide(5.5, 2)는 2.75다.: 0.002ms
  7. [._divide] Division of Positive by Negative Number: divide(10, -2)는 -5다.: 0.002ms
  8. [._divide] Division of a Large Number: divide(1000000, 10)는 100000다.: 0.001ms
  9. [._divide] Division by a Float: divide(10, 2.5)는 4다.: 0.001ms
  10. [._divide] Division by 1: divide(10, 1)는 1다.: 0.001ms
  11. [._divide] Division of Negative Zero: divide(-0, 10)는 -0다.: 0.002ms
 */
