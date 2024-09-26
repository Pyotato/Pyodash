const max: (numArr: any[]) => number | undefined = numArr => {
  if (numArr == null || numArr.length === 0) {
    return undefined;
  } else {
    let maxNum = -Infinity;
    let filtered = numArr.filter(item => !(typeof item !== 'number' || Number.isNaN(item)));
    if (filtered.length === 0) {
      return undefined;
    }
    while (filtered.length > 0) {
      let currentNum = filtered.pop() as number;
      maxNum = currentNum >= maxNum ? currentNum : maxNum;
    }
    return maxNum;
  }
};

export default max;
