const floor: (num: number, precision?: number) => number = (num, precision = 0) => {
  let p = precision >= 20 ? 20 : precision;
  let temp = 10 ** p;
  let rounded = Math.floor(num * temp) * 10 ** (-1 * p);
  return p >= 0 ? Number(rounded.toFixed(p)) : rounded;
};

export default floor;
