논리 연산자

AND 연산자 - &&
// 두개다 맞아야 실행

ex)
    var a = 0;
    var b = 1;
    
    1.
    if(a==0 && b==1) {
        console.log("실행")
    } else {
        console.log("미실행")
    }
    // 실행(둘 다 맞아서) 
     
    2.
    if(a==0 && b==10) {
        console.log("실행")
    } else {
        console.log("미실행") 
    }
    // 미실행(a는 맞지만 b가 틀려서)
    
    3.
    if(a==1 && b==1) {
        console.log("실행")
    } else {
        console.log("미실행") 
    }
    // 미실행(b는 맞지만 a가 틀려서)
    
OR 연산자 - ||
// 둘중 하나만 맞아도 실행

ex)
    var a = 0;
    var b = 1;
    
    1.
    if(a==0 || b==10) {
        console.log("실행")
    } else {
        console.log("미실행")
    }
    // 실행(a가 맞아서) 
    
    2.
    if(a==1 || b==1) {
        console.log("실행")
    } else {
        console.log("미실행")
    }
    // 실행(b가 맞아서) 
