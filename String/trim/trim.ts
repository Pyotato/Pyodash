/**
 *
 * @param str  The string to trim.
 * @param char The characters to trim.
 * @returns Returns the trimmed string.
 */
const trim: (str: string, chars?: string) => string = (str = '', chars = ' ') => {
  if (chars === ' ') {
    return str.replaceAll(' ', '');
  } else {
    [...chars].forEach(char => (str = str.replaceAll(char, '')));
    return str;
  }
};

export default trim;
