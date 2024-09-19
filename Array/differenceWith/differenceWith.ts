type Many<T> = T | readonly T[];
type Args = string | number | null | undefined | boolean | any;

const differenceWith: (argBase: Args[], ...argCompare: Array<Many<Args | Args[]>>) => Array<Many<Args | Args[]>> = (
  argBase,
  ...argsCompare
) => {
  const base = [...argBase];
  const comparator = argsCompare.pop();
  const res: Args[] = [];
  const others = argsCompare.flat();

  if (base.some(item => typeof item === 'object')) {
    base.forEach(item => {
      !comparator(item, ...others) && res.push(item);
    });
  } else {
    const comparatorSet = new Set();
    base.forEach(item => {
      others.forEach(other => comparator(item, other) && comparatorSet.add(item));
    });
    return base.filter(item => !comparatorSet.has(item));
  }

  return res;
};
export default differenceWith;
