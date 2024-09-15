import { Args } from '../concat/concat';

const drop: (arr: Args[], n?: number) => Array<Args> = (arr, n = 1) => {
  const copy = [...arr];
  copy.splice(0, n);
  return copy;
};
export default drop;
