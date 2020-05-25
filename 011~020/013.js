for(반복문)
- continue // 특정 코드를 실행하지 않고 건너뜀
- break // 특정 코드까지만 실행되고 반복문 종료

형식
for(초기값; 조건식; 초기값 변경) {
    코드 1
}

동작 순서
초기값 실행 -> 조건식 검사 -> 코드 1 실행 -> 초기값 변경 실행 -> 조건식 검사 (O)
초기값 실행 -> 조건식 검사 -> 코드 1 실행 -> 조건식 검사 -> 초기값 변경 실행 (X)

ex)
	for(var i=0; i<10; i++) {
        if(i%2 == 0) {
            console.log("continue 실행")
            continue;
        }
        if(i == 7) {
            console.log("break 실행")
            break;
        }
        console.log(i)
    }
    
// 출력

    // continue 실행
    // 1
    // continue 실행
    // 3
    // continue 실행
    // 5
    // continue 실행
    // break 실행
