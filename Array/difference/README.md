# Chunk

## About

> [lodash difference](https://lodash.com/docs/4.17.15#difference) <br/>
> Creates an array of array values not included in the other given arrays using [SameValueZero](https://262.ecma-international.org/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array. <br/>
> Note: Unlike `_.pullAll`, this method returns a new array.

### SameValueZero

> SameValueZero(x, y) 내부 비교 추상 연산에서 x와 y가 ECMAScript 언어의 값들이라면 다음과 같은 비교에 따라 true/false 값을 리턴합니다. <br/>
>
> 1. Type(x)와 Type(y)사 다르다면 `false`를 리턴합니다.
> 2. Type(x)가 Number라면
>
> - x가 `NaN`이과 y도 `NaN`이라면 `true`를 리턴합니다.
> - x가 `+0`이고, y가 `-0`이라면 `true`를 리턴합니다.
> - x가 `-0`이고, y가 `+0`이라면 `true`를 리턴합니다.
> - x가 y와 같은 Number 값이라면 `true`를 리턴합니다.
> - `false`를 리턴합니다.
>
> 3. [SameValueNonNumber(x, y)](https://262.ecma-international.org/7.0/#sec-samevaluenonnumber)를 리턴합니다.

### SameValueNonNumber

> SameValueNonNumber(x, y) 내부 비교 추상 연산에서 x와 y가 Number가 아닌 값들이라면 다음과 같은 비교에 따라 true/false 값을 리턴합니다. <br/>
>
> 1. Type(x)가 Number타입이 아님을 단언합니다.
> 2. Type(x)와 Type(y)가 같도록 단언합니다.
> 3. Type(x)가 `Undefined`라면 `true`를 리턴합니다.
> 4. Type(x)가 `Null`라면 `true`를 리턴합니다.
> 5. Type(x)가 `String`이라면, x와 y가 동일한 코드유닛(길이와 코드 유닛이 인덱스 순으로 이루어져있다면)의 시퀀스로 이루어졌다면 `true`를, 아니라면 `false`를 리턴합니다.
> 6. Type(x)가 `Boolean`이라면, x와 y모두 `true`또는 `false`인 경우에는 `true`를, 아닌 경우에는 `false`를 리턴합니다.
> 7. Type(x)가 `Symbol`이라면, x와 y모두 같은 Symbol 값인 경우 `true`를, 아닌 경우에는 `false`를 리턴합니다.
> 8. x와 y가 같은 Object 값이라면 `true`를, 아닌 경우에는 `false`를 리턴합니다.

## Test

1. Basic Example with Numbers

   Input: difference([2, 1], [2, 3])
   Output: [1]

2. No Common Elements

   Input: difference([1, 2, 3], [4, 5, 6])
   Output: [1]

3. All Elements in First Array Are in Second Array

   Input: difference([1, 2, 3], [1, 2, 3])
   Output: []

4. First Array is Empty

   Input: difference([], [1, 2, 3])
   Output: []

5. Second Array is Empty

   Input: difference([1, 2, 3], [])
   Output: [1, 2, 3]

6. Arrays with Mixed Data Types

   Input: difference([1, 'a', true], [1, 'b', false])
   Output:['a', true]

7. Multiple Arrays (Difference with More than One Array)
   Input: difference([1, 2, 3, 4], [2, 3], [4, 5])
   Output: [1]

8. Arrays with Objects (Objects are Compared by Reference, Not Value)
   Input: difference([1, 'a', true], [1, 'b', false])
   Output: ['a', true]

9. Between Arrays with Duplicates
   Input: difference([1, 2, 2, 3], [2])
   Output: [1, 3]

10. Using undefined and nulls
    Input: difference([undefined, null, 1], [null, 2])
    Output: [undefined, 1]
