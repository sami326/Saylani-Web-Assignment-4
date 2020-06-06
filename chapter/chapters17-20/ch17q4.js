let num = +prompt("Enter a number to show its multiplication table");
let len = +prompt("Enter length multiplication table");

document.write("Multiplication Table of: " + num + "<br>");
document.write("Length: " + num + "<br><br>");

for (let i = 1; i <= len; i++){
    document.write("<p>" + num + " x " + i + " = " + (num * i) + "</p>");
}