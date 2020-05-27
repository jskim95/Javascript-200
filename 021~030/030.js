ES6 - 단축 속성명
// 객체의 속성을 간단하게 정의
// 변수가 미리 준비되어 있는 경우 사용 가능
// 변수명으로 속성의 key, value를 한번에 정의 가능

ex)
    var name = 'junsu'
    var age = 26
    var address = 'seoul'
    
    var me = {name, age, address}
    console.log(me) // 	{ name: 'junsu', age: 26, address: 'seoul' }
