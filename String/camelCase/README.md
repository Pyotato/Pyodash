# camelCase

## About

> [lodash max](https://lodash.com/docs/4.17.15#camelCase) > <br/>
> Converts string to camel case.<br/>
> lodash의 hELLo wORLd같이 case가 뒤섞인 경우 camelCase로 올바르게 변환하지 못한 점을 개선했습니다.

## Test

1. CamelCase for Regular Sentence

   Input: \_.camelCase('Hello World')<br/> Output: helloWorld

2. CamelCase for Hyphenated Words

   Input: \_.camelCase('foo-bar-baz')<br/> Output: fooBarBaz

3. CamelCase for Underscored Words

   Input: \_.camelCase('foo_bar_baz')<br/> Output: fooBarBaz

4. CamelCase for Mixed Delimiters

   Input: \_.camelCase('Foo-Bar_baz')<br/> Output: fooBarBaz

5. CamelCase for Single Word

   Input: \_.camelCase('Hello')<br/> Output: hello

6. CamelCase for Uppercase String

   Input: \_.camelCase('HELLO WORLD')<br/> Output: helloWorld

7. CamelCase for Mixed Case Words (lodash에서는 fail..)

   Input: \_.camelCase('hELLo wORLd')<br/> Output: helloWorld

8. CamelCase for String with Numbers (Edge cases)

   Input: \_.camelCase('hello 123 world')<br/> Output: hello123World

9. CamelCase for Empty String (Edge cases)

   Input: \_.camelCase('')<br/> Output: '' (empty string)

10. CamelCase for String with Special Characters (Edge cases)

    Input: \_.camelCase('hello$world')<br/> Output: helloWorld

11. CamelCase for String with Multiple Spaces (Edge cases)

    Input: \_.camelCase(' hello world ')<br/> Output: helloWorld

12. CamelCase for String with Leading or Trailing Delimiters (Edge cases)

    Input: \_.camelCase('--foo-bar--')<br/> Output: fooBar

13. CamelCase for Special Characters only (Edge cases)

    Input: \_.camelCase("@#$!!")<br/> Output: "" (Empty string)
