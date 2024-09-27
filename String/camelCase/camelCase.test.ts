import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import camelCase from './camelCase';
testWithTimeLog(
  '1. [camelCase] CamelCase for Regular Sentence : camelCase("Hello World")는 "helloWorld"다.',
  expect(camelCase('Hello World')).toBe('helloWorld')
);
testWithTimeLog(
  '2. [camelCase] CamelCase for Hyphenated Words : camelCase("foo-bar-baz")는 "fooBarBaz"다.',
  expect(camelCase('foo-bar-baz')).toBe('fooBarBaz')
);
testWithTimeLog(
  '3. [camelCase] CamelCase for Underscored Words : camelCase("foo_bar_baz")는 "fooBarBaz"다.',

  expect(camelCase('foo_bar_baz')).toBe('fooBarBaz')
);

testWithTimeLog(
  '4. [camelCase] CamelCase for Mixed Delimiters : camelCase("Foo-Bar_baz")는 "fooBarBaz"다.',

  expect(camelCase('Foo-Bar_baz')).toBe('fooBarBaz')
);

testWithTimeLog(
  '5. [camelCase] CamelCase for Single Word : camelCase("Hello")는 "hello"다.',

  expect(camelCase('Hello')).toBe('hello')
);

testWithTimeLog(
  '6. [camelCase] CamelCase for Uppercase String : camelCase("HELLO WORLD")는 "helloWorld"다.',

  expect(camelCase('HELLO WORLD')).toBe('helloWorld')
);

testWithTimeLog(
  '7. [camelCase] CamelCase for Mixed Case Words : camelCase("hELLo wORLd")는 "helloWorld"다.',

  expect(camelCase('hELLo wORLd')).toBe('helloWorld')
);

testWithTimeLog(
  '8. [camelCase] CamelCase for String with Numbers (Edge cases) : camelCase("hello 123 world")는 "hello123World"다.',

  expect(camelCase('hello 123 world')).toBe('hello123World')
);

testWithTimeLog(
  '9. [camelCase] CamelCase for Empty String (Edge cases) : camelCase("")는 ""(빈 문자열)다.',

  expect(camelCase('')).toBe('')
);

testWithTimeLog(
  '10. [camelCase] CamelCase for String with Special Characters (Edge cases) : camelCase("hello$world")는 "helloWorld"다.',

  expect(camelCase('hello$world')).toBe('helloWorld')
);

testWithTimeLog(
  '11. [camelCase] CamelCase for String with Multiple Spaces (Edge cases) : camelCase(" hello world ")는 "helloWorld"다.',

  expect(camelCase(' hello world ')).toBe('helloWorld')
);

testWithTimeLog(
  '12. [camelCase] CamelCase for String with Leading or Trailing Delimiters (Edge cases) : camelCase("--foo-bar--")는 "fooBar"다.',

  expect(camelCase('--foo-bar--')).toBe('fooBar')
);

testWithTimeLog(
  '13. [camelCase] CamelCase for Special Characters only (Edge cases) : camelCase("@#$!!")는 ""다.',
  expect(camelCase('@#$!!')).toBe('')
);
/**
  1. [camelCase] CamelCase for Regular Sentence : camelCase("Hello World")는 "helloWorld"다.: 0.04ms
  2. [camelCase] CamelCase for Hyphenated Words : camelCase("foo-bar-baz")는 "fooBarBaz"다.: 0.002ms
  3. [camelCase] CamelCase for Underscored Words : camelCase("foo_bar_baz")는 "fooBarBaz"다.: 0.001ms
  4. [camelCase] CamelCase for Mixed Delimiters : camelCase("Foo-Bar_baz")는 "fooBarBaz"다.: 0.001ms
  5. [camelCase] CamelCase for Single Word : camelCase("Hello")는 "hello"다.: 0.002ms
  6. [camelCase] CamelCase for Uppercase String : camelCase("HELLO WORLD")는 "helloWorld"다.: 0.002ms
  7. [camelCase] CamelCase for Mixed Case Words : camelCase("hELLo wORLd")는 "helloWorld"다.: 0.001ms
  8. [camelCase] CamelCase for String with Numbers (Edge cases) : camelCase("hello 123 world")는 "hello123World"다.: 0.001ms
  9. [camelCase] CamelCase for Empty String (Edge cases) : camelCase("")는 ""(빈 문자열)다.: 0.002ms
  10. [camelCase] CamelCase for String with Special Characters (Edge cases) : camelCase("hello$world")는 "helloWorld"다.: 0.002ms
  11. [camelCase] CamelCase for String with Multiple Spaces (Edge cases) : camelCase(" hello world ")는 "helloWorld"다.: 0.001ms
  12. [camelCase] CamelCase for String with Leading or Trailing Delimiters (Edge cases) : camelCase("--foo-bar--")는 "fooBar"다.: 0.001ms
  13. [camelCase] CamelCase for Special Characters only (Edge cases) : camelCase("@#$!!")는 ""다.: 0ms
 */
