# endsWith

## About

> [lodash max](https://lodash.com/docs/4.17.15#endsWith) > <br/>
> Checks if string ends with the given target string.<br/>

## Test

1. EndsWith for Regular String

   Input: \_.endsWith('Hello World', 'World')<br/> Output: true

2. EndsWith for String with Case Sensitivity

   Input: \_.endsWith('Hello World', 'world')<br/> Output: false

3. EndsWith for String with Special Characters

   Input: \_.endsWith('foo-bar!', '!')<br/> Output: true

4. EndsWith for String without Matching Ending

   Input: \_.endsWith('abcdef', 'ghi')<br/> Output: false

5. EndsWith with Length Parameter

   Input: \_.endsWith('abcdef', 'cd', 4)<br/> Output: true

6. EndsWith for Single Character Match

   Input: \_.endsWith('a', 'a')<br/> Output: true

7. EndsWith for Empty String

   Input: \_.endsWith('', '')<br/> Output: true

8. EndsWith with Non-Matching Character at the End

   Input: \_.endsWith('foo', 'bar')<br/> Output: false

9. EndsWith for Matching Entire String

   Input: \_.endsWith('abc', 'abc')<br/> Output: true

10. EndsWith for String with Numbers

    Input: \_.endsWith('12345', '45')<br/> Output: true

11. EndsWith for String with Leading and Trailing Whitespace

    Input: \_.endsWith(' hello world ', 'world ')<br/> Output: true

12. EndsWith for Substring that Appears Earlier in String

    Input: \_.endsWith('foobar', 'foo')<br/> Output: false

13. EndsWith for Null or Undefined Input

    Input: \_.endsWith(null, 'test')<br/> Output: false
