type Many<T> = T | readonly T[];
type Args = string | number | null | undefined | boolean | any;

const differenceBy: (argBase: Args[], ...argCompare: Array<Many<Args | Args[]>>) => Array<Many<Args | Args[]>> = (
  argBase,
  ...argsCompare
) => {
  const base = [...argBase];
  const iteratee = argsCompare.pop();
  const res: Args[] = [];

  const iterateCompare = new Set(
    argsCompare.flat().map(item => (typeof iteratee === 'string' ? item[iteratee] : iteratee(item)))
  );

  base.forEach(
    item => !iterateCompare.has(typeof iteratee === 'string' ? item[iteratee] : iteratee(item)) && res.push(item)
  );

  return res;
};
export default differenceBy;
