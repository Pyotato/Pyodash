# castArray

## About

> [lodash castArray](https://lodash.com/docs/4.17.15#castArray) > <br/>
> Casts value as an array if it's not one. <br/>

## Test

1. Casting a Number to an Array

   Input: castArray(1)<br/>
   Output: [1]

2. Casting an Object to an Array

   Input: castArray({ a: 1 })<br/>
   Output:[{ a: 1 }]

3. Casting a String to an Array

   Input: castArray("hello")<br/>
   Output:["hello"]

4. Passing an Array (Should Return the Array as Is)

   Input: castArray([1, 2, 3])<br/>
   Output: [1, 2, 3]

5. Casting null to an Array

   Input: castArray(null)<br/>
   Output:[null]

6. Casting undefined to an Array

   Input: castArray(undefined)<br/>
   Output:[undefined]

7. Casting a Boolean Value to an Array

   Input: castArray(true)<br/>
   Output:[true]

8. Casting a NaN Value to an Array

   Input: castArray(NaN)<br/>
   Output:[NaN]

9. Casting an Empty String to an Array

   Input: castArray("")<br/>
   Output:[""]

10. No Arguments Passed

    Input: castArray()<br/>
    Output:[]
