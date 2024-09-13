import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import add from './add';

testWithTimeLog('1.add: Basic Case', expect(add(2, 3) === 5));
testWithTimeLog('2.add: Addition of Two Negative Numbers', expect(add(-2, -3) === -5));
testWithTimeLog('3.add: Addition of a Positive and a Negative Number', expect(add(10, -5) === 5));
testWithTimeLog('4.add: Addition with Zero', expect(add(10, -5) === 5));
testWithTimeLog('5.add: Addition of Decimal Numbers', expect(add(1.5, 2.3) === 3.8));
testWithTimeLog('6.add: Addition Involving Infinity', expect(add(Infinity, 5) === Infinity));
testWithTimeLog('7.add: Addition of Infinity and -Infinity', expect(Number.isNaN(add(Infinity, -Infinity))));
testWithTimeLog('8.add: Addition with NaN', expect(Number.isNaN(expect(add(NaN, 5)))));
testWithTimeLog(
  '9.add: Addition of a Large Number and a Small Number',
  expect(add(1000000, 0.0001) === 1_000_000.0001)
);
testWithTimeLog('10.add: Addition of Very Large Numbers', expect(add(1e21, 1e21) === 2e21));
testWithTimeLog('11.add: Addition of 0.1+0.2', expect(add(0.1, 0.2) === 0.3));

/**
  1.add: Basic Case: 0.037ms
  2.add: Addition of Two Negative Numbers: 0.002ms
  3.add: Addition of a Positive and a Negative Number: 0.001ms
  4.add: Addition with Zero: 0.001ms
  5.add: Addition of Decimal Numbers: 0.002ms
  6.add: Addition Involving Infinity: 0.003ms
  6.add: Addition Involving Infinity 2: 0.001ms
  6.add: Addition with NaN: 0.001ms
  6.add: Addition of a Large Number and a Small Number: 0.002ms
  6.add: Addition of Very Large Numbers: 0.002ms
  6.add: Addition of 0.1+0.2: 0.001ms
*/
