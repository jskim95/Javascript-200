ES6 - 함수 매개변수(초기값)
// 함수 선언과 동시에 매개변수에 값을 할당하여 초기값을 전달 인자가없을 경우 초기값 실행

    function me(name="junsu", age=26) {
        console.log(`${name}, ${age}`)
    }
    
    me() // junsu, 26
    me("kim") // kim, 26
