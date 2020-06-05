let firstNum = +prompt("Enter first number: ");
let secondNum = +prompt("Enter second number: ");

let op = prompt("Enter Operation: ");

if(op === "+"){
    alert("Result of Addition is: " + (firstNum + secondNum));
}
else if(op === "x" || op === "*"){
    alert("Result of Multiplication is: " + (firstNum * secondNum));
}
else if(op === "-"){
    alert("Result of Subtraction is: " + (firstNum - secondNum));
}
else if(op === "/"){
    alert("Result of Division is: " + (firstNum / secondNum));
}
else if(op === "%"){
    alert("Result of Modulus is: " + (firstNum % secondNum));
}
else{
    alert("Enter correct operator");
}