# ceil

## About

> [lodash ceil](https://lodash.com/docs/4.17.15#ceil) > <br/>
> Computes number rounded up to precision.<br/>

## Test

1. Rounding up an integer

   Input: ceil(4.006)<br/>
   Output: 5

2. Rounding up with precision to 2 decimal places

   Input: castArray(6.004, 2)<br/>
   Output 6.01

3. Rounding up with precision to 1 decimal place

   Input: ceil(7.25, 1)<br/>
   Output: 7.3

4. Rounding up with negative precision (to nearest 10)

   Input: ceil(6040, -2)<br/>
   Output: 6100

5. Rounding up a negative number

   Input: ceil(-4.006)<br/>
   Output: -4

6. Rounding up a negative number with precision to 1 decimal place

   Input: ceil(-5.335, 1)<br/>
   Output: -5.3

7. Rounding a whole number (no change)

   Input: ceil(10)<br/>
   Output: 10

8. Rounding with precision of 0
   Input: ceil(7.004, 0)<br/>
   Output: 8

9. Rounding with very large precision

   Input: ceil(0.123456, 5)<br/>
   Output: 0.12346
