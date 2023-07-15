// declaration function
function declaration(arg) {
    console.log(typeof arg)
}
declaration(`hello`)

//expression function
var expression = function (arg) {
    console.log(typeof arg)
}
expression(20)
//arrow function
var types = (arg) => {
    console.log(typeof arg)
}
types([])

//declaration function for array
var array = [3, 4, 6, 8, 49, 85, 55, 47, 33]
function MaxNumber(arr) {
    var max = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return console.log(max)
}

MaxNumber(array)


//Polindrom

var text = prompt(`введите любой текст`)
function reversing (text) {
    var reversed = ``
    for (var i = text.length - 1; i >= 0; i--) {
        reversed += text[i]
    }
    return console.log(reversed)
}
reversing(text)
