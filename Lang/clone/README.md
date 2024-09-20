# clone

## About

> [lodash clone](https://lodash.com/docs/4.17.15#clone) > <br/>
> Creates a shallow clone of value. <br/>
> Note: This method is loosely based on the [structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.

## Test

1. Shallow clone of a simple object

   const obj = { a: 1, b: 2 };<br/>
   Input: clone(obj) === obj<br/>
   Output: false

2. Shallow clone of an array (reference가 다르다)

   const arr = [1, 2, 3];<br/>
   Input: clone(arr) === arr<br/>
   Output: false

3. Shallow clone of a nested object (only top level cloned)

   const obj3 = { a: 1, b: { c: 2 } };<br/>
   Input: clone(obj3) === obj3<br/>
   Output: false

4. Shallow clone of a nested object (only top level cloned)

   const obj3 = { a: 1, b: { c: 2 } };<br/>
   Input: (clone(obj3).b).toEqual(obj3.b)<br/>
   Output: true

5. Empty object is returned for uncloneable values(error objects, functions, DOM nodes, and WeakMaps)

   const func = function () { return 'test';};<br/>
   Input: clone(func).toEqual({})<br/>
   Output: true

6. Clone of an object with array properties

   const obj6 = { a: [1, 2, 3], b: 4 };<br/>
   Input: expect(clone(obj6).a).toEqual(obj6.a)<br/>
   Output: true

7. Clone of a primitive value (no change expected)

   const num = 10;<br/>
   Input: expect(clone(num)).toEqual(num)<br/>
   Output: true

8. Clone a Date object (same time value)

   const date = new Date();<br/>
   Input: expect(clone(date).getTime()).toEqual(date.getTime())<br/>
   Output: true

9. Clone a Date object (different references)

   const date = new Date();<br/>
   Input: clone(date) === date<br/>
   Output: false

10. Clone an object with undefined value (different references)

    const obj10 = { a: undefined, b: 1 };<br/>
    Input: clone(obj10) === obj10<br/>
    Output: false

11. Clone a Map or Set

    const map = new Map([[1, 'one']]);<br/>
    Input: expect(clone(map).get(1)).toEqual(map.get(1))<br/>
    Output: true

12. Clone a Map or Set (shallow clone: references remain the same).

    const map = new Map([[1, 'one']]);<br/>
    Input: expect(clone(map)).toEqual(map)<br/>
    Output: true

13. Clone a Map or Set (shallow clone: references remain the same).

    const wm = new WeakMap();<br/>
    const o1 = {};<br/>
    wm.set(o1, 37);<br/>
    Input: expect(clone(wm)).toEqual({})<br/>
    Output: true
