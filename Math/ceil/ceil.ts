const ceil: (arg: number, precision?: number) => number = (arg, precision = 0) => {
  const temp = 10 ** precision;
  const rev = 10 ** -precision;
  const ceiled = Number(Math.ceil(arg * temp)) * rev;
  return precision > 0 ? Number(ceiled.toFixed(precision)) : ceiled;
};

export default ceil;
