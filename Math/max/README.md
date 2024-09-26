# max

## About

> [lodash max](https://lodash.com/docs/4.17.15#max) > <br/>
> Computes the maximum value of array. If array is empty or falsey, undefined is returned..<br/>

## Test

1. Max of Array with Repeated Numbers

   Input: \_.max([3, 3, 3, 3])<br/> Output: 3

2. Max of Array with null and undefined Values

   Input: \_.max([10, null, undefined, 5, 7])<br/> Output: 10

3. Max of Array with Non-Numeric Values

   Input: \_.max([10, "string", true, 5])<br/> Output: 10 (Note: non-numeric values are ignored)

4. Max of Array with Only null or undefined Values

   Input: \_.max([null, undefined])<br/> Output: undefined

5. Max of Array with Negative Zero and Positive Zero

   Input: \_.max([0, -0])<br/> Output: 0 (Both are treated the same)

6. Max of Array with Infinity Values

   Input: \_.max([10, Infinity, -Infinity, 5])<br/> Output: Infinity

7. Max of Array with NaN Values

   Input: \_.max([10, NaN, 5])<br/> Output: 10 (NaN is ignored)

8. Max of Array with Only NaN Values

   Input: \_.max([NaN, NaN])<br/> Output: undefined (Since there are no valid numbers)
