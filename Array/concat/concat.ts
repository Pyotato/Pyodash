export type Many<T> = T | readonly T[];
export type Args = string | number | null | undefined | boolean;

const concat: (...args: Array<Many<Args | Args[]>>) => Array<any> = (...args) => {
  const copy = [...args];
  return [...copy].flat(1);
};
export default concat;
