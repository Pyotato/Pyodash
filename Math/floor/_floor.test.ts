import { floor } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog('1. [_.floor] Floor of a Positive Number : floor(4.006)는 4다.', expect(floor(4.006)).toBe(4));
testWithTimeLog('2. [_.floor] Floor of a Negative Number : floor(-4.567)는 -5다.', expect(floor(-4.567)).toBe(-5));
testWithTimeLog(
  '3. [_.floor] Floor of a Positive Number with Precision 2 : floor(4.567, 2)는 4.56다.',
  expect(floor(4.567, 2)).toBe(4.56)
);
testWithTimeLog(
  '4. [_.floor] Floor of a Negative Number with Precision 2: floor(-4.567, 2)는 -4.57다.',
  expect(floor(-4.567, 2)).toBe(-4.57)
);
testWithTimeLog(
  '5. [_.floor] Floor of a Positive Number with Precision -1 : floor(4267, -1)는 4260다.',
  expect(floor(4267, -1)).toBe(4260)
);
testWithTimeLog(
  '6. [_.floor] Floor of a Negative Number with Precision -1 : floor(-4267, -1)는 -4270다.',
  expect(floor(-4267, -1)).toBe(-4270)
);
testWithTimeLog(
  '7. [_.floor] Floor of a Positive Number with Precision over 20 : floor(4.2671234511234511233211122546, 25)는 4.26712345112345112332다.',
  expect(floor(4.2671234511234511233211122546, 25)).toBe(4.26712345112345112332)
);

/**
1. [_.floor] Floor of a Positive Number : floor(4.006)는 4다.: 0.04ms
2. [_.floor] Floor of a Negative Number : floor(-4.567)는 -5다.: 0.002ms
3. [_.floor] Floor of a Positive Number with Precision 2 : floor(4.567, 2)는 4.56다.: 0.001ms
4. [_.floor] Floor of a Negative Number with Precision 2: floor(-4.567, 2)는 -4.57다.: 0.001ms
5. [_.floor] Floor of a Positive Number with Precision -1 : floor(4267, -1)는 4260다.: 0.002ms
6. [_.floor] Floor of a Negative Number with Precision -1 : floor(-4267, -1)는 -4270다.: 0.003ms
7. [_.floor] Floor of a Positive Number with Precision over 20 : floor(4.2671234511234511233211122546, 25)는 4.26712345112345112332다.: 0.001ms
 */
