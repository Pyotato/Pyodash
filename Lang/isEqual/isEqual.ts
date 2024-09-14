const isEqual: (arg1: any, arg2: any) => boolean = (arg1, arg2) => {
  if (Number.isNaN(arg1) && Number.isNaN(arg2)) {
    return true;
  } else if (typeof arg1 === typeof arg2 && typeof arg1 !== 'object') {
    return arg1 === arg2;
  } else {
    return JSON.stringify(arg1) == JSON.stringify(arg2);
  }
};
export default isEqual;
