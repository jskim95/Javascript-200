while, do-while

// ()괄호 안에 조건문이 true, false일때만 실행
// break, continue 사용 가능
// do-while은 조건문이 false 여도 한번은 무조건 실행

ex) while

    var a = 0;   
    while(5>a) {
        a++
        console.log(a)
    }
    
    // 출력
    // 1
    // 2
    // 3
    // 4
    // 5

ex) do-while

    var i = 100
	do {
        console.log(i)
        console.log("1회 무조건 실행")
    } while(i == 0) 
    
    // 출력
    
    // 100
    // 1회 무조건 실행
    
    
