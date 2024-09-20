import { clone } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

const obj = { a: 1, b: 2 };

testWithTimeLog(
  '1. [_.clone] Shallow clone of a simple object : const obj = { a: 1, b: 2 }일 때, clone(obj) === obj 는 거짓이다. (reference가 다르다)',
  expect(clone(obj) === obj).toBeFalsy()
);

const arr = [1, 2, 3];

testWithTimeLog(
  '2. [_.clone] Shallow clone of an array: const arr = [1, 2, 3]일 때, clone(arr) === arr는 거짓이다. (reference가 다르다)',
  expect(clone(arr) === arr).toBeFalsy()
);

const obj3 = { a: 1, b: { c: 2 } };

testWithTimeLog(
  '3. [_.clone] Shallow clone of a nested object (only top level cloned): const obj3 = { a: 1, b: { c: 2 } }일 경우, clone(obj3) === obj3은 거짓이다 (different references).',
  expect(clone(obj3) === obj3).toBeFalsy()
);

testWithTimeLog(
  '4. [_.clone] Shallow clone of a nested object (only top level cloned): const obj3 = { a: 1, b: { c: 2 } }일 경우, clone(obj3).b 와 clone(obj3).b은 같다 (shallow clone: same reference for nested objects).',
  expect(clone(obj3).b).toEqual(obj3.b)
);

const func = function () {
  return 'test';
};

testWithTimeLog(
  '5. [_.clone] Empty object is returned for uncloneable values(error objects, functions, DOM nodes, and WeakMaps): const func = function() { return "test"; }일 경우, clone(func)은 빈 객체다.',
  expect(clone(func)).toEqual({})
);

const obj6 = { a: [1, 2, 3], b: 4 };

testWithTimeLog(
  '6. [_.clone] Clone of an object with array properties: const obj6 = { a: [1, 2, 3], b: 4 }일 경우, clone(obj6).a은 obj6.a와 같다.',
  expect(clone(obj6).a).toEqual(obj6.a)
);

const num = 10;

testWithTimeLog(
  '7. [_.clone] Clone of a primitive value (no change expected): const num = 10일 경우, clone(num)은 num와 같다.',
  expect(clone(num)).toEqual(num)
);

const date = new Date();

testWithTimeLog(
  '8. [_.clone] Clone a Date object: const date = new Date()일 경우 (same time value), clone(date).getTime()은 date.getTime()와 같다.',
  expect(clone(date).getTime()).toEqual(date.getTime())
);

testWithTimeLog(
  '9. [_.clone] Clone a Date object (different references): const date = new Date()일 경우, clone(date)===date은 거짓이다.',
  expect(clone(date) === date).toBeFalsy()
);

const obj10 = { a: undefined, b: 1 };

testWithTimeLog(
  '10. [_.clone] Clone an object with undefined value (different references): const obj10 = { a: undefined, b: 1 }일 경우, clone(obj10) === obj10은 거짓이다.',
  expect(clone(obj10) === obj10).toBeFalsy()
);

const map = new Map([[1, 'one']]);
testWithTimeLog(
  '11. [_.clone]  Clone a Map or Set : const map = new Map([[1, "one"]])일 경우, clone(map).get(1)와 map.get(1)은 같다 (same value).',
  expect(clone(map).get(1)).toEqual(map.get(1))
);
testWithTimeLog(
  '12. [_.clone]  Clone a Map or Set : const map = new Map([[1, "one"]])일 경우, clone(map)와 map은 같다 (shallow clone: references remain the same).',
  expect(clone(map)).toEqual(map)
);

const wm1 = new WeakMap();
const o1 = {};
wm1.set(o1, 37);

testWithTimeLog(
  '13. [clone]  Cloning a WeakMap returns empty object: const wm1 = new WeakMap()일 경우, clone(wm1)은 {}이다.',
  expect(clone(wm1)).toEqual({})
);

/**
  1. [_.clone] Shallow clone of a simple object : const obj = { a: 1, b: 2 }일 때, clone(obj) === obj 는 거짓이다. (reference가 다르다): 0.221ms
  2. [_.clone] Shallow clone of an array: const arr = [1, 2, 3]일 때, clone(arr) === arr는 거짓이다. (reference가 다르다): 0.007ms
  3. [_.clone] Shallow clone of a nested object (only top level cloned): const obj3 = { a: 1, b: { c: 2 } }일 경우, clone(obj3) === obj3은 거짓이다 (different references).: 0.005ms
  4. [_.clone] Shallow clone of a nested object (only top level cloned): const obj3 = { a: 1, b: { c: 2 } }일 경우, clone(obj3).b 와 clone(obj3).b은 같다 (shallow clone: same reference for nested objects).: 0.006ms
  5. [_.clone] Empty object is returned for uncloneable values(error objects, functions, DOM nodes, and WeakMaps): const func = function() { return "test"; }일 경우, clone(func)은 빈 객체다.: 0.011ms
  6. [_.clone] Clone of an object with array properties: const obj6 = { a: [1, 2, 3], b: 4 }일 경우, clone(obj6).a은 obj6.a와 같다.: 0.012ms
  7. [_.clone] Clone of a primitive value (no change expected): const num = 10일 경우, clone(num)은 num와 같다.: 0.004ms
  8. [_.clone] Clone a Date object: const date = new Date()일 경우 (same time value), clone(date).getTime()은 date.getTime()와 같다.: 0.005ms
  9. [_.clone] Clone a Date object (different references): const date = new Date()일 경우, clone(date)===date은 거짓이다.: 0.009ms
  10. [_.clone] Clone an object with undefined value (different references): const obj10 = { a: undefined, b: 1 }일 경우, clone(obj10) === obj10은 거짓이다.: 0.008ms
  11. [_.clone]  Clone a Map or Set : const map = new Map([[1, "one"]])일 경우, clone(map).get(1)와 map.get(1)은 같다 (same value).: 0.005ms
  12. [_.clone]  Clone a Map or Set : const map = new Map([[1, "one"]])일 경우, clone(map)와 map은 같다 (shallow clone: references remain the same).: 0.004ms
  13. [clone]  Cloning a WeakMap returns empty object: const wm1 = new WeakMap()일 경우, clone(wm1)은 {}이다.: 0.003ms
  ✓ Lang/clone/_clone.test.ts  (13 tests) 19ms
*/
