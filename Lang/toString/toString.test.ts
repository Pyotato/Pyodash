import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import toString from './toString';

testWithTimeLog('1. [toString] Same numbers (positive): toString(1)는 "1"다.', expect(toString(1)).toBe('1'));
testWithTimeLog('2. [toString] Negative number: toString(-1)는 "-1"다.', expect(toString(-1)).toBe('-1'));
testWithTimeLog('3. [toString] Zero: toString(0)는 "0"다.', expect(toString(0)).toBe('0'));
testWithTimeLog('4. [toString] Negative zero: toString(-0)는 "-0"다.', expect(toString(-0)).toBe('-0'));
testWithTimeLog('5. [toString] Null: toString(null)는 ""다.', expect(toString(null)).toBe(''));
testWithTimeLog('6. [toString] Undefined: toString(undefined)는 ""다.', expect(toString(undefined)).toBe(''));
testWithTimeLog('7. [toString] String Input: toString("hello")는 "hello"다.', expect(toString('hello')).toBe('hello'));
testWithTimeLog('8. [toString] Boolean true: toString(true)는 "true"다.', expect(toString('true')).toBe('true'));
testWithTimeLog('9. [toString] Boolean false: toString(false)는 "false"다.', expect(toString(false)).toBe('false'));
testWithTimeLog(
  '10. [toString] Array with numbers: toString([1, 2, 3])는 "1,2,3"다.',
  expect(toString([1, 2, 3])).toBe('1,2,3')
);
testWithTimeLog(
  '11. [toString] Array with mixed types: toString([1, "two", true])는 "1,two,true"다.',
  expect(toString([1, 'two', true])).toBe('1,two,true')
);
testWithTimeLog('12. [toString] Empty array: toString([])는 ""다.', expect(toString([])).toBe(''));
testWithTimeLog(
  '13. [toString] Object: toString({ a: 1 })는 "[object Object]"다.',
  expect(toString({ a: 1 })).toBe('[object Object]')
);
testWithTimeLog(
  '14. [toString] Infinity: toString(Infinity)는 "Infinity"다.',
  expect(toString(Infinity)).toBe('Infinity')
);
testWithTimeLog('15. [toString] NaN: toString(NaN)는 "NaN"다.', expect(toString(NaN)).toBe('NaN'));

/**
  1. [toString] Same numbers (positive): toString(1)는 "1"다.: 0.043ms
  2. [toString] Negative number: toString(-1)는 "-1"다.: 0.002ms
  3. [toString] Zero: toString(0)는 "0"다.: 0.001ms
  4. [toString] Negative zero: toString(-0)는 "-0"다.: 0.001ms
  5. [toString] Null: toString(null)는 ""다.: 0.003ms
  6. [toString] Undefined: toString(undefined)는 ""다.: 0.002ms
  7. [toString] String Input: toString("hello")는 "hello"다.: 0.001ms
  8. [toString] Boolean true: toString(true)는 "true"다.: 0.001ms
  9. [toString] Boolean false: toString(false)는 "false"다.: 0.002ms
  10. [toString] Array with numbers: toString([1, 2, 3])는 "1,2,3"다.: 0.005ms
  11. [toString] Array with mixed types: toString([1, "two", true])는 "1,two,true"다.: 0.001ms
  12. [toString] Empty array: toString([])는 ""다.: 0.001ms
  13. [toString] Object: toString({ a: 1 })는 "[object Object]"다.: 0.001ms
  14. [toString] Infinity: toString(Infinity)는 "Infinity"다.: 0ms
  15. [toString] NaN: toString(NaN)는 "NaN"다.: 0ms
*/
