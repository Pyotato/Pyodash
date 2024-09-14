import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import isEqual from './isEqual';

testWithTimeLog(
  '1. [isEqual] Basic Primitive Equality (Same numbers (positive)): isEqual(1, 1)는 true다.',
  expect(isEqual(1, 1)).toBeTruthy()
);
testWithTimeLog(
  '2. [isEqual] Basic Primitive Equality (Different numbers): isEqual(1, 2)는 false다.',
  expect(isEqual(1, 2)).toBeFalsy()
);
testWithTimeLog(
  '3. [isEqual] Basic Primitive Equality (String equality): isEqual("hello", "hello")는 true다.',
  expect(isEqual('hello', 'hello')).toBeTruthy()
);
testWithTimeLog(
  '4. [isEqual] Basic Primitive Equality (String inequality): isEqual("hello", "world")는 false다.',
  expect(isEqual('hello', 'world')).toBeFalsy()
);
testWithTimeLog(
  '5. [isEqual] Basic Primitive Equality (Boolean equality): isEqual(true, true) 는 true다.',
  expect(isEqual(true, true)).toBeTruthy()
);

testWithTimeLog(
  '6. [isEqual] Basic Primitive Equality (Boolean inequality): isEqual(true, false) 는 false다.',
  expect(isEqual(true, false)).toBeFalsy()
);

testWithTimeLog(
  '7. [isEqual] Array Equality (Same arrays (simple numbers)): isEqual([1, 2, 3], [1, 2, 3])는 true다.',
  expect(isEqual([1, 2, 3], [1, 2, 3])).toBeTruthy()
);

testWithTimeLog(
  '8. [isEqual] Array Equality (Different arrays (order matters)): isEqual([1, 2, 3], [3, 2, 1])는 false다.',
  expect(isEqual([1, 2, 3], [3, 2, 1])).toBeFalsy()
);

testWithTimeLog(
  '9. [isEqual] Array Equality (Arrays of different lengths): isEqual([1, 2], [1, 2, 3])는 false다.',
  expect(isEqual([1, 2], [1, 2, 3])).toBeFalsy()
);
testWithTimeLog(
  '10. [isEqual] Array Equality (Arrays with different types of elements): isEqual([1, "2", 3], [1, 2, 3])는 false다.',
  expect(isEqual([1, '2', 3], [1, 2, 3])).toBeFalsy()
);
testWithTimeLog(
  '11. [isEqual] Object Equality (Same objects (simple key-value pairs)): isEqual({a: 1, b: 2}, {a: 1, b: 2})는 true다.',
  expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy()
);
testWithTimeLog(
  '12. [isEqual] Object Equality (Different objects (different values)): isEqual({a: 1, b: 2}, {a: 1, b: 3})는 false다.',
  expect(isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })).toBeFalsy()
);
testWithTimeLog(
  '13. [isEqual] Object Equality (Objects with additional keys): isEqual({a: 1, b: 2}, {a: 1})는 false다.',
  expect(isEqual({ a: 1, b: 2 }, { a: 1 })).toBeFalsy()
);
testWithTimeLog(
  '14. [isEqual] Object Equality (Deeply nested objects): isEqual({a: {b: {c: 1}}}, {a: {b: {c: 1}}})는 true다.',
  expect(isEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } })).toBeTruthy()
);
testWithTimeLog(
  '15. [isEqual] Object Equality (Deeply nested objects (with different structure)): isEqual({a: {b: {c: 1}}}, {a: {b: {c: 1}}})는 false다.',
  expect(isEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } })).toBeFalsy()
);
testWithTimeLog(
  '16. [isEqual] Mixed Types (Object vs array): isEqual({a: 1}, [1])는 false다.',
  expect(isEqual({ a: 1 }, [1])).toBeFalsy()
);
testWithTimeLog(
  '17. [isEqual] Mixed Types (Number vs string): isEqual(1, "1")는 false다.',
  expect(isEqual({ a: 1 }, [1])).toBeFalsy()
);
testWithTimeLog(
  '18. [isEqual] Mixed Types (Array with object inside): isEqual([{ a: 1 }], [{ a: 1 }])는 true다.',
  expect(isEqual([{ a: 1 }], [{ a: 1 }])).toBeTruthy()
);
testWithTimeLog(
  '19. [isEqual] Mixed Types (Null and undefined): isEqual(null, undefined)는 false다.',
  expect(isEqual(null, undefined)).toBeFalsy()
);

const fn = () => {};

testWithTimeLog(
  '20. [isEqual] Mixed Types (Same function references): isEqual(fn, fn)는 true다.',
  expect(isEqual(fn, fn)).toBeTruthy()
);

testWithTimeLog(
  '20-1. [isEqual] Mixed Types (Same function references): isEqual(fn, () => {})는 false다.',
  expect(isEqual(fn, () => {})).toBeFalsy()
);

testWithTimeLog(
  '21. [isEqual] Edge Cases (NaN vs NaN): isEqual(NaN, NaN)는 true다.',
  expect(isEqual(NaN, NaN)).toBeTruthy()
);

testWithTimeLog(
  '22. [isEqual] Edge Cases (Infinity vs Infinity): isEqual(Infinity, Infinity)는 true다.',
  expect(isEqual(Infinity, Infinity)).toBeTruthy()
);

testWithTimeLog(
  '23. [isEqual] Edge Cases (Zero and negative zero): isEqual(0, -0)는 true다.',
  expect(isEqual(0, -0)).toBeTruthy()
);

/**

*/
