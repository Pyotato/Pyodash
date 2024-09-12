import _ from 'lodash';
import { expect, test } from 'vitest';
import chunk from './chunk';
test('large chunk', () => {
  const expected = Array.from({ length: 50 }, (_, i) => i);
  console.time('custom_chunk');
  const custom_chunk = chunk(expected, 2);
  console.timeLog('custom_chunk');
  console.time('lodash_chunk');
  const lodash_chunk = _.chunk(expected, 2);
  console.timeLog('lodash_chunk');
  expect(custom_chunk).toEqual(lodash_chunk);
});

/**
 * 🤔 custom이 느리네?
 * custom_chunk: 0.473ms
 * lodash_chunk: 0.148ms
 *
 * custom_chunk: 0.147ms
 * lodash_chunk: 0.091ms
 *
 * custom_chunk: 0.136ms
 * lodash_chunk: 0.09ms
 */
