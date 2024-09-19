import { differenceWith, isEqual } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog(
  '1. _.differenceWith: Basic Comparison of Objects',
  expect(differenceWith([{ x: 1 }, { x: 2 }, { x: 3 }], [{ x: 1 }], isEqual)).toEqual([{ x: 2 }, { x: 3 }])
);

testWithTimeLog(
  '2. _.differenceWith: Comparison of Arrays of Numbers with Custom Comparator',
  expect(differenceWith([1, 2, 3], [2, 3, 4], (a, b) => a === b)).toEqual([1])
);

testWithTimeLog(
  '3. _.differenceWith: Comparison with Empty Array',
  expect(differenceWith([1, 2, 3], [], (a, b) => a === b)).toEqual([1, 2, 3])
);

testWithTimeLog(
  '4. _.differenceWith: Objects with Custom Comparator',
  expect(differenceWith([{ y: 5 }, { y: 6 }], [{ y: 5 }], (a, b) => a.y === b.y)).toEqual([{ y: 6 }])
);

testWithTimeLog(
  '5. _.differenceWith: Comparison of Nested Objects',
  expect(differenceWith([{ a: { b: 1 } }, { a: { b: 2 } }], [{ a: { b: 1 } }], (a, b) => isEqual(a.a, b.a))).toEqual([
    { a: { b: 2 } },
  ])
);

testWithTimeLog(
  '6. _.differenceWith: Case with Identical Arrays',
  expect(differenceWith([{ x: 10 }], [{ x: 10 }], isEqual)).toEqual([])
);

testWithTimeLog(
  '7. _.differenceWith: Case with Identical Arrays',
  expect(differenceWith([{ a: [1, 2] }, { a: [3, 4] }], [{ a: [1, 2] }], (a, b) => isEqual(a.a, b.a))).toEqual([
    { a: [3, 4] },
  ])
);

testWithTimeLog(
  '8. _.differenceWith: No Elements to Exclude',
  expect(differenceWith([{ id: 1 }, { id: 2 }], [{ id: 3 }], (a, b) => a.id === b.id)).toEqual([{ id: 1 }, { id: 2 }])
);

/**
  1. _.differenceBy: Basic Example with Numbers Using Math.floor: 0.657ms

 */
