# identity

## About

> [lodash identity](https://lodash.com/docs/4.17.15#identity) > <br/>
> This method returns the first argument it receives.<br/>

## Test

1. let object = { 'a': 1 };일 때, identity(object) === object은 true다.
   Input: identity(object) <br/>
   Output: object
2. Identity returns a primitive value
   Input: identity(object) <br/>
   Output: object
3. Identity returns a string
   Input: identity(object) <br/>
   Output: object
4. Identity returns a boolean value
   Input: identity(object) <br/>
   Output: object
5. Identity returns an array reference
   const arr = [1, 2, 3]; 일 때,
   Input: identity(arr) === arr <br/>
   Output: true
6. Identity returns an object reference
   const obj = { a: 1, b: 2 }; 일 때,
   Input: identity(obj) === obj <br/>
   Output: true
7. Identity returns null
   Input: identity(null) <br/>
   Output: null
8. Identity returns undefined
   Input: identity(undefined) <br/>
   Output: undefined
9. Identity returns a function reference
   const fn = () => {}; 일 때,
   Input: identity(fn) === fn은 <br/>
   Output: true
10. Identity with no argument (this will return undefined)
    Input: identity() <br/>
    Output: undefined
11. dentity works with symbol
    const sym = Symbol('sym'); 일 떄,
    Input: identity(sym) <br/>
    Output: sym
