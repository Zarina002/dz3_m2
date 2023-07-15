// var array = [123, 234, 345, 56, 12, 67, 555]
// for (var i = 0; i< array.length; i++){
//     if (array.length < 6){
//         array.push(number)
//     }
// }
// console.log(`цифры 1,2,5  ${array}` )
//


//правильный вариант:
//  var array = [123, 234, 345, 56, 12, 67, 555]
// for (var i = 0; i< array.length; i++) {
//     var number = array[i].toString()[0]
//     if (number.startsWith(`1`) || number.startsWith(`2`) || number.startsWith(`5`)){
//         console.log(array[i])
//     }
// }


// функции
// function-declaration
function calc(num1, num2) {
    return console.log(num1 + num2)
}

console.log(calc(20, 50))

// второй вариант:
function calc() {
    var result = 1 + 1
    return result
}

console.log(calc())

// function=expression
// var strlog = function (string) {
//     return alert(string)
// }
// strlog(2)

var getMaxNum = function (n1, n2) {
    if (n1 > n2) {
        console.log(n1)
    }else{
        console.log(n2)
    }
}
getMaxNum(4, 8)

//arroe function и тернарные операторы lambda function
var getMaxNum2 = (n1, n2) => console.log(n1 > n2 ? n1 : n2)
getMaxNum2(3, 6)