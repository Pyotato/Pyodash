# Compact

## About

> [lodash compact](https://lodash.com/docs/4.17.15#compact) <br/>
> Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

## Test

1. Basic Test with Falsy Values

   Input: compact([0, 1, false, 2, '', 3])
   Output: [1, 2, 3]

2. No Falsy Values

   Input: compact([1, 2, 3])
   Output: [1, 2, 3]

3. All Falsy Values

   Input: compact([false, null, 0, "", undefined, NaN])
   Output: []

4. Empty Array

   Input: compact([])
   Output: []

5. Array with Nested Arrays (lodash.compact doesn't recursively flatten arrays)

   Input: compact([1, 2, [false, 3], null])
   Output: [1, 2, [false, 3]]

6. Array with Objects and Values

   Input: compact([0, { a: 1 }, false, 3, ""])
   Output: [{ a: 1 }, 3]

7. Array with Different Types

   Input: compact([null, 2, 'string', undefined, true, NaN, 5])
   Output: [2, 'string', true, 5]
