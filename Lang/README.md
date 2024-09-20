# Lang

> 👟 lodash 구현 공부 : Lang 함수들<br/>
> 이 레포지터리는 lodash의 함수들을 구현해보면서 공부한 내용을 담고 있습니다.<br/>
> 🧪 테스트: vitest
> 🐥 타입스크립트

|                                   함수                                   | 설명                                                                                                                                                                                                                                                                                                                                                                                               |
| :----------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [castArray](https://github.com/Pyotato/Pyodash/tree/main/Lang/castArray) | `castArray(arg:any)`함수는 인자로 받은 arg을 배열로 감싸 리턴합니다.                                                                                                                                                                                                                                                                                                                               |
|     [clone](https://github.com/Pyotato/Pyodash/tree/main/Lang/clone)     | `clone(value:any)`함수는 인자로 받은 value 값을 structuredClone으로 복제하여 리턴합니다. Arrays, array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 그리고 typed arrays의 복제를 지원하고, 열거가능한(enumerable) argument 객체는 일반 객체로 복제됩니다. 복제가 불가능한 error object, funciton, DOM node, Weakmap 등은 빈 객체를 리턴합니다. |
|   [isEqual](https://github.com/Pyotato/Pyodash/tree/main/Lang/isEqual)   | `isEqual(arg1:any,arg1:any)`함수는 인자로 받은 두 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, typed arrays 값들을 비교하여 참거짓을 리턴합니다. 함수와 dom node는 === 로 동등비교를 합니다.                                                                                                                      |
