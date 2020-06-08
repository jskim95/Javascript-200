스코프
// 변수와 매개변수가 어디까지 유효한지 범위인지 나타냄

전역 스코프
// 어디에서든 참조 가능

지역 스코프
함수 자신 혹은 하위 함수에서만 참조 가능

예제)
    var a = "전역변수"
    
    function globalScope() {        
        // 전역 스코프
        var global = "글로벌"
        
         // 지역 스코프       
        function localScope () {
            var local = "지역"
            console.log(`localScope함수 global값 = ${global}`) // localScope함수 global값 = 글로벌
            console.log(`localScope함수 local값 = ${local}`) // localScope함수 local값 = 지역
            console.log(a) // 전역변수
        }
        localScope()
        
        console.log(`globalScope함수 global값 = ${global}`) // globalScope함수 global값 = 글로벌
        console.log(`globalScope함수 local값 = ${local}`) // local is not defined
        console.log(a) // 전역변수
    }
    globalScope()
    console.log(a) // 전역변수
