# Concat

## About

> [lodash concat](https://lodash.com/docs/4.17.15#concat) <br/>
> Creates a new array concatenating array with any additional arrays and/or values.

## Test

1. concatenating Arrays:

   Input: concat([1], [2], [3, 4])
   Output: [1, 2, 3, 4]

2. concatenating Values to an Array

   Input: concat([1, 2], 3, 4)
   Output: [1, 2, 3, 4]

3. concatenating with an Empty Array

   Input: concat([], 1, 2, [3, 4])
   Output: [1, 2, 3, 4]

4. concatenating Arrays with Different Types

   Input: concat([1, 'a'], null, undefined, [5])
   Output: [1, 'a', null, undefined, 5]

5. concatenating Nested Arrays (lodash.concat doesn't flatten arrays)

   Input: concat([1, [2]], [3, [4]])
   Output: [1, [2], 3, [4]]

6. concatenating an Array with No Additional Values

   Input: concat([1, 2, 3])
   Output:[1, 2, 3]

7. concatenating Multiple Values of the Same Type

   Input: concat([10], 20, 30, 40)
   Output: [10, 20, 30, 40]
