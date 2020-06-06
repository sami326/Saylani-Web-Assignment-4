let num1 = +prompt("Enter First Number: ");
let num2 = +prompt("Enter Second Number: ");

if (num1 > num2){
    alert("Number 1 is greater than Number2\n"+ num1 + " > " + num2);
}
else if (num1 < num2){
    alert("Number 2 is greater than Number1\n"+ num1 + " < " + num2);
}
else{
    alert("Both Number are Equal\n" + num1 + " = " + num2);
}