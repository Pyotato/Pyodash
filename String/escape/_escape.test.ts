import { escape } from 'lodash';
import { expect } from 'vitest';
import testWithTimeLog from '../../utils/testWithTimeLog';

testWithTimeLog(
  `1. [_.escape] Escape an HTML tag : _.escape('<div>hello</div>')는 "&lt;div&gt;hello&lt;/div&gt;"다.`,
  expect(escape('<div>hello</div>')).toBe('&lt;div&gt;hello&lt;/div&gt;')
);

testWithTimeLog(
  `2. [_.escape] Escape special characters : _.escape('5 > 3 & 4 < 6')는 "5 &gt; 3 &amp; 4 &lt; 6"다.`,
  expect(escape(`5 > 3 & 4 < 6`)).toBe(`5 &gt; 3 &amp; 4 &lt; 6`)
);

testWithTimeLog(
  `3. [_.escape] Escape double quotes : _.escape('"Hello"')는 "&quot;Hello&quot;"다.`,
  expect(escape('"Hello"')).toBe(`&quot;Hello&quot;`)
);
testWithTimeLog(
  `4. [_.escape] Escape single quote : _.escape("'hello'")는 "&#39;hello&#39;"다.`,
  expect(escape("'hello'")).toBe(`&#39;hello&#39;`)
);
testWithTimeLog(
  `5. [_.escape] Edge Case: No characters to escape : _.escape("'hello'")는 "&#39;hello&#39;"다.`,
  expect(escape("'hello'")).toBe(`&#39;hello&#39;`)
);

testWithTimeLog(
  `6. [_.escape] Edge Case, Only symbols that don't require escaping : _.escape('')는 ""다.`,
  expect(escape(`#@!$`)).toBe(`#@!$`)
);
testWithTimeLog(`7. [_.escape] Edge Case: Empty string : _.escape('')는 ''다.`, expect(escape(``)).toBe(``));
testWithTimeLog(
  `8. [_.escape] Edge Case: String with only space : _.escape('   ')는 "   "다.`,
  expect(escape('   ')).toBe(`   `)
);

/**
1. [_.escape] Escape an HTML tag : _.escape('<div>hello</div>')는 "&lt;div&gt;hello&lt;/div&gt;"다.: 0.041ms
2. [_.escape] Escape special characters : _.escape('5 > 3 & 4 < 6')는 "5 &gt; 3 &amp; 4 &lt; 6"다.: 0.002ms
3. [_.escape] Escape double quotes : _.escape('"Hello"')는 "&quot;Hello&quot;"다.: 0.002ms
4. [_.escape] Escape single quote : _.escape("'hello'")는 "&#39;hello&#39;"다.: 0.001ms
5. [_.escape] Edge Case: No characters to escape : _.escape("'hello'")는 "&#39;hello&#39;"다.: 0.003ms
6. [_.escape] Edge Case, Only symbols that don't require escaping : _.escape('')는 ""다.: 0.003ms
7. [_.escape] Edge Case: Empty string : _.escape('')는 ''다.: 0.001ms
8. [_.escape] Edge Case: String with only space : _.escape('   ')는 "   "다.: 0.001ms
 */
