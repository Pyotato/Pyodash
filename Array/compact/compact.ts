const compact: (array: Array<any>) => Array<any> = array => {
  return array.filter(item => !(item == null || (item?.length != null && item?.length === 0) || !item));
};
export default compact;
