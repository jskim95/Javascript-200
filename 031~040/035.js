예외 처리
// 예상치 못한 에러가 생겻을 때 사용 
// 의도한 에러가 생겻을 때 사용

1. throw문(의도한 에러가 생겻을 때)

    function countdown(num) {
        if(num>9) throw '9이하의 숫자를 입력하세요'
        console.log(num)
    }
    countdown(11) // Error: the string "9이하의 숫자를 입력하세요" was thrown, throw an Error :)

2. try-catch-finally문(의도한 에러 OR 예상치 못한 에러가 생겻을 때)

    function countdown(num) {
        if(num>9) throw num+'은 9이하의 숫자가 아닙니다'
        console.log(num)
    }
    
    try {
        countdown(13)
    } catch(e) {
        console.log(e)
    } finally {
        console.log("오류 해결")
    }
    
    // 출력
    // 13은 9이하의 숫자가 아닙니다
    // 오류 해결

    
