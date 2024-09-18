const castArray: (arg?: any) => Array<any> = (...arg) => {
  if (arg?.length === 0) {
    return [];
  }
  return Array.isArray(...arg) ? arg.flat() : [...arg];
};

export default castArray;
