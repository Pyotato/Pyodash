import { Args } from '../concat/concat';

const fill: (arr: Args[], value: any, start?: number, end?: number) => Args[] = (
  arr,
  value,
  start = 0,
  end = arr.length
) => {
  return arr.fill(value, start, end);
};
export default fill;
