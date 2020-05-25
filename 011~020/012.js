switch
// case값이 일치할 경우 해당 case 명령문 실행 후 break를 통해 switch문 빠져나옴

ex)
var language = "Vue"

    switch(language) {
        case "Javascript":
            console.log("Javascript 공부차례")
            break;
        case "HTML":
            console.log("HTML 공부 차례")
            break;
        case "CSS":
            console.log("CSS 공부 차례")
            break;
        case "Vue":
            console.log("Vue 공부 차례")
            break;
        default:
            console.log("마스터")
            break;
    }
    
    // 출력 : Vue 공부 차례
