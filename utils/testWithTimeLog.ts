import { Assertion, test } from 'vitest';
import timeLogTest from './timeLogTest';

const testWithTimeLog = (testDescription: string, fn: Assertion<any[]> | void) =>
  test(testDescription, () => {
    timeLogTest(testDescription, fn);
  });
export default testWithTimeLog;
