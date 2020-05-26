자료형 변환

// 덧셈 연산자는 상황에 따라 숫자형 또는 문자형으로 변환
// 뺄셈, 곱셈, 나눗셈 연산자 항상 숫자형으로 변환
// 변수 = +문자열 숫자 => 숫자형
// 변수 = String(숫자형) => 문자열
// 변수 = Number(문자열숫자) => 숫자형

ex)
    var a = '10'
    var b = 17
    
    console.log("덧셈 연산자")
    console.log(a+1) // 101
    
    console.log("뺄셈 나눗셈 곱셈 연산자")
    console.log(a-1) // 9
    console.log(a/2) // 5
    console.log(a*2) // 20
    
    console.log("+문자열 숫자")
    var c = +a
    console.log(typeof c) // number
    
    console.log("String(변수), Number(변수)")
    var d = String(b)
    console.log(typeof d) // string
    var e = Number(a)
    console.log(typeof e) // number
