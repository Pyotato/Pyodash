type Many<T> = T | readonly T[];
type Args = string | number | null | undefined | boolean | any;

const difference: (argBase: Args[], ...argCompare: Array<Many<Args | Args[]>>) => Array<Many<Args | Args[]>> = (
  argBase,
  ...argsCompare
) => {
  const base = new Set([...argBase]);
  const compare = new Set([...argsCompare.flat(1)]);
  const res: Args[] = [];
  base.forEach(item => !compare.has(item) && res.push(item));
  return res;
};
export default difference;
