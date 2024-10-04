import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import trim from './trim';

testWithTimeLog(
  `1. [trim] Trim spaces from both sides of a string : trim('   hello   ')는 'hello'다.`,
  expect(trim('   hello   ')).toBe('hello')
);

testWithTimeLog(
  `2. [trim] Trim specified characters from both sides : trim('--world--', '-')는 'world'다.`,
  expect(trim('--world--', '-')).toBe('world')
);

testWithTimeLog(
  `3. [trim] Trim custom characters with spaces : trim('*** hello ***', '* ')는 'hello'다.`,
  expect(trim('*** hello ***', '* ')).toBe('hello')
);

testWithTimeLog(
  `4. [trim] Edge Case: No spaces or characters to trim : trim('noTrimNeeded')는 'noTrimNeeded'다.`,
  expect(trim('noTrimNeeded')).toBe('noTrimNeeded')
);

testWithTimeLog(
  `5. [trim] Edge Case: Only spaces in the string: No spaces or characters to trim : trim('     ')는 ''다.`,
  expect(trim('     ')).toBe('')
);

testWithTimeLog(`6. [trim] Edge Case: Empty string: trim('')는 ''다.`, expect(trim('')).toBe(''));

testWithTimeLog(
  `7. [trim] Edge Case: String with spaces only on the right: trim('rightTrim   ')는 'rightTrim'다.`,
  expect(trim('rightTrim   ')).toBe('rightTrim')
);

testWithTimeLog(
  `8. [trim] Edge Case: String with spaces only on the left: trim('   leftTrim')는 'leftTrim'다.`,
  expect(trim('   leftTrim')).toBe('leftTrim')
);

testWithTimeLog(
  `9. [trim] Edge Case: Trim characters not present in the string: trim('hello', '*')는 'hello'다.`,
  expect(trim('hello', '*')).toBe('hello')
);
/**
1. [trim] Trim spaces from both sides of a string : trim('   hello   ')는 'hello'다.: 0.041ms
2. [trim] Trim specified characters from both sides : trim('--world--', '-')는 'world'다.: 0.002ms
3. [trim] Trim custom characters with spaces : trim('*** hello ***', '* ')는 'hello'다.: 0.001ms
4. [trim] Edge Case: No spaces or characters to trim : trim('noTrimNeeded')는 'noTrimNeeded'다.: 0.001ms
5. [trim] Edge Case: Only spaces in the string: No spaces or characters to trim : trim('     ')는 ''다.: 0.003ms
6. [trim] Edge Case: Empty string: trim('')는 ''다.: 0.003ms
7. [trim] Edge Case: String with spaces only on the right: trim('rightTrim   ')는 'rightTrim'다.: 0.001ms
8. [trim] Edge Case: String with spaces only on the left: trim('   leftTrim')는 'leftTrim'다.: 0.001ms
9. [trim] Edge Case: Trim characters not present in the string: trim('hello', '*')는 'hello'다.: 0.002ms
 */
