# Chunk

## About

> [lodash chunk](https://lodash.com/docs/4.17.15#chunk)
> Creates an array of elements split into groups the length of size. <br/>
> If array can't be split evenly, the final chunk will be the remaining elements.

## Implementation

> [chunk.ts](https://github.com/Pyotato/Pyodash/blob/main/Array/chunk/chunk.ts)<br/>
> 배열을 쪼개고자하는 크기만큼 재귀적으로 함수를 호출하여 중첩함수로 리턴해줍니다.

```ts
const chunk: (array: unknown[], size: number) => unknown[][] = (array, size = 1) => {
  if (array == null || array?.length == null || array?.length == 0 || size <= 0) {
    return [];
  }
  return array.length <= size ? [[...array]] : [array.slice(0, size), ...chunk(array.slice(size), size)];
};
export default chunk;
```


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
