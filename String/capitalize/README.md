# capitalize

## About

> [lodash max](https://lodash.com/docs/4.17.15#capitalize) > <br/>
> Converts the first character of string to upper case and the remaining to lower case.<br/>

## Test

1. Capitalize a Regular Word

   Input: \_.capitalize('hello')<br/> Output: Hello

2. Capitalize a Single Uppercase Letter

   Input: \_.capitalize('H')<br/> Output: H

3. Capitalize a Single Lowercase Letter

   Input: \_.capitalize('h')<br/> Output: H

4. Capitalize a Word with All Uppercase Letters

   Input: \_.capitalize('HELLO')<br/> Output: Hello

5. Capitalize a Word with Mixed Case Letters

   Input: \_.capitalize('hElLo')<br/> Output: Hello

6. Capitalize a Word with Numbers

   Input: \_.capitalize('hello123')<br/> Output: Hello123

7. Capitalize a Word with Special Characters

   Input: \_.capitalize('hello!')<br/> Output: Hello!

8. Capitalize a Sentence with Multiple Words

   Input: \_.capitalize('hello world')<br/> Output: Hello world

9. Capitalize an Empty String (Edge Cases)

   Input: \_.capitalize('')<br/> Output: '' (Empty string remains empty)

10. Capitalize a String with Only Special Characters (Edge Cases)

    Input: \_.capitalize('!@#')<br/> Output: !@# (Special characters remain unchanged)

11. Capitalize a Word with Leading Whitespace (Edge Cases)

    Input: \_.capitalize(' hello')<br/> Output: hello (Whitespace is retained)

12. Capitalize a Word with Trailing Whitespace (Edge Cases)

    Input: \_.capitalize('hello ')<br/> Output: Hello (Capitalization is applied, but whitespace is retained)

13. Capitalize a Word with Accented Letters (Edge Cases)

    Input: \_.capitalize('élève')<br/> Output: Élève (Accented letter is capitalized correctly)
