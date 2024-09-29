import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import endsWith from './endsWith';

testWithTimeLog(
  `1. [endsWith] EndsWith for Regular String : endsWith('abcdef', 'ghi')는 거짓이다.`,
  expect(endsWith('abcdef', 'ghi')).toBeFalsy()
);
testWithTimeLog(
  `2. [endsWith]  EndsWith for String with Case Sensitivity : endsWith('Hello World', 'world')는 거짓이다.`,
  expect(endsWith('Hello World', 'world')).toBeFalsy()
);

testWithTimeLog(
  `3. [endsWith] EndsWith for String with Special Characters : endsWith('foo-bar!', '!')는 참이다.`,
  expect(endsWith('foo-bar!', '!')).toBeTruthy()
);

testWithTimeLog(
  `4. [endsWith] EndsWith for String without Matching Ending : endsWith('abcdef', 'ghi')는 거짓이다.`,
  expect(endsWith('abcdef', 'ghi')).toBeFalsy()
);
testWithTimeLog(
  `5. [endsWith] EndsWith with Length Parameter : endsWith('abcdef', 'cd', 4)는 참이다.`,
  expect(endsWith('abcdef', 'cd', 4)).toBeTruthy()
);
testWithTimeLog(
  `6. [endsWith] EndsWith for Single Character Match : endsWith('a', 'a')는 참이다.`,
  expect(endsWith('a', 'a')).toBeTruthy()
);

testWithTimeLog(
  `7. [endsWith] EndsWith for Empty String : endsWith('', '')는 참이다.`,
  expect(endsWith('', '')).toBeTruthy()
);

testWithTimeLog(
  `8. [endsWith] EndsWith with Non-Matching Character at the End : endsWith('foo', 'bar')는 거짓이다.`,
  expect(endsWith('foo', 'bar')).toBeFalsy()
);

testWithTimeLog(
  `9. [endsWith] EndsWith for Matching Entire String: endsWith('abc', 'abc')는 참이다.`,
  expect(endsWith('abc', 'abc')).toBeTruthy()
);

testWithTimeLog(
  `10. [endsWith] EndsWith for String with Numbers: endsWith('12345', '45')는 참이다.`,
  expect(endsWith('12345', '45')).toBeTruthy()
);

testWithTimeLog(
  `11. [endsWith] EndsWith for String with Leading and Trailing Whitespace: endsWith(' hello world ', 'world ')는 참이다.`,
  expect(endsWith(' hello world ', 'world ')).toBeTruthy()
);

testWithTimeLog(
  `12. [endsWith] EndsWith for String with Leading and Trailing Whitespace: endsWith(' hello world ', 'world ')는 참이다.`,
  expect(endsWith(' hello world ', 'world ')).toBeTruthy()
);

/**
1. [endsWith] EndsWith for Regular String : endsWith('abcdef', 'ghi')는 거짓이다.: 0.038ms
2. [endsWith]  EndsWith for String with Case Sensitivity : endsWith('Hello World', 'world')는 거짓이다.: 0.002ms
3. [endsWith] EndsWith for String with Special Characters : endsWith('foo-bar!', '!')는 참이다.: 0.001ms
4. [endsWith] EndsWith for String without Matching Ending : endsWith('abcdef', 'ghi')는 거짓이다.: 0.001ms
5. [endsWith] EndsWith with Length Parameter : endsWith('abcdef', 'cd', 4)는 참이다.: 0.002ms
6. [endsWith] EndsWith for Single Character Match : endsWith('a', 'a')는 참이다.: 0.002ms
7. [endsWith] EndsWith for Empty String : endsWith('', '')는 참이다.: 0.001ms
8. [endsWith] EndsWith with Non-Matching Character at the End : endsWith('foo', 'bar')는 거짓이다.: 0.001ms
9. [endsWith] EndsWith for Matching Entire String: endsWith('abc', 'abc')는 참이다.: 0.002ms
10. [endsWith] EndsWith for String with Numbers: endsWith('12345', '45')는 참이다.: 0.002ms
11. [endsWith] EndsWith for String with Leading and Trailing Whitespace: endsWith(' hello world ', 'world ')는 참이다.: 0.001ms
12. [endsWith] EndsWith for String with Leading and Trailing Whitespace: endsWith(' hello world ', 'world ')는 참이다.: 0.001ms
 */
