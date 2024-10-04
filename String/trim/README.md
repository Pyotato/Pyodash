# trim

## About

> [lodash trim](https://lodash.com/docs/4.17.15#trim) > <br/>
> Removes leading and trailing whitespace or specified characters from string. <br/>

## Test

1. Trim spaces from both sides of a string

   Input: `_.trim('   hello   ')`  
   Output: `'hello'`

2. Trim specified characters from both sides

   Input: `_.trim('--world--', '-')`  
   Output: `'world'`

3. Trim custom characters with spaces

   Input: `_.trim('*** hello ***', '* ')`  
   Output: `'hello'`

4. Edge Case: No spaces or characters to trim

   Input: `_.trim('noTrimNeeded')`  
   Output: `'noTrimNeeded'`

5. Edge Case: Only spaces in the string

   Input: `_.trim('     ')`  
   Output: `''`

6. Edge Case: Empty string

   Input: `_.trim('')`  
   Output: `''`

7. Edge Case: String with spaces only on the right

   Input: `_.trim('rightTrim   ')`  
   Output: `'rightTrim'`

8. Edge Case: String with spaces only on the left

   Input: `_.trim('   leftTrim')`  
   Output: `'leftTrim'`

9. Edge Case: Trim characters not present in the string

   Input: `_.trim('hello', '*')`  
   Output: `'hello'`
