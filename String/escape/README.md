# escape

## About

> [lodash escape](https://lodash.com/docs/4.17.15#escape) > <br/>
> Converts the characters "&", "<", ">", '"', and "'" in string to their corresponding HTML entities. <br/>

Note: No other characters are escaped. To escape additional characters use a third-party library like he. <br/>

Though the ">" character is escaped for symmetry, characters like ">" and "/" don't need escaping in HTML and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens's article (under "semi-related fun fact") for more details. <br/>

When working with HTML you should always quote attribute values to reduce XSS vectors. <br/>

## Test

1. Escape an HTML tag

   Input: `_.escape('<div>hello</div>')`  
   Output: `&lt;div&gt;hello&lt;/div&gt;`

2. Escape special characters

   Input: `_.escape('5 > 3 & 4 < 6')`  
   Output: `5 &gt; 3 &amp; 4 &lt; 6`

3. Escape double quotes

   Input: `_.escape('"Hello"')`  
   Output: `&quot;Hello&quot;`

4. Escape single quote

   Input: `_.escape("'hello'")`  
   Output: `&#39;hello&#39;`

5. Edge Case: No characters to escape

   Input: `_.escape('Hello')`  
   Output: `Hello`

6. Edge Case: Only symbols that don't require escaping

   Input: `_.escape('#@!$')`  
   Output: `#@!$`

7. Edge Case: Empty string

   Input: `_.escape('')`  
   Output: `''`

8. Edge Case: String with only space

   Input: `_.escape('   ')`  
   Output: `'   '`
