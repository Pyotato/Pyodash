import { now as LodashNow } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import now from './now';

testWithTimeLog(
  'Compare _.now() to now() for consistency: _.now()와 now() 간의 시간 차는 5밀리초 미만이다.',
  expect(LodashNow() - now()).toBeLessThan(5)
);

/**
 Compare _.now() to now() for consistency: _.now()와 now() 간의 시간 차는 5밀리초 미만이다.: 0.04ms
 */
