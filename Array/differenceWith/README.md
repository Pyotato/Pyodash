# DifferenceBy

## About

> [lodash differenceWith](https://lodash.com/docs/4.17.15#differenceWith) <br/>
> This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).<br/>
> Note: Unlike `_.pullAllWith`, this method returns a new array.

## Test

1. Basic Example

   Input: differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], \_.isEqual)
   Output: [{ 'x': 2, 'y': 1 }]
