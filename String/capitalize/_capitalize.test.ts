import { capitalize } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog(
  `1. [_.capitalize] Capitalize a Regular Word : capitalize('hello')는 "Hello"다.`,
  expect(capitalize('hello')).toBe('Hello')
);
testWithTimeLog(
  `2. [_.capitalize] Capitalize a Single Uppercase Letter : capitalize('H')는 "H"다.`,
  expect(capitalize('H')).toBe('H')
);

testWithTimeLog(
  `3. [_.capitalize] Capitalize a Single Lowercase Letter : capitalize('h')는 "H"다.`,
  expect(capitalize('h')).toBe('H')
);

testWithTimeLog(
  `4. [_.capitalize] Capitalize a Word with All Uppercase Letters : capitalize('HELLO')는 "Hello"다.`,
  expect(capitalize('HELLO')).toBe('Hello')
);

testWithTimeLog(
  `5. [_.capitalize] Capitalize a Word with Mixed Case Letters : capitalize('hElLo')는 "Hello"다.`,
  expect(capitalize('hElLo')).toBe('Hello')
);

testWithTimeLog(
  `6. [_.capitalize] Capitalize a Word with Numbers : capitalize('hello123')는 "Hello123"다.`,
  expect(capitalize('hello123')).toBe('Hello123')
);

testWithTimeLog(
  `7. [_.capitalize] Capitalize a Word with Special Characters : capitalize('hello!')는 "Hello!"다.`,
  expect(capitalize('hello!')).toBe('Hello!')
);

testWithTimeLog(
  `8. [_.capitalize] Capitalize a Sentence with Multiple Words : capitalize('hello world')는 "Hello world"다.`,
  expect(capitalize('hello world')).toBe('Hello world')
);

testWithTimeLog(
  `9. [_.capitalize] Capitalize an Empty String (Edge Cases) : capitalize('')는 ""다.(Empty string remains empty)`,
  expect(capitalize('')).toBe('')
);

testWithTimeLog(
  `10. [_.capitalize] Capitalize a String with Only Special Characters (Edge Cases): capitalize('!@#')는 '!@#'다.`,
  expect(capitalize('!@#')).toBe('!@#')
);

testWithTimeLog(
  `11. [_.capitalize] Capitalize a Word with Leading Whitespace (Edge Cases) : capitalize(' hello')는 " hello"다. (Whitespace is retained)`,
  expect(capitalize(' hello')).toBe(' hello')
);

testWithTimeLog(
  `12. [_.capitalize] Capitalize a Word with Trailing Whitespace (Edge Cases) : capitalize('hello ')는 "Hello "다. (Capitalization is applied, but whitespace is retained)`,
  expect(capitalize('hello ')).toBe('Hello ')
);

testWithTimeLog(
  `13. Capitalize a Word with Accented Letters (Edge Cases): capitalize('élève')는 "Élève"다. (Accented letter is capitalized correctly)`,
  expect(capitalize('élève')).toBe('Élève')
);

/**
1. [_.capitalize] Capitalize a Regular Word : capitalize('hello')는 "Hello"다.: 0.043ms
2. [_.capitalize] Capitalize a Single Uppercase Letter : capitalize('H')는 "H"다.: 0.002ms
3. [_.capitalize] Capitalize a Single Lowercase Letter : capitalize('h')는 "H"다.: 0.001ms
4. [_.capitalize] Capitalize a Word with All Uppercase Letters : capitalize('HELLO')는 "Hello"다.: 0.001ms
5. [_.capitalize] Capitalize a Word with Mixed Case Letters : capitalize('hElLo')는 "Hello"다.: 0.003ms
6. [_.capitalize] Capitalize a Word with Numbers : capitalize('hello123')는 "Hello123"다.: 0.003ms
7. [_.capitalize] Capitalize a Word with Special Characters : capitalize('hello!')는 "Hello!"다.: 0.001ms
8. [_.capitalize] Capitalize a Sentence with Multiple Words : capitalize('hello world')는 "Hello world"다.: 0.003ms
9. [_.capitalize] Capitalize an Empty String (Edge Cases) : capitalize('')는 ""다.(Empty string remains empty): 0.002ms
10. [_.capitalize] Capitalize a String with Only Special Characters (Edge Cases): capitalize('!@#')는 '!@#'다.: 0.002ms
11. [_.capitalize] Capitalize a Word with Leading Whitespace (Edge Cases) : capitalize(' hello')는 " hello"다. (Whitespace is retained): 0.001ms
12. [_.capitalize] Capitalize a Word with Trailing Whitespace (Edge Cases) : capitalize('hello ')는 "Hello "다. (Capitalization is applied, but whitespace is retained): 0.001ms
13. Capitalize a Word with Accented Letters (Edge Cases): capitalize('élève')는 "Élève"다. (Accented letter is capitalized correctly): 0.001ms
 */
