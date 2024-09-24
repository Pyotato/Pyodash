# toString

## About

> [lodash toString](https://lodash.com/docs/4.17.15#toString) > <br/>
> Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved. <br/>

## Test

1. Same numbers (positive)

   Input: \_.toString(1)<br/> Output: "1"

2. Negative number

   Input: \_.toString(-1)<br/> Output: "-1"

3. Zero

   Input: \_.toString(0)<br/> Output: "0"

4. Negative zero

   Input: \_.toString(-0)<br/> Output: "-0"

5. Null

   Input: \_.toString(null)<br/> Output: ""

6. Undefined

   Input: \_.toString(undefined)<br/> Output: ""

7. String Input

   Input: \_.toString("hello")<br/> Output: "hello"

8. Boolean true

   Input: \_.toString(true)<br/> Output: "true"

9. Boolean false

   Input: \_.toString(false)<br/> Output: "false"

10. Array with numbers

    Input: \_.toString([1, 2, 3])<br/> Output: "1,2,3"

11. Array with mixed types

    Input: \_.toString([1, "two", true])<br/> Output: "1,two,true"

12. Empty array

    Input: \_.toString([])<br/> Output: ""

13. Object

    Input: \_.toString({ a: 1 })<br/> Output: "[object Object]"

14. Infinity

    Input: \_.toString(Infinity)<br/> Output: "Infinity"

15. NaN

    Input: \_.toString(NaN)<br/> Output: "NaN"
