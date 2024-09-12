# Pyodash

> 👟 lodash 구현 공부<br/>
> 이 레포지터리는 lodash의 함수들을 구현해보면서 공부한 내용을 담고 있습니다.<br/>
> 🧪 테스트: vitest
> 🐥 타입스크립트

| 분류                                                        |                                    함수                                     | 설명                                                                                                                                                              |
| :---------------------------------------------------------- | :-------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Array](https://github.com/Pyotato/Pyodash/tree/main/Array) |      [chunk](https://github.com/Pyotato/Pyodash/tree/main/Array/chunk)      | `chunk(array:array,size:number)`함수는 인자로 받은 array를 size만큼 잘라서 중첩 배열로 리턴합니다.                                                                |
| [Array](https://github.com/Pyotato/Pyodash/tree/main/Array) |    [compact](https://github.com/Pyotato/Pyodash/tree/main/Array/compact)    | `compact(array:array)`함수는 인자로 받은 array에서 falsy(false, null, 0, "", undefined, and NaN)한 값들을 제거하고 리턴합니다.                                    |
| [Array](https://github.com/Pyotato/Pyodash/tree/main/Array) |     [concat](https://github.com/Pyotato/Pyodash/tree/main/Array/concat)     | `concat(...args)`함수는 인자로 받은 값들을 하나의 배열로 리턴합니다. 이때 매개변수 중 배열인 값이 전달되면 flat(1)을 합니다.                                      |
| [Array](https://github.com/Pyotato/Pyodash/tree/main/Array) | [difference](https://github.com/Pyotato/Pyodash/tree/main/Array/difference) | `difference(baseArr,...args)`함수는 인자로 받은 배열들 중 첫번째 배열 baseArr을 기준으로 나머지 인자로 받은 배열에 있는 값들을 필터하고 새로운 배열을 리턴합니다. |
