# DifferenceBy

## About

> [lodash differenceBy](https://lodash.com/docs/4.17.15#differenceBy) <br/>
> This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
> (value).. <br/>
> Note: Unlike `_.pullAllBy`, this method returns a new array.

## Test

1. Basic Example with Numbers Using Math.floor

   Input: difference([2.1, 1.2], [2.3, 3.4], Math.floor)
   Output: [1.2]

2. Using a Property Name as the Iteratee (Objects)

   Input: difference([{ x: 1 }, { x: 2 }], [{ x: 1 }], 'x')
   Output: [{ x: 2 }]

3. Using a Custom Iteratee Function

   Input: differenceBy([1, 2, 3, 4], [2, 3], value => value \* 2)
   Output:[1, 4]

4. Empty First Array

   Input: difference([], [1.2, 3.4], Math.floor)
   Output: []

5. Empty Second Array

   Input: difference([1.5, 2.5, 3.5], [], Math.floor)
   Output:[1.5, 2.5, 3.5]

6. Difference with null and undefined Using Identity

   Input: difference([null, 1, 2], [undefined, 1], val => val)
   Output: [null, 2]

7. Custom Iteratee on Complex Objects
   Input: difference([{ a: 1 }, { a: 2 }], [{ a: 2 }, { a: 3 }], o => o.a)
   Output: [{ a: 1 }]

8. Using String as Iteratee for String Representation
   Input: difference([1, '2', 3], [1, 2], String)
   Output: [3]
