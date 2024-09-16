# dropRight

## About

> [lodash dropRight](https://lodash.com/docs/4.17.15#dropRight) <br/>
> Creates a slice of array with n elements dropped from the end.

## Test

1.  Dropping Without Specifying n (Default is 1)

    Input: dropRight([1, 2, 3]) <br/>
    Output: [1, 2]

2.  Dropping More Elements than Array Length

    Input: dropRight([1, 2, 3], 5) <br/>
    Output: []

3.  Dropping More Elements than Array Length

    Input: dropRight([1, 2, 3], 0) <br/>
    Output: [1, 2, 3]

4.  Dropping More Elements than Array Length

    Input: dropRight([1, 2, 3, 4], 2) <br/>
    Output: [1, 2]

5.  Dropping More Elements than Array Length

    Input: dropRight([], 2) <br/>
    Output: []

6.  Dropping More Elements than Array Length

    Input: dropRight([1, 2, 3], 3) <br/>
    Output: []

7.  Dropping More Elements than Array Length

    Input: dropRight([1, 2, 3]) <br/>
    Output: [1, 2]

8.  Dropping More Elements than Array Length

    Input: dropRight(["a", "b", "c"], 2) <br/>
    Output: ["a"]

9.  Dropping More Elements than Array Length

    Input: dropRight([1, "b", true], 1) <br/>
    Output: [1, "b"]

10. Dropping More Elements than Array Length

        Input: dropRight([[1], 0]) <br/>
        Output: [[1]]
