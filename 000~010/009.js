console

// 괄호 안에 대입된 값을 출력
1. console.log("hi") // hi

// 괄호 안에 내용이 몇번 호출 되었는지 확인할 때 사용
2. console.count("dg") // dg: 1
   console.count("dg") // dg: 2
   console.count("dg") // dg: 3

// 코드 실행 시간을 확인할 때
3. console.time("dg")
   console.log("test")
   console.timeEnd("dg") // dg: 1.326ms
