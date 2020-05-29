함수(function)

형식
function 함수이름(매개변수) {
    함수 내용
}

1. 함수 표현식
// 함수를 정의하는 동시에 변수에 할당

    var test1 = function(food) {
        console.log('test1 : '+food)
    }
    
    test1('bulgogi') // test1 : bulgogi
    
2. 함수 선언문
// 함수 선언

    function test2(food) {
        console.log('test2 : '+food)
    }
    
    test2('kimchi') // test2 : kimchi
