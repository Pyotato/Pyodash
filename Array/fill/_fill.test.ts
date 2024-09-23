import { fill } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog(
  `1. [_.fill] Basic : fill([1, 2, 3, 4], '*')은 ['*', '*', '*', '*']이다.`,
  expect(fill([1, 2, 3, 4], '*')).toEqual(['*', '*', '*', '*'])
);

testWithTimeLog(
  `2. [_.fill] Filling with Start and End Parameters : fill([1, 2, 3, 4, 5], 'a', 1, 4)은 [1, 'a', 'a', 'a', 5]이다.`,
  expect(fill([1, 2, 3, 4, 5], 'a', 1, 4)).toEqual([1, 'a', 'a', 'a', 5])
);
testWithTimeLog(
  `3. [_.fill] Filling Without End Parameter : fill([1, 2, 3, 4, 5], 'b', 2)은 [1, 2, 'b', 'b', 'b']이다.`,
  expect(fill([1, 2, 3, 4, 5], 'b', 2)).toEqual([1, 2, 'b', 'b', 'b'])
);

testWithTimeLog(
  `4. [_.fill] Negative Start Index : fill([1, 2, 3, 4, 5], 'x', -2)은 [1, 2, 3, 'x', 'x']이다.`,
  expect(fill([1, 2, 3, 4, 5], 'x', -2)).toEqual([1, 2, 3, 'x', 'x'])
);

testWithTimeLog(
  `5. [_.fill]  Start and End are Same : fill([1, 2, 3, 4, 5], 'y', 2, 2)은 [1, 2, 3, 4, 5]이다.`,
  expect(fill([1, 2, 3, 4, 5], 'y', 2, 2)).toEqual([1, 2, 3, 4, 5])
);

testWithTimeLog(
  `6. [_.fill] Empty Array: fill([1, 2, 3, 4, 5], 'q', 1, 3)은 [1, 'q', 'q', 4, 5]이다.`,
  expect(fill([1, 2, 3, 4, 5], 'q', 1, 3)).toEqual([1, 'q', 'q', 4, 5])
);

testWithTimeLog(
  `7. [_.fill] Out of Bounds End Index: fill([1, 2, 3], 'x', 0, 10)은 ['x', 'x', 'x']이다.`,
  expect(fill([1, 2, 3], 'x', 0, 10)).toEqual(['x', 'x', 'x'])
);

testWithTimeLog(
  `8. [_.fill] Large Negative Start Index: fill([1, 2, 3], 'x', -10)은 ['x', 'x', 'x']이다.`,
  expect(fill([1, 2, 3], 'x', -10)).toEqual(['x', 'x', 'x'])
);

/**
  1. [_.fill] Basic : fill([1, 2, 3, 4], '*')은 ['*', '*', '*', '*']이다.: 0.036ms
  2. [_.fill] Filling with Start and End Parameters : fill([1, 2, 3, 4, 5], 'a', 1, 4)은 [1, 'a', 'a', 'a', 5]이다.: 0.002ms
  3. [_.fill] Filling Without End Parameter : fill([1, 2, 3, 4, 5], 'b', 2)은 [1, 2, 'b', 'b', 'b']이다.: 0.001ms
  4. [_.fill] Negative Start Index : fill([1, 2, 3, 4, 5], 'x', -2)은 [1, 2, 3, 'x', 'x']이다.: 0.001ms
  5. [_.fill]  Start and End are Same : fill([1, 2, 3, 4, 5], 'y', 2, 2)은 [1, 2, 3, 4, 5]이다.: 0.002ms
  6. [_.fill] Empty Array: fill([1, 2, 3, 4, 5], 'q', 1, 3)은 [1, 'q', 'q', 4, 5]이다.: 0.003ms
  7. [_.fill] Out of Bounds End Index: fill([1, 2, 3], 'x', 0, 10)은 ['x', 'x', 'x']이다.: 0.001ms
  8. [_.fill] Large Negative Start Index: fill([1, 2, 3], 'x', -10)은 ['x', 'x', 'x']이다.: 0.001ms
 */
