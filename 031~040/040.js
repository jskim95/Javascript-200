함수 호이스팅
// 함수를 선언하기 전에 호출이 가능한 현상

// 함수 선언식 => 호이스팅 (O)
// 함수 표현식 => 호이스팅 (X)

함수 선언식
    test() // 함수 선언식은 호이스팅 가능
    function test() {
        console.log("함수 선언식은 호이스팅 가능")
    }
    
함수 표현식
    test2() // TypeError: test2 is not a function
    var test2 = function () {
        console.log("함수 표현식은 호이스팅 불가능")
    }
