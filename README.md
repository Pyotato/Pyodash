# Pyodash

> 👟 lodash 구현 공부<br/>
> 이 레포지터리는 lodash의 함수들을 구현해보면서 공부한 내용을 담고 있습니다.<br/>
> 🧪 테스트: vitest
> 🐥 타입스크립트

## Array

|                                        함수                                         | 설명                                                                                                                                                                                               |
| :---------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          [chunk](https://github.com/Pyotato/Pyodash/tree/main/Array/chunk)          | `chunk(array:array,size:number)`함수는 인자로 받은 array를 size만큼 잘라서 중첩 배열로 리턴합니다.                                                                                                 |
|        [compact](https://github.com/Pyotato/Pyodash/tree/main/Array/compact)        | `compact(array:array)`함수는 인자로 받은 array에서 falsy(false, null, 0, "", undefined, and NaN)한 값들을 제거하고 리턴합니다.                                                                     |
|         [concat](https://github.com/Pyotato/Pyodash/tree/main/Array/concat)         | `concat(...args)`함수는 인자로 받은 값들을 하나의 배열로 리턴합니다. 이때 매개변수 중 배열인 값이 전달되면 flat(1)을 합니다.                                                                       |
|     [difference](https://github.com/Pyotato/Pyodash/tree/main/Array/difference)     | `difference(baseArr,...args)`함수는 인자로 받은 배열들 중 첫번째 배열 baseArr을 기준으로 나머지 인자로 받은 배열에 있는 값들을 필터하고 새로운 배열을 리턴합니다.                                  |
|   [differenceBy](https://github.com/Pyotato/Pyodash/tree/main/Array/differenceBy)   | `differenceBy(baseArr,...args)`함수는 두번째 인자부터 마지막 인자 전까지의 인자들 `args`의 값들을, 마지막 인자 `iteratee`로 비교기준을 적용하여 `baseArr`값들을 필터해서 새로운 배열을 리턴합니다. |
| [differenceWith](https://github.com/Pyotato/Pyodash/tree/main/Array/differenceWith) |                                                                                                                                                                                                    |
|           [drop](https://github.com/Pyotato/Pyodash/tree/main/Array/drop)           | `differenceBy(arr,n=1)`함수는 `arr`배열의 첫 인덱스에서부터 n까지의 요소를 제거한 배열을 리턴합니다.                                                                                               |
|           [fill](https://github.com/Pyotato/Pyodash/tree/main/Array/fill)           | `fill(arr,value,start=0,end=arr.length)`함수는 `arr`배열의 start 인덱스에서부터 end까지의 요소를 value로 대체하여 리턴합니다.                                                                      |

## Lang

|                                   함수                                   | 설명                                                                                                                                                                                                                                                                                                                                                                                               |
| :----------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [castArray](https://github.com/Pyotato/Pyodash/tree/main/Lang/castArray) | `castArray(arg:any)`함수는 인자로 받은 arg을 배열로 감싸 리턴합니다.                                                                                                                                                                                                                                                                                                                               |
|     [clone](https://github.com/Pyotato/Pyodash/tree/main/Lang/clone)     | `clone(value:any)`함수는 인자로 받은 value 값을 structuredClone으로 복제하여 리턴합니다. Arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 그리고 typed arrays의 복제를 지원하고, 열거가능한(enumerable) argument 객체는 일반 객체로 복제됩니다. 복제가 불가능한 error object, funciton, DOM node, Weakmap 등은 빈 객체를 리턴합니다. |
|   [isEqual](https://github.com/Pyotato/Pyodash/tree/main/Lang/isEqual)   | `isEqual(arg1:any,arg1:any)`함수는 인자로 받은 두 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, typed arrays 값들을 비교하여 참거짓을 리턴합니다. 함수와 dom node는 === 로 동등비교를 합니다.                                                                                                                      |
|  [toString](https://github.com/Pyotato/Pyodash/tree/main/Lang/toString)  | `toString(arg:any)`함수는 인자로 받은 값을 string으로 리턴합니다. null과 undefined는 빈 문자열 ""를, -0은 부호를 유지하여 "-0"를 리턴합니다.                                                                                                                                                                                                                                                       |

## Math

|                               함수                               | 설명                                                                                                                                                                                                     |
| :--------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   [add](https://github.com/Pyotato/Pyodash/tree/main/Math/add)   | `chunk(array:array,size:number)`함수는 인자로 받은 array를 size만큼 잘라서 중첩 배열로 리턴합니다.                                                                                                       |
|  [ceil](https://github.com/Pyotato/Pyodash/tree/main/Math/ceil)  | `ceil(arg:number,precision?:number)`함수는 인자로 받은 arg를 precision만큼 반올림합니다.                                                                                                                 |
| [divide](https://github.com/Pyotato/Pyodash/tree/main/Math/ceil) | `divide(dividend: number, divisor: number)`함수는 첫번째 인자로 받은 숫자 dividend를 두번째 인자로 받은 divisor로 나눈 값을 리턴합니다.                                                                  |
| [floor](https://github.com/Pyotato/Pyodash/tree/main/Math/floor) | `floor(num: number, precision?: number)`함수는 첫번째 인자로 받은 숫자 num를 두번째 인자로 받은 precision 아래의 자릿수(0부터 20까지만)는 버리고 리턴합니다. precision을 넘기지 않으면 디폴트로 0입니다. |
