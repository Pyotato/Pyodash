# isEqual

## About

> [lodash isEqual](https://lodash.com/docs/4.17.15#isEqual) > <br/>
> Performs a deep comparison between two values to determine if they are equivalent. <br/>

Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===. <br/>

## Test

1. Basic Primitive Equality

   1. Same numbers (positive)

      Input: isEqual(1, 1)<br/>
      Output: `true`

   2. Different numbers

      Input: isEqual(1, 2)<br/>
      Output: `false`

   3. String equality

      Input: isEqual('hello', 'hello')<br/>
      Output: `true`

   4. String inequality

      Input: isEqual('hello', 'world')<br/>
      Output: `false`

   5. Boolean equality

      Input: isEqual(true, true)<br/>
      Output: `true`

   6. Boolean inequality

      Input: isEqual(true, false)<br/>
      Output: `false`

2. Array Equality

   1. Same numbers (positive)

      Input: isEqual([1, 2, 3], [1, 2, 3])<br/>
      Output: `true`

   2. Same numbers (positive)

      Input: isEqual([1, 2, 3], [3, 2, 1])<br/>
      Output: `false`

   3. Arrays of different lengths

      Input: isEqual([1, 2], [1, 2, 3])<br/>
      Output: `false`

   4. Arrays with different types of elements

      Input: isEqual([1, '2', 3], [1, 2, 3])<br/>
      Output: `false`

3. Object Equality

   1. Same objects (simple key-value pairs)

      Input: isEqual({ a: 1, b: 2 }, { a: 1, b: 2 })<br/>
      Output: `true`

   2. Different objects (different values)

      Input: isEqual({ a: 1, b: 2 }, { a: 1, b: 3 })<br/>
      Output: `false`

   3. Objects with additional keys

      Input: isEqual({ a: 1, b: 2 }, { a: 1 })<br/>
      Output: `false`

   4. Deeply nested objects (with different structure)

      Input: isEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } })<br/>
      Output: `false`

4. Mixed Types

   1. Object vs array

      Input: isEqual({ a: 1 }, [1])<br/>
      Output: `false`

   2. Object vs array

      Input: isEqual(1, "1")<br/>
      Output: `false`

   3. Number vs string

      Input: isEqual({ a: 1 }, [1])<br/>
      Output: `false`

   4. Array with object inside

      Input: isEqual([{ a: 1 }], [{ a: 1 }])<br/>
      Output: `true`

   5. Null and undefined

      Input: isEqual(null, undefined)<br/>
      Output: `false`

   6. Same function references

      const fn = () => {};
      Input: isEqual(fn, fn)<br/>
      Output: `true`

   7. Different function references

      const fn = () => {};
      Input: isEqual(fn, () => {})<br/>
      Output: `false`

5. Edge Cases

   1. Infinity vs Infinity

      Input: isEqual(Infinity, Infinity)<br/>
      Output: `true`

   2. Zero and negative zero

      Input: isEqual(0, -0)<br/>
      Output: `true`
