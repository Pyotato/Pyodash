# Add

## About

> [lodash add](https://lodash.com/docs/4.17.15#add)
> Adds two numbers. <br/>

## Test

1. Basic Case

   Input: add(2, 3)<br/>
   Output: 5

2. Addition of Two Negative Numbers

   Input: add(-2, -3)<br/>
   Output: -5

3. Addition of a Positive and a Negative Number

   Input: add(10, -5)<br/>
   Output: 5

4. Addition with Zero

   Input: add(10, -5)<br/>
   Output: 5

5. Addition of Decimal Numbers

   Input: add(1.5, 2.3)<br/>
   Output: 3.8

6. Addition Involving Infinity

   Input: add(Infinity, 5)<br/>
   Output: Infinity

7. Addition of Infinity and -Infinity

   Input: add(Infinity, -Infinity)<br/>
   Output:isNaN

8. Addition with NaN

   Input: add(NaN, 5)<br/>
   Output: isNaN

9. Addition of a Large Number and a Small Number

   Input: add(1000000, 0.0001)<br/>
   Output: 1_000_000.0001

10. Addition of Very Large Numbers

    Input: add(1e21, 1e21)<br/>
    Output: 2e21

11. Addition of 0.1+0.2

Input: add(0.1, 0.2)<br/>
Output: 0.3
