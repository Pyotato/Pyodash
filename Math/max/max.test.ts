import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import max from './max';
testWithTimeLog(
  '1. [max] Max of Array with Repeated Numbers : max([3, 3, 3, 3])는 3다.',
  expect(max([3, 3, 3, 3])).toBe(3)
);
testWithTimeLog(
  '2. [max] Max of Array with null and undefined Values : max([])는 undefined다.',
  expect(max([10, null, undefined, 5, 7])).toBe(10)
);
testWithTimeLog(
  '3. [max] Max of Array with Non-Numeric Values (non-numeric values are ignored) : max([10, "string", true, 5])는 10다.',
  expect(max([10, 'string', true, 5])).toBe(10)
);

testWithTimeLog(
  '4. [max] Max of Array with Only null or undefined Values : max([null, undefined])는 undefined다.',
  expect(max([null, undefined])).toBe(undefined)
);
testWithTimeLog(
  '5. [max] Max of Array with Negative Zero and Positive Zero (Both are treated the same) : max([0, -0])는 0이다.',
  expect(max([0, -0])).toBe(0)
);
testWithTimeLog(
  '6. [max] Max of Array with Infinity Values : max([10, Infinity, -Infinity, 5])는 Infinity이다.',
  expect(max([10, Infinity, -Infinity, 5])).toBe(Infinity)
);

testWithTimeLog(
  '7. [max] Max of Array with NaN Values : max([10, NaN, 5])는 undefined이다. (NaN is ignored)',
  expect(max([10, NaN, 5])).toBe(10)
);

testWithTimeLog(
  '8. [max] Max of Array with Only NaN Values : max([NaN, NaN])는 undefined이다.',
  expect(max([NaN, NaN])).toBe(undefined)
);
/**
1. [max] Max of Array with Repeated Numbers : max([3, 3, 3, 3])는 3다.: 0.042ms
2. [max] Max of Array with null and undefined Values : max([])는 undefined다.: 0.002ms
3. [max] Max of Array with Non-Numeric Values (non-numeric values are ignored) : max([10, "string", true, 5])는 10다.: 0.001ms
4. [max] Max of Array with Only null or undefined Values : max([null, undefined])는 undefined다.: 0.001ms
5. [max] Max of Array with Negative Zero and Positive Zero (Both are treated the same) : max([0, -0])는 0이다.: 0.002ms
6. [max] Max of Array with Infinity Values : max([10, Infinity, -Infinity, 5])는 Infinity이다.: 0.003ms
7. [max] Max of Array with NaN Values : max([10, NaN, 5])는 undefined이다. (NaN is ignored): 0.001ms
8. [max] Max of Array with Only NaN Values : max([NaN, NaN])는 undefined이다.: 0.001ms
 */
