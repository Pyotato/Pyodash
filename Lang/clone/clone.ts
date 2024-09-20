const clone: (value: any) => any = value => {
  try {
    const cloned = structuredClone(value);
    return cloned;
  } catch (error) {
    // An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps
    return {};
  }
};

export default clone;
