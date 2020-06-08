ES6 - const
// 선언시 값을 할당해야 한다.
// 재할당을 할 수 없다.
// 단, 배열, 객체의 속성의 값은 할당 할 수 있다.

    // 숫자형
    const a = 10
    console.log(a) // 10
    
    a = 5
    console.log(a) // TypeError: Assignment to constant variable.
    
    
    
    // 객체
    const b = {name:"jun", age:26}
    console.log(b) // { name: 'jun', age: 26 }
    
    b.name = "kim" 
    b.age = 21
    console.log(b) // { name: 'kim', age: 21 }
    
    b = {address:"seoul"}
    console.log(b) // TypeError: Assignment to constant variable.
    
    
    
    
    // 배열
    const c = [1, 2, 3]
    console.log(c) // [ 1, 2, 3 ]
    
    c[0] = 10
    c[1] = 20
    c[2] = 30
    console.log(c) // [ 10, 20, 30 ]
