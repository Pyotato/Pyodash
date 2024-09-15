# DifferenceBy

## About

> [lodash drop](https://lodash.com/docs/4.17.15#drop) <br/>
> Creates a slice of array with n elements dropped from the beginning.

## Test

1. Dropping Without Specifying n (Default is 1)

   Input: drop([1, 2, 3]) <br/>
   Output: [2, 3]

2. Dropping When Array is Empty

   Input: drop([],2) <br/>
   Output: []

3. Dropping More Elements than Array Length

   Input: drop([1, 2, 3], 5) <br/>
   Output: []

4. Dropping Zero Elements

   Input: drop([1, 2, 3], 0) <br/>
   Output: [1, 2, 3]

5. Dropping Two Elements

   Input: drop([1, 2, 3, 4], 2) <br/>
   Output: [3, 4]

6. Dropping All Elements

   Input: drop([1, 2, 3], 3) <br/>
   Output: []

7. Dropping from a Mixed-Type Array

   Input: drop([1, 'b', true], 1) <br/>
   Output: ['b', true]

8. Dropping No Elements from a Single-Element

   Input: drop([1], 0) <br/>
   Output: [1]
