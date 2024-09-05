# Chunk

## About

> [lodash chunk](https://lodash.com/docs/4.17.15#chunk)
> Creates an array of elements split into groups the length of size. <br/>
> If array can't be split evenly, the final chunk will be the remaining elements.

## Test

1. Basic Case

   Input: chunk([1, 2, 3, 4], 2)
   Output: [[1, 2], [3, 4]]

2. Odd Number of Elements

   Input: chunk([1, 2, 3, 4, 5], 2)
   Output: [[1, 2], [3, 4], [5]]

3. Single Element Array

   Input: chunk([1], 1)
   Output: [[1]]

4. Chunk Size Larger Than Array

   Input: chunk([1, 2], 5)
   Output: [[1, 2]]

5. Chunk Size of 1

   Input: chunk([1, 2, 3, 4], 1)
   Output: [[1], [2], [3], [4]]

6. Non-Integer Chunk Size

   Input: chunk([1, 2, 3, 4], 1.5)
   Output: [[1], [2], [3], [4]] (since chunk size might be floored)
