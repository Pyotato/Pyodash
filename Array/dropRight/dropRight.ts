import { Args, Many } from '../concat/concat';

const dropRight: (arr: Array<Many<Args | Args[]>>, n?: number) => Array<Many<Args | Args[]>> = (arr, n = 1) => {
  const copy = [...arr];
  if (copy.length < n) {
    return [];
  }
  copy.splice(copy.length - n, n);
  return copy;
};
export default dropRight;
