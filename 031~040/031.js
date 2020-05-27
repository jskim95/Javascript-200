ES6 - 속성 계산명
// 대괄호 []안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성을 생성할 수 있음

ex)
    var me = 'junsu'
    var person = {[me]:'male'}
    
    console.log(person) // 	{ junsu: 'male' }
