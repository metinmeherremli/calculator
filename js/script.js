var firstnumber = +prompt("Enter your first number")
var secondnumber = +prompt("Enter your second number")
var symbol = prompt("Enter your symbol")
if (symbol == "+") {
    resoult = firstnumber + secondnumber
    alert(resoult)
} else if (symbol == "-") {
    resoult = firstnumber - secondnumber
    alert(resoult)
}else if (symbol == "/") {
    resoult = firstnumber / secondnumber
    if (firstnumber == 0 || secondnumber == 0) {
        alert("you cant divade zero")
    }else{
        alert(resoult)
    }
}else if (symbol == "*") {
    resoult = firstnumber * secondnumber
    alert(resoult)
}else{
    alert("It was not symbol")
}