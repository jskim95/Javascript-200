객체(Object) 이해(1)
// 값들을 그룹으로 묶은 데이터 모음
// 키(key)와 값(Value)을 한 쌍으로 정의하고 속성(Properties)이라 부름

형식
var 변수명 = {key:value}

ex)
    var a = {name:'junsu', age:26, address:'seoul'}
    console.log(a) // { name: 'junsu', age: 26, address: 'seoul' }
    
JSON
// 자바스크립트의 객체의 형식을 기반으로 만들어진 데이터 교환 형식
// 속성 key이름은 반드시 큰 따옴표("")로 표시된 문자열
// 속성 value는 반드시 문자열, 숫자, 배열, Boolean, null, 다른JSON객체만 가능

형식
{"key" : value}
