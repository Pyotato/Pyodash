import { identity } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

let object = { a: 1 };

testWithTimeLog(
  `1. [_.identity]:
      let object = { 'a': 1 };일 때,
      identity(object) === object은 true다.`,
  expect(identity(object) === object).toBeTruthy()
);

testWithTimeLog(
  `2. [_.identity] Identity returns a primitive value : identity(42)은 42이다.`,
  expect(identity(42)).toBe(42)
);

testWithTimeLog(
  `3. [_.identity] Identity returns a string : identity('hello')은 'hello'다.`,
  expect(identity('hello')).toBe('hello')
);

testWithTimeLog(
  `4. [_.identity] Identity returns a boolean value : identity(true)은 true다.`,
  expect(identity(true)).toBe(true)
);

const arr = [1, 2, 3];

testWithTimeLog(
  `5. [_.identity] Identity returns an array reference : 
        const arr = [1, 2, 3]; 일 때, 
        identity(arr) === arr은 true다.`,
  expect(identity(arr) === arr).toBeTruthy()
);

const obj = { a: 1, b: 2 };

testWithTimeLog(
  `6. [_.identity] Identity returns an object reference : 
          const obj = { a: 1, b: 2 }; 일 때, 
          identity(obj) === obj은 true다.`,
  expect(identity(obj) === obj).toBeTruthy()
);

testWithTimeLog(
  `7. [_.identity] Identity returns null : identity(null)은 null이다.`,
  expect(identity(null)).toBe(null)
);

testWithTimeLog(
  `8. [_.identity] Identity returns undefined : identity(undefined)은 undefined이다.`,
  expect(identity(undefined)).toBe(undefined)
);

const fn = () => {};

testWithTimeLog(
  `9. [_.identity] Identity returns a function reference : 
        const fn = () => {}; 일 때,
        identity(fn) === fn은 true이다.`,
  expect(identity(fn) === fn).toBeTruthy()
);

testWithTimeLog(
  `10. [_.identity] Identity with no argument (this will return undefined): identity()는 undefined이다.`,
  expect(identity()).toBe(undefined)
);

const sym = Symbol('sym');

testWithTimeLog(
  `11. [_.identity]Identity works with symbol: 
        const sym = Symbol('sym'); 일 떄, 
        identity(sym)는 sym이다.`,
  expect(identity(sym)).toBe(sym)
);

/**
  1. [_.identity]:
        let object = { 'a': 1 };일 때,
        identity(object) === object은 true다.: 0.041ms
  2. [_.identity] Identity returns a primitive value : identity(42)은 42이다.: 0.002ms
  3. [_.identity] Identity returns a string : identity('hello')은 'hello'다.: 0.001ms
  4. [_.identity] Identity returns a boolean value : identity(true)은 true다.: 0.002ms
  5. [_.identity] Identity returns an array reference : 
          const arr = [1, 2, 3]; 일 때, 
          identity(arr) === arr은 true다.: 0.003ms
  6. [_.identity] Identity returns an object reference : 
            const obj = { a: 1, b: 2 }; 일 때, 
            identity(obj) === obj은 true다.: 0.003ms
  7. [_.identity] Identity returns null : identity(null)은 null이다.: 0.001ms
  8. [_.identity] Identity returns undefined : identity(undefined)은 undefined이다.: 0.001ms
  9. [_.identity] Identity returns a function reference : 
          const fn = () => {}; 일 때,
          identity(fn) === fn은 true이다.: 0.002ms
  10. [_.identity] Identity with no argument (this will return undefined): identity()는 undefined이다.: 0.002ms
  11. [_.identity]Identity works with symbol: 
          const sym = Symbol('sym'); 일 떄, 
          identity(sym)는 sym이다.: 0.001ms
 */
