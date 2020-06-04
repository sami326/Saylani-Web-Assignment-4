num1 = +prompt("Enter Number 1: ");
num2 = +prompt("Enter Number 2: ");

result1 = num1 - num2;
document.getElementById("result1").innerHTML = "Subtraction of " + num1 + " and " + num2 + " is " + result1;

result2 = num1 * num2;
document.getElementById("result2").innerHTML = "Multiplication of " + num1 + " and " + num2 + " is " + result2;

result3 = num1 / num2;
document.getElementById("result3").innerHTML = "Division of " + num1 + " and " + num2 + " is " + result3;

result4 = num1 % num2;
document.getElementById("result4").innerHTML = "Modulus of " + num1 + " and " + num2 + " is " + result4;