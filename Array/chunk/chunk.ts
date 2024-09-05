const chunk: (array: unknown[], size: number) => unknown[][] = (array, size = 1) => {
  if (array == null || array?.length == null || array?.length == 0 || size <= 0) {
    return [];
  }
  return array.length <= size ? [[...array]] : [array.slice(0, size), ...chunk(array.slice(size), size)];
};
export default chunk;
