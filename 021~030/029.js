객체(Object) 이해(2)
(속성 접근, 추가, 수정, 삭제)

형식
var 변수명 = {key:value}

접근 - 변수명.key OR 변수명[key]
추가 - 변수명.key(새로운) = value
수정 - 변수명.key(기존에 있는) = value
삭제 - delete 변수명.key

ex)
    var a = {name: 'junsu', age: 26, address: 'seoul'}
    
    // 전체 출력
    console.log(a) // { name: 'junsu', age: 26, address: 'seoul' }
    
    // 접근
    console.log(a.name) // junsu
    console.log(a['age']) //26
    
    // 추가
    a.hobby = "game"
    console.log(a) // { name: 'junsu', age: 26, address: 'seoul', hobby: 'game' }
    
    // 수정
    a.hobby = "study"
    console.log(a) // { name: 'junsu', age: 26, address: 'seoul', hobby: 'study' }
    
    // 삭제
    delete a.hobby
    console.log(a) // { name: 'junsu', age: 26, address: 'seoul' }
