전달 인자(argument)
// 매개 변수는 함수 선언시 작성되는 변수 - function hi(매개변수)
// 전달 인자는 함수 호출될 때 전달되는 값 - hi(인자)
// 자바스크립트는 전달 인자와 매개 변수 개수가 달라도 에러가 발생하지 않음

    function test(a, b) {
        console.log(a)
        console.log(b)
    }
    test(1,2,3)
