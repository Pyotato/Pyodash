import { Assertion } from 'vitest';
const timeLogTest = (message: string, fn: Assertion<any[]> | void) => {
  console.time(message);
  fn;
  console.timeLog(message);
};
export default timeLogTest;
