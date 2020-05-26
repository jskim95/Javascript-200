for in

형식(속성명 in 반복할 변수) {
    ...
}

hasOwnProperty // 해당 객체의 key, value를 출력하기 위해서


// ex) hasOwnProperty 사용

	var myInfo = {name:'kim', age:26, address:'seoul'}
        Object.prototype.toText = "안녕하세요"

	for(var key in myInfo) {
        if(!myInfo.hasOwnProperty(key)) continue;
        console.log(key)
        console.log(myInfo[key])
        console.log("--------")
    }
    
    // 출력
    //	name
    //  kim
    //  --------
    //  age
    //  26
    //  --------
    // address
    //  seoul
    //  --------
    
// ex) hasOwnProperty 미사용

	var myInfo = {name:'kim', age:26, address:'seoul'}
       Object.prototype.toText = "안녕하세요"

	for(var key in myInfo) {
        // if(!myInfo.hasOwnProperty(key)) continue;
        console.log(key)
        console.log(myInfo[key])
        console.log("--------")
    }
    
    // 출력
    // name
    // kim
    // --------
    // age
    // 26
    // --------
    // address
    // seoul
    // --------
    // toText
    // 안녕하세요
    // --------
