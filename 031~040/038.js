ES6 - 함수 나머지 매개변수
// 정해지지 않은 매개변수를 정의하는 것
// 나머지 매개변수는 

형식
function(매개변수1, 매개변수2, ...나머지 매개변수) {
    코드
}

    function rest(a, b, ...c) {
        var all = a+b
        console.log(c) // [ 3, 4, 5, 6 ]
        for(var i=0; i<c.length; i++) {
            all += c[i]
        }
        console.log(all) // 21
    }
    
    rest(1,2,3,4,5,6)

