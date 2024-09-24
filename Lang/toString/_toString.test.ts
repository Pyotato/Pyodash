import { toString } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog('1. [_.toString] Same numbers (positive): toString(1)는 "1"다.', expect(toString(1)).toBe('1'));
testWithTimeLog('2. [_.toString] Negative number: toString(-1)는 "-1"다.', expect(toString(-1)).toBe('-1'));
testWithTimeLog('3. [_.toString] Zero: toString(0)는 "0"다.', expect(toString(0)).toBe('0'));
testWithTimeLog('4. [_.toString] Negative zero: toString(-0)는 "-0"다.', expect(toString(-0)).toBe('-0'));
testWithTimeLog('5. [_.toString] Null: toString(null)는 ""다.', expect(toString(null)).toBe(''));
testWithTimeLog('6. [_.toString] Undefined: toString(undefined)는 ""다.', expect(toString(undefined)).toBe(''));
testWithTimeLog(
  '7. [_.toString] String Input: toString("hello")는 "hello"다.',
  expect(toString('hello')).toBe('hello')
);
testWithTimeLog('8. [_.toString] Boolean true: toString(true)는 "true"다.', expect(toString('true')).toBe('true'));
testWithTimeLog('9. [_.toString] Boolean false: toString(false)는 "false"다.', expect(toString(false)).toBe('false'));
testWithTimeLog(
  '10. [_.toString] Array with numbers: toString([1, 2, 3])는 "1,2,3"다.',
  expect(toString([1, 2, 3])).toBe('1,2,3')
);
testWithTimeLog(
  '11. [_.toString] Array with mixed types: toString([1, "two", true])는 "1,two,true"다.',
  expect(toString([1, 'two', true])).toBe('1,two,true')
);
testWithTimeLog('12. [_.toString] Empty array: toString([])는 ""다.', expect(toString([])).toBe(''));
testWithTimeLog(
  '13. [_.toString] Object: toString({ a: 1 })는 "[object Object]"다.',
  expect(toString({ a: 1 })).toBe('[object Object]')
);
testWithTimeLog(
  '14. [_.toString] Infinity: toString(Infinity)는 "Infinity"다.',
  expect(toString(Infinity)).toBe('Infinity')
);
testWithTimeLog('15. [_.toString] NaN: toString(NaN)는 "NaN"다.', expect(toString(NaN)).toBe('NaN'));

/**
1. [_.toString] Same numbers (positive): toString(1)는 "1"다.: 0.043ms
2. [_.toString] Negative number: toString(-1)는 "-1"다.: 0.002ms
3. [_.toString] Zero: toString(0)는 "0"다.: 0.001ms
4. [_.toString] Negative zero: toString(-0)는 "-0"다.: 0.001ms
5. [_.toString] Null: toString(null)는 ""다.: 0.002ms
6. [_.toString] Undefined: toString(undefined)는 ""다.: 0.003ms
7. [_.toString] String Input: toString("hello")는 "hello"다.: 0.001ms
8. [_.toString] Boolean true: toString(true)는 "true"다.: 0.001ms
9. [_.toString] Boolean false: toString(false)는 "false"다.: 0.002ms
10. [_.toString] Array with numbers: toString([1, 2, 3])는 "1,2,3"다.: 0.002ms
11. [_.toString] Array with mixed types: toString([1, "two", true])는 "1,two,true"다.: 0.001ms
12. [_.toString] Empty array: toString([])는 ""다.: 0.001ms
13. [_.toString] Object: toString({ a: 1 })는 "[object Object]"다.: 0ms
14. [_.toString] Infinity: toString(Infinity)는 "Infinity"다.: 0ms
15. [_.toString] NaN: toString(NaN)는 "NaN"다.: 0ms
*/
