ES6 - let 키워드

ex) 조건문
    // let은 조건문 안 블록 범위에서만 값이 유효하다 블록을 벗어나면 값이 유효하지 않다.
    // var는 조건문 안 블록 범위에서 값을 수정하고 블록을 벗어나도 값이 유효하다.
    
    let a = 10
    var b = 20
    var c = 30
  
    if(true) {
        let a = 1
        let b = 2
        var c = 3
        console.log(a) // 1
        console.log(b) // 2
        console.log(c) // 3
    }
    
    console.log(a) // 10
    console.log(b) // 20
    console.log(c) // 3
    
ex) 함수
    // let, var 모두 함수 레벨 스코프이다
    // 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다.
    // 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
    
    let a = 10
    var b = 20
    var c = 30
   
    function test () {
        let a = 1
        let b = 2
        var c = 3
        var d = 4
        console.log(a) // 1
        console.log(b) // 2
        console.log(c) // 3
        console.log(d) // 4
    }
    test()
    console.log(a) // 10
    console.log(b) // 20
    console.log(c) // 30
    console.log(d) // ReferenceError: d is not defined
