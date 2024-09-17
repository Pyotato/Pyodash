const castArray: (arg?: any) => Array<any> = arg => {
  if (Array.isArray(arg)) {
    return arg;
  } else {
    return [arg];
  }
};
export default castArray;
