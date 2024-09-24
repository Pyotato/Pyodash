const toString: (value: any) => string = value => {
  if (value == null && typeof value !== 'boolean') {
    return '';
  }
  if (value === 0 && 1 / value === -Infinity) {
    return `-${value}`;
  }
  return `${value}`;
};
export default toString;
