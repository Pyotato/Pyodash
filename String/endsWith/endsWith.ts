const endsWith: (str: string, target: string, position?: number) => boolean = (
  str = '',
  target,
  position = str.length
) => {
  const reg = new RegExp(`${target}$`, 'g');
  const startPosition = position - target.length > 0 ? position - target.length : 0;
  const searchStr = str.slice(startPosition, position);
  return searchStr.match(reg) != null;
};

export default endsWith;
