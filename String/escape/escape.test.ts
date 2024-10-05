import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';
import escape from './escape';

testWithTimeLog(
  `1. [escape] Escape an HTML tag : escape('<div>hello</div>')는 "&lt;div&gt;hello&lt;/div&gt;"다.`,
  expect(escape('<div>hello</div>')).toBe('&lt;div&gt;hello&lt;/div&gt;')
);

testWithTimeLog(
  `2. [escape] Escape special characters : escape('5 > 3 & 4 < 6')는 "5 &gt; 3 &amp; 4 &lt; 6"다.`,
  expect(escape(`5 > 3 & 4 < 6`)).toBe(`5 &gt; 3 &amp; 4 &lt; 6`)
);

testWithTimeLog(
  `3. [escape] Escape double quotes : escape('"Hello"')는 "&quot;Hello&quot;"다.`,
  expect(escape('"Hello"')).toBe(`&quot;Hello&quot;`)
);
testWithTimeLog(
  `4. [escape] Escape single quote : escape("'hello'")는 "&#39;hello&#39;"다.`,
  expect(escape("'hello'")).toBe(`&#39;hello&#39;`)
);
testWithTimeLog(
  `5. [escape] Edge Case: No characters to escape : escape("'hello'")는 "&#39;hello&#39;"다.`,
  expect(escape("'hello'")).toBe(`&#39;hello&#39;`)
);

testWithTimeLog(
  `6. [escape] Edge Case, Only symbols that don't require escaping : escape('')는 ""다.`,
  expect(escape(`#@!$`)).toBe(`#@!$`)
);
testWithTimeLog(`7. [escape] Edge Case: Empty string : escape('')는 ''다.`, expect(escape(``)).toBe(``));
testWithTimeLog(
  `8. [escape] Edge Case: String with only space : escape('   ')는 "   "다.`,
  expect(escape('   ')).toBe(`   `)
);

/**
  1. [escape] Escape an HTML tag : escape('<div>hello</div>')는 "&lt;div&gt;hello&lt;/div&gt;"다.: 0.041ms
  2. [escape] Escape special characters : escape('5 > 3 & 4 < 6')는 "5 &gt; 3 &amp; 4 &lt; 6"다.: 0.002ms
  3. [escape] Escape double quotes : escape('"Hello"')는 "&quot;Hello&quot;"다.: 0.001ms
  4. [escape] Escape single quote : escape("'hello'")는 "&#39;hello&#39;"다.: 0.001ms
  5. [escape] Edge Case: No characters to escape : escape("'hello'")는 "&#39;hello&#39;"다.: 0.004ms
  6. [escape] Edge Case, Only symbols that don't require escaping : escape('')는 ""다.: 0.002ms
  7. [escape] Edge Case: Empty string : escape('')는 ''다.: 0.001ms
  8. [escape] Edge Case: String with only space : escape('   ')는 "   "다.: 0.001ms
 */
