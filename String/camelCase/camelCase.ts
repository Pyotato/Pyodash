const camelCase: (str: string) => string = str => {
  let slicedStr = str.split(/[^a-zA-Z0-9]/g).filter(str => str !== '');
  if (slicedStr == null) {
    return str;
  }
  return slicedStr
    .map((str: string, index: number) =>
      index === 0 ? str.toLowerCase() : str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
    )
    ?.join('');
};

export default camelCase;
